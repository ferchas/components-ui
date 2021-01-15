<p align="center">
  <a href="https://payments-wallet-int.fif.tech/fpay-ui/" rel="noopener" target="_blank"><img width="150" src="https://fpay.cl/wp-content/uploads/2020/04/fpay-logo-v1.svg" alt="Fpay-UI logo"></a></p>
</p>

<h1 align="center">Fpay-UI</h1>

<div align="center">

[React](https://reactjs.org/) components for faster and easier web development. Build your own design system.

[![npm package](https://img.shields.io/npm/v/@material-ui/core/latest.svg)](https://www.npmjs.com/package/@material-ui/core)

[![Coverage Status](https://img.shields.io/codecov/c/github/mui-org/material-ui/master.svg)](https://codecov.io/gh/mui-org/material-ui/branch/master)
[![Test using jest](https://jestjs.io/img/jest-badge.svg)](https://github.com/facebook/jest)
[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)]()

</div>

## Installation

Fpay-UI is available as an [npm package Fif](https://npm-registry.fif.tech/-/web/detail/fpay-ui).

### Set register

```sh
// with npm
npm set registry https://npm-registry.fif.tech/

// add user (use Ldap)
 npm adduser --registry https://npm-registry.fif.tech/
```

### install fpay-ui

```sh
// with npm
npm isntall --save fpay-ui 
```

Please note that `@next` will only point to pre-releases; to get the latest stable release use `@latest` instead.


## Usage

Here is a quick example to get you started, **it's all you need**:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@fpay-ui/Button';

function App() {
  return (
    <Button variant="contained" color="primary">
      Hello World
    </Button>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));
```

Yes, it's really all you need to get started as you can see in this live and interactive demo:

[![StoryBook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](https://payments-wallet-int.fif.tech/fpay-ui/)


## Documentation

Check out our [documentation website](https://gitlab.falabella.com/fif/payments/common/frontend/frontend-core/-/tree/master/storyBook/fpay-ui).
