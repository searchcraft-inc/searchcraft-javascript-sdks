# Searchcraft SDKs

This monorepo manages the Searchcraft SDKs.

Each SDK in this repo offers the following APIs:
- Send a preconfigured search request using the Searchcraft engine
- Manage the requesting state using reactive properties
- Prebuilt UIs
    * BaseSearchForm
    * AutoSearchForm
    * BaseSearchResult
    * BaseSearchResults

## Local Development

`yalc` is highly recommended for local development. You can install it with:
```
npm install -g yalc
```

There are a number scripts set up in `package.json` to help streamline local development:
| Command | Description |
|-|-|
|`yarn run:build-all`| Builds all packages in the workspace for production |
|`yarn run build-<package-name>`| Builds a specific  package for production|
|`yarn run yalc-all`|Builds & Publishes all packages in the workspace to yalc for local development|
|`yarn run yalc-<package-name>`|Builds & Publishes a specific package in the workspace to yalc for local development|
|`yarn run watch-all`|Watch all src files for changes using nodemon. When a change is detect, builds, and publishes to yalc|
|`yarn run watch-<package-name>`|Watch a specific package for changes using nodemon. When a change is detect, builds, and publishes to yalc|


### More about `yalc`
When a package is published to yalc, it just means that the package has been added to a local store in the `.yalc` folders on your machine.

If you are working on developing a consuming application, install the package you need using `yalc install <package-name>`. Your consuming application will automatically receive updates when yalc changes are published and pushed out, via one of the scripts described in the table above.

[yalc docs](https://github.com/wclr/yalc)


### Core Package
The SDKs share a core package that contains shared functionality written in Javascript. The core package is built every time you build the React SDK, the Javascript SDK, or any of the other SDK's that consume the core.

The Searchcraft quickstart react example project in under construction.
