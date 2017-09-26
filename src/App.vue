<template>
  <div id="app" class="VueSelectImage">
    <header role="header" class="site__header header"><div class="header__wrapper"><div class="header__brand"> <a href="https://mazipan.github.io/demo/"> <img src="https://mazipan.github.io/images/irfan-maulana.jpg" alt="Irfan Maulana" title="Irfan Maulana"> </a><div class="header__title"> Irfan Maulana | Demo</div></div></div> </header>

    <div class="app">
      <h1>{{ msg }}</h1>

      <div>      
        <h2>Single Selection</h2>      
        <vue-select-image :dataImages="dataImages" 
                          @onSelectImage="onSelectImage">
        </vue-select-image>
        <div>
          <h5>Image Selected : 
            <span v-if="imageSelected.id !== ''">
              <span>id = {{ imageSelected.id }}</span>
            </span> 
          </h5>            
        </div>
      </div>

      <div>
        <h2>Multiple Selection</h2>
        <vue-select-image :dataImages="dataImages" 
                          :is-multiple="true" 
                          @onSelectMultipleImage="onSelectMultipleImage">
        </vue-select-image>
        <div>
          <h5>Mutiple Image Selected : 
            <span v-for="(imgSelected, index) in imageMultipleSelected" :key="index">
              <span>id = {{ imgSelected.id }}, </span>
            </span>
          </h5> 
        </div>
      </div>
    </div>

    <div class="grid__row content centered"><h2>Contribute</h2><p> Feel free to fork <i class="fa fa-code-fork"></i> on <a href="https://github.com/mazipan/vue-select-image" target="_blank">GitHub <i class="fa fa-github"></i></a> if you have any features <i class="fa fa-cart-plus"></i> or bugs <i class="fa fa-bug"></i>!</p></div><div class="grid__row content centered"><h2>Contact Developer</h2><p><a href="https://github.com/mazipan"> <img src="https://img.shields.io/badge/mazipan-Github-lightgrey.svg?maxAge=3600" alt="Github"> </a><a href="mailto:mazipanneh@gmail.com"> <img src="https://img.shields.io/badge/mazipanneh-Email-yellow.svg?maxAge=3600" alt="Email"> </a><a href="https://mazipanneh.com/blog/"> <img src="https://img.shields.io/badge/mazipanneh-Blog-brightgreen.svg?maxAge=3600" alt="Blog"> </a><a href="https://facebook.com/mazipanneh"> <img src="https://img.shields.io/badge/mazipanneh-Facebook-blue.svg?maxAge=3600" alt="Facebook"> </a><br/><a href="https://twitter.com/Maz_Ipan"> <img src="https://img.shields.io/badge/Maz_Ipan-Twitter-55acee.svg?maxAge=3600" alt="Twitter"> </a><a href="https://id.linkedin.com/in/irfanmaulanamazipan"> <img src="https://img.shields.io/badge/irfanmaulanamazipan-Linkedin-0077b5.svg?maxAge=3600" alt="Linkedin"> </a><a href="https://www.slideshare.net/IrfanMaulana21"> <img src="https://img.shields.io/badge/IrfanMaulana21-Slideshare-0077b5.svg?maxAge=3600" alt="Slideshare"> </a></p></div><div class="grid__row content centered"><p> Copyright © 2017 <a href="https://mazipanneh.com/blog/">Irfan Maulana</a>, All Rights Reserved.</p></div>
  </div>
</template>

<script>
import VueSelectImage from './VueSelectImage.vue'

export default {
  name: 'app',
  components: { VueSelectImage },
  data () {
    return {
      msg: 'Vue Select Image By Irfan Maulana',
      imageSelected: {
        id: '',
        src: '',
        alt: ''
      },
      imageMultipleSelected: [],
      dataImages: [{
        id: '1',
        src: 'https://raw.githubusercontent.com/mazipan/vue-select-image/master/src/assets/logo-1.png',
        alt: 'jQuery'
      }, {
        id: '2',
        src: 'https://raw.githubusercontent.com/mazipan/vue-select-image/master/src/assets/logo-2.png',
        alt: 'Angular'
      }, {
        id: '3',
        src: 'https://raw.githubusercontent.com/mazipan/vue-select-image/master/src/assets/logo-3.png',
        alt: 'Vue.js'
      }, {
        id: '4',
        src: 'https://raw.githubusercontent.com/mazipan/vue-select-image/master/src/assets/logo-4.png',
        alt: 'React'
      }]
    }
  },
  methods: {
    onSelectImage: function (data) {
      this.imageSelected = Object.assign({}, this.imageSelected, data)
    },
    onSelectMultipleImage: function (data) {
      this.imageMultipleSelected = data
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
