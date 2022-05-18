# Getting Started with the Rubelium Toolkit

- This project was bootstrapped with [Create React App (TypeScript)](https://create-react-app.dev/docs/adding-typescript/).
- TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. Catch those errors early.
- The purpose of this project is to build a suite of analysis and project deploy tools for the Solana blockchain and hit them with extensive tests.
- The overarching purpose is to build a robust program that cannot break in all scenarios.
- This is a work in progress (WIP) without a designated direction as of now in terms of a feature map.
- This README will ALWAYS be updated with up-to-date information.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes, app is now ready to be deployed.\
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Rules / Architectural Decisions

### Folder Structure

The main entry file in every folder is named after the folder with the exception of the main entry point "index.tsx".\
Ex: src\index.tsx\ (main entry)\
Ex: src\Solana\Solana.tsx (sub entry)