<template>
  <div id="app" class="app">
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
