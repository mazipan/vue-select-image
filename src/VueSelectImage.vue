<template>
  <div class="VueSelectImage">
    <ul class="VueSelectImage__wrapper">

      <li v-for="(dataImage, index) in dataImagesLocal" :key="index" 
        class="VueSelectImage__item">
        
        <div class="VueSelectImage__thumbnail" 
            :class="{'VueSelectImage__thumbnail--selected': (singleSelected.id === dataImage.id)}"
            @click="onSelectImage(dataImage)"
            v-if="!isMultiple">
          <img :src="dataImage.src" 
               :alt="dataImage.alt" 
               class="VueSelectImage__img">
        </div>

        <div class="VueSelectImage__thumbnail is--multiple" 
            :class="{'VueSelectImage__thumbnail--selected': (dataImage.selected)}"
            @click="onSelectMultipleImage(dataImage)"
            v-if="isMultiple">
          <img :src="dataImage.src" 
               :alt="dataImage.alt" 
               class="VueSelectImage__img">
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
    onSelectImage: function (objectImage) {
      this.singleSelected = Object.assign({}, this.singleSelected, objectImage)
      this.$emit('onSelectImage', objectImage)
    },
    onSelectMultipleImage: function (objectImage) {
      this.dataImagesLocal = this.dataImagesLocal.map((item) => {
        if (objectImage.id === item.id) {
          item.selected = !item.selected
        }
        return item
      });
      this.multipleSelected = this.dataImagesLocal.filter((item) => {
        return !!item.selected
      })
      this.$emit('onSelectMultipleImage', this.multipleSelected)
    }
  }
}
</script>

<style src='./vue-select-image.css'></style>
