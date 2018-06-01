
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
      title: '✅ Vue Select Image',
      subtitle: 'Vue 2.x component for selecting image from list',
      imageSelected: {
        id: '',
        src: '',
        alt: ''
      },
      imageMultipleSelected: [],
      dataImages: [{
        id: '1',
        src: 'http://placekitten.com/200/200',
        alt: 'jQuery'
      }, {
        id: '2',
        src: 'http://placekitten.com/200/200',
        alt: 'Angular'
      }, {
        id: '3',
        src: 'http://placekitten.com/200/200',
        alt: 'Vue.js'
      }, {
        id: '4',
        src: 'http://placekitten.com/200/200',
        alt: 'React'
      }],
      initialSelected: [
        {
          id: '2',
          src: 'http://placekitten.com/200/200',
          alt: 'Angular'
        },
        {
          id: '3',
          src: 'http://placekitten.com/200/200',
          alt: 'Vue.js'
        }
      ],
      templateSingle: `
<!-- SINGLE SELECTION -->
<vue-select-image :dataImages="dataImages"
      @onselectimage="onSelectImage">
</vue-select-image>
      `,
      templateMultiple: `
<!-- MULTIPLE SELECTION -->
<vue-select-image :dataImages="dataImages"
      :is-multiple="true"
      :selectedImages="initialSelected"
      @onselectmultipleimage="onSelectMultipleImage">
</vue-select-image>
      `
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
