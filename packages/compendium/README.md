# Compendium

Compendium is the yarn workspace which contains the Storybook for all of the javascript SDK's.

## Env
Compendium uses several `.env` values to help with rendering stories. For reference, see the example env, `.env.example`.

## Running
To view the storybook for the Javascript and React SDK's, run the following From project root: `yarn && yarn storybook`
To view the storybook for the Vue SDK, run the following From project root: `yarn && yarn storybook --config-dir .storybook/vue`

## Story Files
Story files are located in the `./stories` directory. There is a directory for each SDK.