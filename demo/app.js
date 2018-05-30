
import VueSelectImage from 'src/VueSelectImage.vue'
import SocialGithubIcon  from 'icons/social-github.vue'
import IosEmailIcon  from 'icons/ios-email.vue'
import SocialFacebookIcon  from 'icons/social-facebook.vue'
import SocialTwitterIcon  from 'icons/social-twitter.vue'
import SocialLinkedinIcon  from 'icons/social-linkedin.vue'

export default {
  name: 'app',
  components: {
    VueSelectImage,
    SocialGithubIcon,
    IosEmailIcon,
    SocialFacebookIcon,
    SocialTwitterIcon,
    SocialLinkedinIcon
  },
  data () {
    return {
      title: 'Vue Select Image',
      subtitle: 'Vue 2.x component for selecting image from list',
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
      }],
      initialSelected: [
        {
          id: '2',
          src: 'https://raw.githubusercontent.com/mazipan/vue-select-image/master/src/assets/logo-2.png',
          alt: 'Angular'
        },
        {
          id: '3',
          src: 'https://raw.githubusercontent.com/mazipan/vue-select-image/master/src/assets/logo-3.png',
          alt: 'Vue.js'
        }
      ]
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
