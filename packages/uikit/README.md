# Reacon UIkit

[![Version](https://img.shields.io/npm/v/@reacontrade/uikit)](https://www.npmjs.com/package/@reacontrade/uikit) [![Size](https://img.shields.io/bundlephobia/min/@reacontrade/uikit)](https://www.npmjs.com/package/@reacontrade/uikit)

Reacon UIkit is a set of React components and hooks used to build pages on Reacon's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @reacontrade/uikit`

## Setup

### Theme

Before using Reacon UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@reacontrade/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@reacontrade/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

## How to use the UIkit

If you want to use components from the UIkit, check the [Storybook documentation](https://reacon-cash.github.io/uikit-documentation/)
