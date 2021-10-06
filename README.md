# Reacon Toolkit

This repository is a monorepo manage with [yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/) and [Lerna](https://lerna.js.org/). 

## Packages

- [uikit](https://github.com/reacon-cash/toolkit/tree/master/packages/uikit) : React components used to build the Reacon Trade UI
- [eslint-config-pancake](https://github.com/reacon-cash/toolkit/tree/master/packages/eslint-config) : An ESLint config for reacon trade, with Typescript and Prettier support
- [pancake-profile-sdk](https://github.com/reacon-cash/toolkit/tree/master/packages/profile-sdk) : Handy functions to retrieve data for Reacon Trade Profile system
- [token-lists](https://github.com/reacon-cash/toolkit/tree/master/packages/token-lists) : Main Reacon Trade token list and tools to validate it

## How to use

Clone the repository 

```
git clone git@github.com:reacon-cash/toolkit.git
```

Run yarn at the root of the workspace

```
cd toolkit
yarn
```

Then, refer to the readme of each project.
