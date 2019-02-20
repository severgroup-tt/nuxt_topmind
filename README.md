# TopMind module for NUXT.js

> Add TopMind Analytics to your nuxt.js application.

**Note:** TopMind Analytics is not enabled in dev mode.
You can set environment variable `NODE_ENV` to `production` for testing in dev mode.

## Setup
- Add `https://github.com/severgroup-tt/nuxt_topmind` dependency using yarn or npm to your project
- Add `nuxt_topmind` to `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    ['nuxt_topmind', {
      id: XXXX,
      trackPathChange: true
    }]
 ]
}
```

Or using top level options


```js
{
  modules: [
    'nuxt_topmind'
  ],
  topmind: {
    id: XXXX,
    trackPathChange: true
  }
}
````

- Module automatically add `$tmt` variable onto both Vue instance and Nuxt app. You can use:
  - app.$tmt
  - this.$tmt in vue components
  - this.$tmt in store actions/mutations

## Options
For more information:
- [Documetation for TopMind Analytics](https://burning-heart.atlassian.net/wiki/spaces/TOP/pages/632029187)


### `id`
- TopMind ID. **Required!**

### `trackPathChange`
- If true, TopMind module automatically sends `pageview` event. 
