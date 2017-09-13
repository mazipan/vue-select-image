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
        src: 'https://unsplash.it/200?random',
        alt: 'Alt Image 1'
      }, {
        id: '2',
        src: 'https://unsplash.it/200?random',
        alt: 'Alt Image 2'
      }, {
        id: '3',
        src: 'https://unsplash.it/200?random',
        alt: 'Alt Image 3'
      }, {
        id: '4',
        src: 'https://unsplash.it/200?random',
        alt: 'Alt Image 4'
      }]
    }
  },
  methods: {
    onSelectImage: function (data) {
      this.imageSelected = Object.assign({}, this.imageSelected, data)
    },
    onSelectMultipleImage: function (data) {
      console.log(data)
      this.imageMultipleSelected = data
    }
  }
}
