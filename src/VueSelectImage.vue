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

<script src="./vue-select-image.js"></script>
<style src="./vue-select-image.css"></style>
