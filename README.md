# vue-select-image
[![License](https://img.shields.io/github/license/mazipan/vue-select-image.svg?maxAge=3600)](https://github.com/mazipan/vue-select-image) 
[![Github Issue](https://img.shields.io/github/issues/mazipan/vue-select-image.svg?maxAge=3600)](https://github.com/mazipan/vue-select-image/issues) 
[![GitHub Fork](https://img.shields.io/github/forks/mazipan/vue-select-image.svg?maxAge=3600)](https://github.com/mazipan/vue-select-image/network/member) 
[![GitHub Star](https://img.shields.io/github/stars/mazipan/vue-select-image.svg?maxAge=3600)](https://github.com/mazipan/vue-select-image/stargazers) 


Vue 2 Component for selecting image from list

### Demo
[https://mazipan.github.io/vue-select-image/](https://mazipan.github.io/vue-select-image/)

### Installation
> Yarn
`yarn add vue-select-image`

> NPM
`npm i vue-select-image --save-dev`

### How to use

#### Import
```javascript
import VueSelectImage from 'VueSelectImage'
```

#### Add components
```javascript
components: { VueSelectImage }
```

#### Array Image
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

#### Template
```html
<vue-select-image :dataImages="dataImages" @onSelectImage="onSelectImage"></vue-select-image>
```

### Credit
Thanks for inspiration : [https://github.com/rvera/image-picker](https://github.com/rvera/image-picker)

**Hope will usefull for you all.**

Contact Me :

[![Email](https://img.shields.io/badge/mazipanneh-Email-yellow.svg?maxAge=3600)](mailto:mazipanneh@gmail.com) 
[![Website](https://img.shields.io/badge/mazipanneh-Blog-brightgreen.svg?maxAge=3600)](https://mazipanneh.com/blog/)
[![Facebook](https://img.shields.io/badge/mazipanneh-Facebook-blue.svg?maxAge=3600)](https://facebook.com/mazipanneh) 

[![Twitter](https://img.shields.io/badge/Maz_Ipan-Twitter-55acee.svg?maxAge=3600)](https://twitter.com/Maz_Ipan) 
[![Linkedin](https://img.shields.io/badge/irfanmaulanamazipan-Linkedin-0077b5.svg?maxAge=3600)](https://id.linkedin.com/in/irfanmaulanamazipan) 
[![Slideshare](https://img.shields.io/badge/IrfanMaulana21-Slideshare-0077b5.svg?maxAge=3600)](https://www.slideshare.net/IrfanMaulana21) 
