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

- The main entry file in every component folder is named after the folder, only exception is the JavaScript entry point:
  - Ex: src\index.tsx\ (main entry)
  - Ex: src\Solana\Solana.tsx (sub entry)
