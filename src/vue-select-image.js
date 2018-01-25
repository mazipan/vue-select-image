
export default {
  name: 'vue-select-image',
  props: {
    dataImages: {
      type: Array,
      default: []
    },
    isMultiple: {
      type: Boolean,
      default: false
    },
    rootClass: {
      type: String,
      default: 'vue-select-image'
    },
    h: {
      type: String,
      default: 'auto'
    },
    w: {
      type: String,
      default: 'auto'
    }
  },
  data () {
    return {
      dataImagesLocal: [],
      singleSelected: {
        id: ''
      },
      multipleSelected: []
    }
  },
  created () {
    this.dataImagesLocal = this.dataImages
  },
  methods: {
    classThumbnail(selectedId, imageId) {
      const baseClass = `${this.rootClass}__thumbnail`
      if (selectedId === imageId) {
        return `${baseClass} ${baseClass}--selected`
      }
      return `${baseClass}`
    },
    classThumbnailMultiple(selected) {
      const baseClass = `${this.rootClass}__thumbnail`
      if (selected) {
        return `${baseClass} is--multiple ${baseClass}--selected`
      }
      return `${baseClass} is--multiple`
    },
    onSelectImage(objectImage) {
      this.singleSelected = Object.assign({}, this.singleSelected, objectImage)
      this.$emit('onselectimage', objectImage)
    },
    onSelectMultipleImage(objectImage) {
      this.dataImagesLocal = this.dataImagesLocal.map((item) => {
        if (objectImage.id === item.id) {
          item.selected = !item.selected
        }
        return item
      });
      this.multipleSelected = this.dataImagesLocal.filter((item) => {
        return !!item.selected
      })
      this.$emit('onselectmultipleimage', this.multipleSelected)
    }
  }
}
