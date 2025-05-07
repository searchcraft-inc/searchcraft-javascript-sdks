## 0.10.7 - 2025-05-07

This release includes:

- Bug fixes to `searchcraft-filter-panel`.
- Bug fixes to the ad container rendering and ad container events.

## 0.10.6 - 2025-05-06

This release includes more bug fixes for the filter panel.

## 0.10.5 - 2025-05-01

This release includes more bugfixes and style updates:

- Bugfixes for the facets checkboxes and facet rendering in the searchcraft-filter-panel.
- Bugfixes and improved support for `month`, `day`, and `hour` granularity levels for the date range selector in searchcraft-filter-panel.
- Style updates to the slider & checkbox UI of filter items rendered in searchcraft-filter-panel
- Other miscellaneous bugfixes.

## 0.10.4 - 2025-04-25

This release includes bugfixes and enhancements.

## 0.10.3 - 2025-04-24

This release includes bugfixes and enhancements.

## 0.10.2 - 2025-04-11

The main new feature in this release is the added support for being able to a specify an initial query with searchcraft-search-results components.

- searchcraft-search-results initial query support.
- Styles export now works with tailwind.
- Bugfixes and performance improvements.

## 0.10.1 - 2025-04-03

This release makes some updates and improvements to the `searchcraft-popover` component, along with some other updates and enhancements:

### New Features
- Style improvements and enhancements to the searchcraft-popover component.
- A new popover button variant, `skeuomorphic`, has been created.

### Other Updates
- Adds a new `style` export, to allow consuming applications to work with the component library styles directly if needed.
- CSS class name updates & miscellaneous style tweaks and fixes.
- Updates to measure events.

## 0.10.0 - 2025-03-27

This release includes:
- Adds NextJS/SSR support.
- Fixes javascript-sdk type exports.
- Updates and improves the documentation.
- Adds template strategy to searchcraft-base-search-results, SearchcraftCore.customAdTemplate, and searchcraft-results-info.
- Renames searchcraft-base-search-results to searchcraft-search-results.
- Misc. project configuration updates.

The searchcraft-base-search-results and template strategy are breaking changes for the searchcraft-base-search-results, SearchcraftCore.customAdTemplate, and results info. If being used, these components/props must be updated to use this version. See documentation for more guidance (SDKs -> Javascript -> Templates).

## 0.9.7 - 2025-03-21

This release includes:
- Bugfixes for ad rendering.
- Icon fill color rendering.
- Adding a configurable delay to ad_container_render events.
- Misc project configuration updates.

## 0.9.6 - 2025-03-19

This release includes bugfixes, a new subscription event called `ad_container_viewed`, and prep work towards upcoming features.

## Version 0.9.5 - 2025-03-13

Adds render methods to searchcraft-ad, base-search-results, and popover-list-view.

Adds new SubscriptionEvent, query_fetched.

Removes searchTerm required prop from input-form

Fixes hologram build step

Updates initial loading state for base-search-results


## Version 0.9.4 - 2025-03-10

Updates and improvements to master build script

Fixes type export issues with builds & config

Updates react peer dependency range

Changes admSub to optional value


## Version 0.9.3 - 2025-02-26

Fix incorrect document click position on searchcraft-base-search-results


## Version 0.9.2 - 2025-02-21

Update Hologram styling documentation


## Version 0.9.1 - 2025-02-19

Fixes JSX issues and other misc issues with compendium

Adds definitions for stencil components so they can be recognized by compendium.

Exports missing shared types from sdks.

Updates component type declarations to use ? rather than | undefined.

Update path alias for vue stories

Fixes defineCustomElements issue with vue/react

Fixes slider date range issue

Updates ending date range to end of year

Updates build script steps for 0.9.1


## Version 0.9.0 - 2025-02-13

Updates to core initialization behavior, package export settings, build scripts

Makes changes to how the sdk is initialized by the consuming application, so that the SearchcraftCore object is initialized independently from the components. It also makes changes to the stencil build settings so that the unnecessary build targets are gone, and so that the generated components module is the top-level export of the package.

Update core init behavior

Adds event emitter/subscriber functionality to core

Adds event emitter/subscriber to core. Adds types for events to core. Updates javascript sdk and core with event emitters.

Updates post-build behavior for defineCustomElements

Adds event emitter/subscriber functionality to core

Updates READMEs for event subscription changes

Updates build script & adds no_results_returned event

Updates ad components and types to for custom ad support

Adds support for custom ads


## Version 0.8.2 - 2025-02-07

Remove labels from pagination buttons


## Version 0.8.1 - 2025-02-07

Remove package-lock.json


## Version 0.8.0 - 2025-02-07

Refactors searchcraft store & removes old props

Renames query -> searchTerm for better precision of language

Fix error where searchcraft-theme would stop working in Storybook

