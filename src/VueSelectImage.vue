<template>
  <div class="VueSelectImage">
    <ul class="VueSelectImage__wrapper">
      <li v-for="dataImage in dataImages" :key="dataImage.id" 
        class="VueSelectImage__item">
        <div class="VueSelectImage__thumbnail" 
            :class="{'VueSelectImage__thumbnail--selected': (singleSelected.id === dataImage.id)}"
            @click="onSelectImage(dataImage)">
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
    }
  },
  data () {
    return {
      singleSelected: {
        id: ''
      },
      multipleSelected: []
    }
  },
  methods: {
    onSelectImage: function (objectImage) {
      this.singleSelected = Object.assign({}, this.singleSelected, objectImage)
      this.$emit('onSelectImage', objectImage)
    }
  }
}
</script>

<style>
.VueSelectImage__wrapper {
    overflow: auto;
    list-style-image: none;
    list-style-position: outside;
    list-style-type: none;
    padding: 0px;
    margin: 0px;
}
.VueSelectImage__item {
    margin: 0px 12px 12px 0px;
    float: left;
}
.VueSelectImage__thumbnail{
  padding: 6px;
  border: 1px solid #dddddd;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;

  display: block;
  padding: 4px;
  line-height: 20px;
  border: 1px solid #ddd;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.055);
  -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.055);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.055);
  -webkit-transition: all 0.2s ease-in-out;
  -moz-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}
.VueSelectImage__thumbnail--selected{
    background: #0088cc;
}
.VueSelectImage__img{
  -webkit-user-drag: none;
  display: block;
  max-width: 100%;
  margin-right: auto;
  margin-left: auto;
}
@media only screen and (min-width: 1200px) {
  .VueSelectImage__item {
    margin-left: 30px;
  }
}
</style>
