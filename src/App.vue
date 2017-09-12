<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <vue-select-image :dataImages="dataImages" @onSelectImage="onSelectImage"></vue-select-image>
    <div>
      <h3>Image Selected</h3> 
      <div v-if="imageSelected.id !== ''">
        <div>id = {{ imageSelected.id }}</div>
        <div>src = {{ imageSelected.src }}</div>
        <div>alt = {{ imageSelected.alt }}</div> 
      </div>     
    </div>
  </div>
</template>

<script src="./app.js"></script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
