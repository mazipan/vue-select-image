<template>
  <div id="app" class="app">
    <h1>{{ msg }}</h1>

    <div>      
      <h2>Single Selection</h2>      
      <vue-select-image :dataImages="dataImages" 
                        @onSelectImage="onSelectImage">
      </vue-select-image>
      <div>
        <h5>Image Selected : 
          <span v-if="imageSelected.id !== ''">
            <span>id = {{ imageSelected.id }}</span>
          </span> 
        </h5>            
      </div>
    </div>

    <div>
      <h2>Multiple Selection</h2>
      <vue-select-image :dataImages="dataImages" 
                        :is-multiple="true" 
                        @onSelectMultipleImage="onSelectMultipleImage">
      </vue-select-image>
      <div>
        <h5>Mutiple Image Selected : 
          <span v-for="(imgSelected, index) in imageMultipleSelected" :key="index">
            <span>id = {{ imgSelected.id }}, </span>
          </span>
        </h5> 
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
