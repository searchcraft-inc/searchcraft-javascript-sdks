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

Install the react sdk -> `yalc add @searchcraft-sdk/react`

Install dependencies -> `yarn install`

The SDKs share a core package that contains shared functionality written in Javascript. The core package is built every time you build the React SDK.

The Searchcraft quickstart react example project in under construction.

Yalc is used to test local changes [yalc](https://github.com/wclr/yalc)