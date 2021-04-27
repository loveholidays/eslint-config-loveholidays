# eslint-config-loveholidays
This repository is where all common eslint related config, rules, packages and binary are aggregated into one package that can be installed.

## Installation
`npm i -D @loveholidays/eslint-config-loveholidays`

Eslint and the plugins will be installed via this package so you do not need to install them separately.


## Setup

Extend either `@loveholidays/eslint-config-loveholidays/react` or `@loveholidays/eslint-config-loveholidays` and add `parserOptions.project` to your eslintrc.

```js
// .eslintrc
{
  extends: ['airbnb-typescript'],
    parserOptions: {
    project: './tsconfig.json',
  }  
}
```

## Publishing

When a pull request is merged a new major version will be published automatically.

You can also manually trigger the publish workflow in github actions.
