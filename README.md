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

`onselectimage` will return emitted with parameter object image selected

#### Multiple Selection

```html
<vue-select-image :dataImages="dataImages"
                  :is-multiple="true"
                  :selectedImages="initialSelected"
                  @onselectmultipleimage="onSelectMultipleImage">
</vue-select-image>
```

`onselectmultipleimage` will return emitted with parameter list of object images selected

### Available Props

| Attribute       | Type             | Default          | Description                          	|
|-----------------|------------------|------------------|--------------------------------------	|
| :dataImages     | Array            | []               | Array of images that will be shown    |
| :selectedImages | Array            | []               | Array of initial selected images      |
| :isMultiple     | Boolean          | false            | Flag to enable multiple selection     |
| :rootClass      | String           | vue-select-image | Class for root element of this component |
| :h              | String           | auto             | Height of images, ex: '50px'     |
| :w              | String           | auto             | Width of images, ex: '50px'      |

### Available Events

| Events Attr            | Return                                            |
|------------------------|---------------------------------------------------|
| @onselectimage         | Object image selected                             |
| @onselectmultipleimage | Array of object image has been selected           |

### Example

Example can be found here :

- [App.vue](https://github.com/mazipan/vue-select-image/blob/master/src/App.vue)
- [app.js](https://github.com/mazipan/vue-select-image/blob/master/src/app.js)

### Credit

Thanks for inspiration : [https://github.com/rvera/image-picker](https://github.com/rvera/image-picker)

### Contributing

If you'd like to contribute, head to the [contributing guidelines](/CONTRIBUTING.md). Inside you'll find directions for opening issues, coding standards, and notes on development.

**Hope will usefull for you all.**

Copyright © 2017 Built with ❤️ by Irfan Maulana
