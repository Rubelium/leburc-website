# Getting Started

- This project was bootstrapped with [Create React App (TypeScript)](https://create-react-app.dev/docs/adding-typescript/).
- This project uses [Yarn](https://yarnpkg.com/) as a package manager.
- Update your version of [Node.js](https://nodejs.org/en/) to the latest LTS version.

## Available Scripts

### `yarn start`

- Runs the app in the development mode.
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
  - The page will reload if you make edits.

### `yarn build`

- Builds the app for production to the `build` folder.
- It correctly bundles React in production mode and optimizes the build for the best performance.
- The build is minified and the filenames include the hashes.
- Application is now ready to be deployed.

### `yarn predeploy`

- Pre-deploy for deploying app to GitHub Pages.

### `yarn deploy`

- Deploy the app to GitHub Pages.

### `yarn test`

- Launches the test runner in the interactive watch mode.

### `yarn lint` or `yarn lint:fix`

- Runs ESLint to identify or fix problematic patterns found in JavaScript code.

## Rules / Architectural Decisions

### Folder Structure

- The main entry file in every folder in the `\feature` directory is named after the folder.
  - Example: `src\feature\featureName\FeatureName.tsx`
- All folder names are lowercase.
- If components or code is shareable then move it to the `\common` folder.
  - Example: `src\common\CommonExample.tsx`

### JavaScript Testing

- All testable components should contain a `\tests` directory with unit tests and snapshots.
- Snapshots should always be examined in the PR process for introduced errors or new functionality.
  - Example: `src\feature\featureName\tests\FeatureName.test.tsx`
  - Example: `src\feature\featureName\tests\__snapshots__\FeatureName.test.tsx.snap`

## Visual Studio Code

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
