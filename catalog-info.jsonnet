local backstage = import 'backstage.libsonnet';
local Define = backstage.Define;
local Component = backstage.Component;
local Link = backstage.Link;
local Api = backstage.Api;

Define([
  Component(
    name='eslint-config-loveholidays',
    description='eslint config for typescript/react projects',
    type='library',
    lifecycle='production',
    repository='loveholidays/eslint-config-loveholidays',
    techdocs='url:https://github.com/loveholidays/eslint-config-loveholidays/tree/main',
    owner='digital-product-infrastructure',
    tags=['nodejs', 'typescript', 'eslint', 'open-source'],
    links=[
      Link('NPM package', 'https://www.npmjs.com/package/@loveholidays/eslint-config-loveholidays'),
    ],
  )
])
