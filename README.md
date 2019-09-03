# Platform UI customisations

This repository presents examples of customisations that can be done to the [platform app UI](https://github.com/opentargets/platform-app)

## Customisation

To customise the platform app:

- Clone the [platform-app](https://github.com/opentargets/platform-app) repository.
- Create a directory somewhere outside the `platform-app` repository where the customisation files will be put.
- Add an environment variable called `$CUSTOMISATIONS_DIR` that points to the customisation directory created in the step above.
- Inside your customisation directory you can overwrite or add new files following the same directory structure as
  [`src/public`](https://github.com/opentargets/platform-app/tree/master/src/public).
- When developing new customisations, you can use the `yarn start:customise` script inside the `platform-app` repository to see your
  customisations reflected in the app while developing. When done developing customisations, run the `yarn reset` command.
- For production, you can produce a build containing the customisations by running the `yarn build:customise` script inside the `platform-app`
  repository. This will create a `build` directory containing static assets files (html, css, js) that you can deploy.

### Customising the theme

To customise the theme, overwrite the [`theme.js`](https://github.com/opentargets/platform-app/blob/master/src/public/theme.js) file by having a [`theme.js`](https://github.com/opentargets/platform-app-customisations/blob/master/theme.js) file in your customisation directory.


### Customising the footer

To customise the footer, overwrite [`BasePage.js`](https://github.com/opentargets/platform-app-customisations/blob/master/common/BasePage.js) with a [`BasePage`](https://github.com/opentargets/platform-app-customisations/blob/master/common/BasePage.js) component in the customisation
directory so that it uses a custom [Footer](https://github.com/opentargets/platform-app-customisations/blob/master/common/CustomFooter.js) component.

### Changing order of sections
One can change the order of sections in the target, disease, drug, and evidence page. To do so, overwrite the [`configuration.js`](https://github.com/opentargets/platform-app-customisations/blob/master/configuration.js) and change the order of the strings in the arrays.

### Deleting sections
To delete sections, remove their corresponding string from the [`configuration.js`](https://github.com/opentargets/platform-app-customisations/blob/master/configuration.js) file

### Adding a section
To add a section, create a [directory](https://github.com/opentargets/platform-app-customisations/tree/master/target/sections/ABC) that will contain the files related to it. This directory should have an [`index.js`](https://github.com/opentargets/platform-app-customisations/blob/master/target/sections/ABC/index.js) file.

The `index.js` file should have a structure as follows:

```js
// helps to load graphql files
import { loader } from 'graphql.macro';

// the name of your new section
export const id = '<section-id>';
// the nice name you want for your new section
export const name = '<section-name>';

// a function of the response of summaryQuery, to determine whether there is data for this target (and therefore whether to load the detail or not)
export const hasSummaryData = <function>;

// (optional) queries against platform-api, the new graphql api
export const summaryQuery = loader('./summaryQuery.gql');
export const sectionQuery = loader('./sectionQuery.gql');

// react components to render the data:
// typically a string, above the main content section, but could have links
export { default as DescriptionComponent } from './Description';
// typically a string, in the summary widget, but could be more complex
export { default as SummaryComponent } from './Summary';
// the main content section
export { default as SectionComponent } from './Section';

```

Make sure to include the `id` string in the corresponding array in [configuration.js](https://github.com/opentargets/platform-app-customisations/blob/master/configuration.js) and import and export the `index.js` in the corresponding `sectionIndex.js` file as it's done [here](https://github.com/opentargets/platform-app-customisations/blob/master/target/sectionIndex.js)
