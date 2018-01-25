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

<script src="./vue-select-image.js"></script>
<style src="./vue-select-image.css"></style>
