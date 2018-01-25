<template>
  <div :class="rootClass">
    <ul :class="rootClass + '__wrapper'">

      <li v-for="(dataImage, index) in dataImagesLocal" :key="index"
        :class="rootClass + '__item'">

        <div
          :class="classThumbnail(singleSelected.id, dataImage.id)"
          @click="onSelectImage(dataImage)"
          v-if="!isMultiple">
          <img :src="dataImage.src"
               :alt="dataImage.alt"
               :height="h"
               :width="w"
               :class="rootClass + '__img'">
        </div>

        <div
          :class="classThumbnailMultiple(dataImage.selected)"
          @click="onSelectMultipleImage(dataImage)"
          v-if="isMultiple">

          <img :src="dataImage.src"
               :alt="dataImage.alt"
               :height="h"
               :width="w"
               :class="rootClass + '__img'">
        </div>

      </li>
    </ul>
  </div>
</template>

<script>
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
      const baseMultipleClass = `${baseClass} is--multiple`
      if (selected) {
        return `${baseMultipleClass} ${baseClass}--selected`
      }
      return `${baseMultipleClass}`
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
</script>

<style src="./vue-select-image.css"></style>
