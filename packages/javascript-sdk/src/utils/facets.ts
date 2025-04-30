import type {
  Facet,
  FacetTree,
  FacetWithChildrenArray,
  FacetWithChildrenObject,
} from '@searchcraft/core';

/**
 * Helper function for getting a Node (FacetWithChildrenObject)
 * at a given path. Traverses the node tree to get the node.
 */
const getNodeAtPath = (
  tree: FacetTree,
  nodePaths: string[],
): FacetWithChildrenObject | undefined => {
  let cursor: FacetWithChildrenObject | undefined = tree;
  for (const nodePath of nodePaths) {
    cursor = cursor?.children[nodePath];
  }

  return cursor;
};

/**
 * Helper function to perform a deep merge.
 * Used for merging two branches of a facet tree together.
 */
const deepMergeWithSpread = (obj1, obj2) => {
  const result = { ...obj1 };

  for (const key in obj2) {
    // biome-ignore lint/suspicious/noPrototypeBuiltins: <explanation>
    if (obj2.hasOwnProperty(key)) {
      if (obj2[key] instanceof Object && obj1[key] instanceof Object) {
        result[key] = deepMergeWithSpread(obj1[key], obj2[key]);
      } else {
        result[key] = obj2[key];
      }
    }
  }

  return result;
};

/**
 * Given an array of facet paths, removes parent facet paths so that only the
 * Leaf facets are sent with the search request.
 */
export function removeSubstringMatches(arr: string[]): string[] {
  return arr.filter(
    (entry, index, array) =>
      !array.some(
        (otherEntry, otherIndex) =>
          otherIndex !== index && otherEntry.includes(entry),
      ),
  );
}

/**
 * Merges a current facet tree with an incoming facet tree.
 *
 * At each branch, the incoming facet tree's facets override current facet tree
 *
 * @param currentTree
 * @param incomingTree
 */
export const mergeFacetTrees = (
  currentTree: FacetTree,
  incomingTree: FacetTree,
): FacetTree => {
  const mergedTree: FacetTree = structuredClone(currentTree);

  const merge = (
    currentBranch: FacetWithChildrenObject,
    nodePath: string[],
  ): FacetWithChildrenObject => {
    const mergedBranch = structuredClone(currentBranch);
    const incomingBranch = getNodeAtPath(incomingTree, nodePath);

    if (!incomingBranch) {
      return mergedBranch;
    }

    for (const nodeName of Object.keys(currentBranch.children)) {
      if (incomingBranch.children[nodeName]) {
        mergedBranch.children[nodeName] = {
          ...deepMergeWithSpread(
            currentBranch.children[nodeName],
            incomingBranch.children[nodeName],
          ),
          count: mergedBranch.children[nodeName]?.count || 0,
        };
      } else if (mergedBranch.children[nodeName]) {
        mergedBranch.children[nodeName] = merge(
          mergedBranch.children[nodeName],
          [...nodePath, nodeName],
        );
      }
    }

    return mergedBranch;
  };

  return merge(mergedTree, []);
};

/**
 * A function that converts a FacetWithChidrenArray to a complete FacetTree object.
 *
 * It uses the `path` of each Facet to build the tree.
 *
 * @param facetWithChildArray
 */
export const facetWithChildrenArrayToCompleteFacetTree = (
  rootArray: FacetWithChildrenArray,
): FacetTree => {
  // 1) Start with an empty tree at root "/"
  const tree: FacetTree = {
    path: '/',
    count: 0,
    children: {},
  };

  // 2) Recursively collect all nodes except the implicit "/" itself
  const allFacets: Facet[] = [];
  const collect = (node: FacetWithChildrenArray) => {
    if (node.path !== '/') {
      allFacets.push({ path: node.path, count: node.count });
    }
    if (node.children) {
      for (const child of node.children) {
        collect(child);
      }
    }
  };
  collect(rootArray);

  // 3) Insert each flat node into our tree, creating missing ancestors
  for (const { path, count } of allFacets) {
    const segments = path.split('/').filter(Boolean); // "/sports/outdoors" -> ["sports","outdoors"]
    let cursor: FacetWithChildrenObject = tree; // start at the root
    for (const segment of segments) {
      // Build the full path of this level
      const prefixPath =
        cursor.path === '/' ? `/${segment}` : `${cursor.path}/${segment}`;

      // If this segment doesn't exist yet, create it
      if (!cursor.children[segment]) {
        cursor.children[segment] = {
          path: prefixPath,
          count: count,
          children: {},
        };
      }

      // Descend to the next level deeper
      cursor = cursor.children[segment];
    }

    // 4) now `cursor` is the node matching `path` — assign its real count
    cursor.count = count;
  }

  return tree;
};
