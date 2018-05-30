import VueSelectImage from './VueSelectImage.vue'

const plugin = {
  install: Vue => {
    Vue.component(VueSelectImage.name, VueSelectImage)
  }
}

VueSelectImage.install = plugin.install

export default VueSelectImage