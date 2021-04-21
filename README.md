# eslint-config-loveholidays
eslint config for typescript/react projects

## Installation

### Install peer depenendcies

List peer dependendcies

`npm info "@loveholidays/eslint-config-loveholidays@latest" peerDependencies`

Install ESLint plugins
ESLint plugins used by this config must also be installed within your project.

```
npm install eslint-plugin-import \
            eslint-plugin-jsx-a11y \
            eslint-plugin-react \
            eslint-plugin-react-hooks \
            @typescript-eslint/eslint-plugin \
            --save-dev
```

If you don't need React support:

```
npm install eslint-plugin-import \
            @typescript-eslint/eslint-plugin \
            --save-dev
```

## Setup

Extend either `@loveholidays/eslint-config-loveholidays/react` or `@loveholidays/eslint-config-loveholidays` and add `parserOptions.project` 

```js
// .eslintrc
{
  extends: ['airbnb-typescript'],
    parserOptions: {
    project: './tsconfig.json',
  }  
}
```