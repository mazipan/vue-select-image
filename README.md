# :white_check_mark: Vue Select Image

> Vue 2.x component for selecting image from list

[![License](https://img.shields.io/github/license/mazipan/vue-select-image.svg?maxAge=3600)](https://github.com/mazipan/vue-select-image) [![version](https://img.shields.io/npm/v/vue-select-image.svg)](https://www.npmjs.com/package/vue-select-image)
[![downloads](https://img.shields.io/npm/dt/vue-select-image.svg)](https://www.npmjs.com/package/vue-select-image) [![Travis](https://img.shields.io/travis/mazipan/vue-select-image.svg)](https://travis-ci.org/mazipan/vue-select-image)
[![codecov](https://codecov.io/gh/mazipan/vue-select-image/branch/master/graph/badge.svg)](https://codecov.io/gh/mazipan/vue-select-image)

## Demo

[https://mazipan.github.io/vue-select-image/](https://mazipan.github.io/vue-select-image/)

## Installation

```bash
# Yarn
yarn add vue-select-image

# NPM
npm i vue-select-image --save
```

## How to use

### Import

```javascript
import VueSelectImage from 'vue-select-image'
// add stylesheet
require('vue-select-image/dist/vue-select-image.css')
```

### Register components

```javascript
components: { VueSelectImage }
```


### Register as global component

```javascript
Vue.use(VueSelectImage)
```

### Sample Array Image

```javascript
[{
  id: '1',
  src: 'https://unsplash.it/200?random',
  alt: 'Alt Image 1'
}, {
  id: '2',
  src: 'https://unsplash.it/200?random',
  alt: 'Alt Image 2'
}]
```

### Template

#### Single Selection

```html
<vue-select-image :dataImages="dataImages"
                  @onselectimage="onSelectImage">
</vue-select-image>
```

`on-select-image` will return emitted with parameter object image selected

#### Multiple Selection

```html
<vue-select-image :dataImages="dataImages"
                  :is-multiple="true"
                  @onselectmultipleimage="onSelectMultipleImage">
</vue-select-image>
```

`onselectmultipleimage` will return emitted with parameter list of object images selected

### Available Props

- **dataImages**: type (Array), default ([])
- **isMultiple**: type (Boolean), default (false)
- **rootClass**: type (String), default ('vue-select-image')
- **h**: type (String), default ('auto')
- **w**: type (String), default ('auto')

### Example

Example can be found here :

- [App.vue](https://github.com/mazipan/vue-select-image/blob/master/src/App.vue)
- [app.js](https://github.com/mazipan/vue-select-image/blob/master/src/app.js)

### Credit

Thanks for inspiration : [https://github.com/rvera/image-picker](https://github.com/rvera/image-picker)

### Contributing

If you'd like to contribute, head to the [contributing guidelines](/CONTRIBUTING.md). Inside you'll find directions for opening issues, coding standards, and notes on development.

**Hope will usefull for you all.**

Contact Me :

[![Email](https://img.shields.io/badge/mazipanneh-Email-yellow.svg?maxAge=3600)](mailto:mazipanneh@gmail.com) [![Facebook](https://img.shields.io/badge/mazipanneh-Facebook-blue.svg?maxAge=3600)](https://facebook.com/mazipanneh) [![Twitter](https://img.shields.io/badge/Maz_Ipan-Twitter-55acee.svg?maxAge=3600)](https://twitter.com/Maz_Ipan)

Copyright © 2017