Updates types and naming for state & core

Updates to core, javascript-sdk for ad marketplace support

Updates core directory structure for ad client support

Adds AdClient and MeasureClient to core

Adds AdClients and SearchClient

Sets up adm ad render support

Renders adm ads in popover

Adds ads to base-search-results components

Add parse config values util

add removeTrailingSlashFromEndpointURL to measure and search clients

Incorporate RFC feedback

Update how parsed endpointURL is being used

Move endpoint parsing into Core from Clients

Update value being passed into initClients

Adds docs & examples for react, vue components

Add pagination component

Moves sdk types to core for documentation purposes


## Version 0.7.2 - 2025-01-28

Updates component wrappers, documentation, and typedoc settings

Exports vue interfaces for docs, & updates component wrappers

Updates vue publicPath

Updates public path to use relative path

Adds JSDoc comments for vue components

Adds jsdoc comment for react components 

Updates typedoc publicPaths for core & react

Adds jsdoc comment for searchcraft-theme

Update SearchcraftConfig jsdoc comment


## Version 0.7.1 - 2025-01-28

Add docs and auto gen script to react SDK

Update vue readme

Updates compendium config, directory structure & npm scripts

Updates storybook config import and env.example

Update build scripts to include documentation generation

Updates selector in README example

Removes console.log and updates build script

Adds build.mjs - sdk build script

Updates project README for build script, project updates

Updates nodemon watch files & watch logic

Adds document_clicked event to popover items

Fixes typedoc link paths & adds per-package typedoc configuration

Adds workspace for searchcraft theme

Adds searchcraft-theme component to javascript-sdk

Updates react, vue, and storybook for new storybook-theme component

Additionally, removes internal, non consumer-facing components from react and vue sdks.

Updates README for searchcraft-theme component

Updates build script with core & hologram alias

Update vue components to be .tsx

Updates tsconfigs to inherit from root

Fixes typescript errors after tsconfig update

Remove debug export from index

Fixes event types after tsconfig update


## Version 0.7.0 - 2025-01-23

Setup initial vue sdk, ingest stencil components, and add vue story

Add vue components from stencil and stories

Update compendium Readme with script to use vue stories

Pull in new js sdk popover components

Update javascript-sdk README for 0.6.x

Add alternate config for popover story

Add react popover components and stories

Add vue popover components and stories

Update build scripts

Update build:all script to include vue

Update generated file override in vue sdk


## Version 0.6.0 - 2025-01-23

Pipeline for Publishing to npm

Add npmrc file

update lerna publish flow and registry

Add overviews and descriptions to all vanilla JS components

small text update to list the actual test index that gets included with the backend API as well as a link to the docs for self-hosted users

Specify Branch Restrictions for Lerna Versioning

Add Sample Env File

Adds components, functionality, and layout for searchcraft-popover-form

Creates sub-modules for the utils module

Adds components, functionality, and layout for searchcraft-popover-form

Adds modal, fullscreen popover layouts & styles

Updates to popover form styles and layout

Updates styles and behavior for popover modal

Adds functionality for modal and fullscreen popover variants

Adds cancel button & layout to popover

Uses fullscreen instead of modal for small breakpoints

Fixes body scroll issue on popover

Upgrades storybook to 8.5.1 and adds background customization

Set Registry in Pipeline

Remove Sample Env

Use /batch endpoint for measure requests

Moves search debounce to core sdk

Re-add querySubmit event to input form


## Version 0.5.3 - 2025-01-15

Updates react output configuration


## Version 0.5.2 - 2025-01-15

Fixes issue with input render performance


## Version 0.5.1 - 2025-01-15

Fixes type export issue in javascript-sdk entry file


## Version 0.5.0 - 2025-01-15

Updates filter panel toggle button behavior

Refactors searchcraft-input to prep for popover component

Update React SDK to use stencil components

Update react build script to include building the js sdk

Creates searchcraft-input-form to replace auto-search-form and base-search-form.

Combines the functionality of base-search-form, auto-search-form, and searchcraft-input, into a new single component, searchcraft-input-form. searchcraft-input-form is capable of rendering all the different input layouts and functionality previously that was previously split across those three components.

Updates storybook stories for input-form and remove unused components

Exports types from stencil, adds dynamic types & exports to react sdk

Adds querySubmit emitter to input-form component

Adds querySubmit, which had been on the old auto-search-form, to our combined input-form component.


## Version 0.4.2 - 2025-01-13

Fixes typo with delimiter property name


## Version 0.4.1 - 2025-01-13

Updates slider min/max handle behavior

Updates filter toggle button behavior

Fixes issue of certain components not initializing in Safari

Fixes issue with facet list updating incorrectly when search query change

Fixes remaining facet list state update issue

Cleans up vite.config timestamp files
