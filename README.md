# Getting Started

- Bootstrapped with [Create React App (TypeScript)](https://create-react-app.dev/docs/adding-typescript/).
- Uses [Yarn](https://yarnpkg.com/) as the package manager.
- Uses the latest [Node.js](https://nodejs.org/en/) LTS version.

## Available Scripts

### `yarn start`

- Runs the application in development mode.
  - Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
  - Page will automatically reload if you make edits.

### `yarn build`

- Builds the application for production to the `build` folder.
- Correctly bundles React in production mode and optimizes build for best performance.
- Build is minified and filenames include the hashes.
- Application is now ready to be deployed.

### `yarn predeploy`

- Pre-deploy for deploying application to GitHub Pages.

### `yarn deploy`

- Deploy the application to GitHub Pages.
- You can access the app [here](https://rubelium.github.io/floorToTheFour-website/).

### `yarn test`

- Launches the test runner in interactive watch mode.

### `yarn lint` or `yarn lint:fix`

- Runs ESLint to identify or fix problematic patterns found in JavaScript code.

## Rules / Architectural Decisions

### Folder Structure

- The main entry file in every folder in the `\feature` directory is named after the folder.
  - Example: `src\feature\featureName\FeatureName.tsx`
- All folder names are lowercase.

### JavaScript / TypeScript Testing

- All testable components should contain a `\tests` directory with unit tests and snapshots.
- Snapshots should be examined in the PR process for introduced errors.
  - Example: `src\feature\featureName\tests\FeatureName.test.tsx`
  - Example: `src\feature\featureName\tests\__snapshots__\FeatureName.test.tsx.snap`

## Visual Studio Code Settings

### `settings.json`

```json
{
  "git.enableSmartCommit": true,
  "git.confirmSync": false,
  "editor.formatOnSave": true,
  "editor.tabSize": 2,
  "files.eol": "\n",
  "launch": {
    "configurations": [
      {
        "type": "pwa-chrome",
        "request": "launch",
        "name": "Launch Chrome against localhost",
        "url": "http://localhost:3000",
        "webRoot": "${workspaceFolder}"
      }
    ],
  },
}
```

### Extensions

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Git History](https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory)
- [Jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest)
- [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)
