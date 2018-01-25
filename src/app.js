
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
      console.log('fire event onSelectImage: ', data)
      this.imageSelected = Object.assign({}, this.imageSelected, data)
    },
    onSelectMultipleImage: function (data) {
      console.log('fire event onSelectMultipleImage: ', data)
      this.imageMultipleSelected = data
    }
  }
}
