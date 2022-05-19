# Getting Started with the Rubelium Toolkit

- This project was bootstrapped with [Create React App (TypeScript)](https://create-react-app.dev/docs/adding-typescript/).
- The purpose of this project is to build a suite of analysis and project deploy tools for the Solana blockchain.
- This is a work in progress (WIP) without a designated direction as of now in terms of a feature map.

## Available Scripts

### `yarn start`

- Runs the app in the development mode.
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
  - The page will reload if you make edits.
  - You will also see any lint errors in the console.

### `yarn test`

- Launches the test runner in the interactive watch mode.

### `yarn build`

- Builds the app for production to the `build` folder.
- It correctly bundles React in production mode and optimizes the build for the best performance.
- The build is minified and the filenames include the hashes, app is now ready to be deployed.

### `yarn lint`

- Runs ESLint to identify problematic patterns found in JavaScript code.

### `yarn lint:fix`

- Automatically fixes identified problematic patterns found in JavaScript code by ESLint.

## Rules / Architectural Decisions

### Folder Structure

- The main entry file in every folder in `\feature` directory is named after the folder.
  - Ex: `src\feature\solana\Solana.tsx`
- All folder names are lowercase.
- If components or code is shareable, move to common folder.

### JavaScript Testing

- All testable components should contain a test folder with unit tests and snapshots.
  - Ex: `src\feature\solana\_tests\Solana.test.tsx`
  - Ex: `src\feature\solana\_tests\__snapshots__\Solana.test.tsx.snap`

### Visual Studio Code

## `settings.json`

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

## Extensions

-[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
-[Git History](https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory)
-[Jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest)
-[markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)
