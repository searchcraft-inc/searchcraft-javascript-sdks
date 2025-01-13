import type {
  FacetChild,
  FacetChildObject,
  FacetRoot,
} from '@searchcraft/core';
import type { SearchResultMapping } from 'types';

export function parseCustomStyles(
  styles: string | Record<string, string>,
): Record<string, string> {
  if (typeof styles === 'string') {
    try {
      return JSON.parse(styles);
    } catch (error) {
      console.error('Invalid customStyles format:', styles);
      return {};
    }
  }
  return styles || {};
}

export function serializeStyles(
  styles: Record<string, Record<string, string>>,
): string {
  try {
    return JSON.stringify(styles);
  } catch (error) {
    console.error('Error serializing styles:', error);
    return '{}';
  }
}

/**
 * Given a timestamp value, returns a formatted time string for the time
 * since now.
 *
 * @param timestamp
 * @returns {string} Formatted string value
 */
export function getFormattedTimeFromNow(timestamp: string): string {
  const now = new Date();
  const inputTime = new Date(timestamp);
  const diffInSeconds = Math.floor(
    (now.getTime() - inputTime.getTime()) / 1000,
  );

  const minutes = Math.floor(diffInSeconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const years = Math.floor(days / 365);

  if (minutes < 60) {
    return `${minutes}m ago`;
  }
  if (hours < 24) {
    return `${hours}h ago`;
  }
  if (days < 365) {
    return `${days}d ago`;
  }
  return `${years}y ago`;
}

export function filterPaths(paths) {
  return paths.filter((path) => {
    const parts = path.split('/').filter(Boolean);

    if (parts.length > 1) {
      return true;
    }

    return !paths.some(
      (otherPath) => otherPath.startsWith(`${path}/`) && otherPath !== path,
    );
  });
}

export function formatNumberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function getMillis(unit: 'year' | 'month' | 'day' | 'hour'): number {
  const millisInHour = 60 * 60 * 1000;
  const millisInDay = 24 * millisInHour;
  const millisInMonth = 30 * millisInDay;
  const millisInYear = 365 * millisInDay;

  switch (unit) {
    case 'hour':
      return millisInHour;
    case 'day':
      return millisInDay;
    case 'month':
      return millisInMonth;
    case 'year':
      return millisInYear;
    default:
      return 3600000;
  }
}
/**
 * Given an array of facet paths, removes parent facet paths.
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
 * Given a document and a SearchResultMapping, return a mapped value from the document.
 *
 * @param document
 * @param {SearchResultMapping} mapping
 * @returns {string | undefined}
 */
export function getDocumentValueFromSearchResultMapping(
  document: Record<string, unknown> | undefined,
  mapping: SearchResultMapping | undefined,
): string | undefined {
  if (document && mapping) {
    return mapping.fieldNames
      .map((fieldNameDetails) => {
        let valueFound = document[fieldNameDetails.fieldName];

        if (valueFound && fieldNameDetails.dataType === 'date') {
          valueFound = getFormattedTimeFromNow(valueFound as string);
        }

        return valueFound;
      })
      .filter((value) => !!value)
      .join(mapping.delimiter || ' ');
  }
}

function deepMergeWithSpread(obj1, obj2) {
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
}

type FacetChildFragment = {
  count: number;
  path: string;
};

function facetToRecord(facet: FacetChild): Record<string, FacetChildFragment> {
  const records: Record<string, FacetChildFragment> = {};

  const traverseAndAddToFragments = (facetChild: FacetChild) => {
    records[facetChild.path] = {
      count: facetChild.count,
      path: facetChild.path,
    };

    facetChild.children?.forEach((child) => {
      traverseAndAddToFragments(child);
    });
  };

  traverseAndAddToFragments(facet);

  return records;
}

function recordToObject(
  record: Record<string, FacetChildFragment>,
): FacetChildObject {
  const root: FacetChildObject = {
    count: 0,
    path: '/',
    children: {},
  };

  Object.keys(record).forEach((key) => {
    const fragment = record[key];
    if (fragment.path === '/') {
      return;
    }
    const pathParts = fragment.path.substring(1).split('/');
    let currentRoot = root;
    let currentPath = '';

    pathParts.forEach((part, index) => {
      const nextPath = `${currentPath}/${part}`;
      if (!currentRoot.children[nextPath]) {
        currentRoot.children[nextPath] = {
          count: 0,
          path: nextPath,
          children: {},
        };
      }

      if (index === pathParts.length - 1) {
        currentRoot.children[nextPath].count = fragment.count;
      }

      currentPath = nextPath;
      currentRoot = currentRoot.children[nextPath];
    });
  });

  return root;
}

function objectToFacet(childObject: FacetChildObject): FacetChild {
  const transformed: FacetChild = {
    count: childObject.count,
    path: childObject.path,
    children: [],
  };

  if (Object.keys(childObject.children).length > 0) {
    transformed.children = Object.values(childObject.children).map(
      (subChildObject) => objectToFacet(subChildObject),
    );
  }

  return transformed;
}

/**
 * Filters records with the parent paths from record2 OUT of record1
 */
function filterRecordByParentPaths(
  record1: Record<string, FacetChild>,
  record2: Record<string, FacetChild>,
): Record<string, FacetChild> {
  // Extract all paths (keys) both records
  const paths1 = Object.keys(record1);
  const paths2 = Object.keys(record2);

  // Find all parent paths in record2
  const parentPaths = new Set(
    paths2
      .filter((path) => path.split('/').length > 2) // Only consider paths with more than one level
      .map((path) => path.substring(0, path.lastIndexOf('/'))),
  );

  // Filter out keys in record1 that share a parent path with any of the identified parent paths
  const filteredRecord = Object.fromEntries(
    paths1
      .filter(
        (path) => !parentPaths.has(path.substring(0, path.lastIndexOf('/'))),
      )
      .map((path) => [path, record1[path]]), // Reconstruct the key-value pairs
  );

  return filteredRecord;
}

export function mergeFacetRoots(
  fieldName: string,
  currentRoot: FacetRoot,
  incomingRoot: FacetRoot,
): FacetRoot {
  const currentArray = currentRoot[fieldName];
  const incomingArray = incomingRoot[fieldName];

  const currentRootFacetChild: FacetChild = {
    count: 0,
    path: '/',
    children: currentArray,
  };

  const incomingRootFacetChild: FacetChild = {
    count: 0,
    path: '/',
    children: incomingArray,
  };

  // Flatten them into records
  const currentRecord: Record<string, FacetChildFragment> = facetToRecord(
    currentRootFacetChild,
  );

  const incomingRecord: Record<string, FacetChildFragment> = facetToRecord(
    incomingRootFacetChild,
  );

  // Filter out the records from record1 (the current set of records)
  // that share a parent path with record2 (the incoming records)
  const filteredCurrentRecord = filterRecordByParentPaths(
    currentRecord,
    incomingRecord,
  );

  // Deep merge the records together
  const mergedRecord: Record<string, FacetChildFragment> = deepMergeWithSpread(
    filteredCurrentRecord,
    incomingRecord,
  );

  // Convert into a heirarchical object
  const mergedObject: FacetChildObject = recordToObject(mergedRecord);

  // Convert the heirarchical object back to the Facet child structure
  const mergedFacetChild = objectToFacet(mergedObject);

  return {
    [fieldName]: mergedFacetChild.children,
  };
}
