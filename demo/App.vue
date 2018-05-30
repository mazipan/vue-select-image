<template>
  <div id="app" class="VueSelectImage">

    <header role="header" class="site__header header">
      <div class="header__wrapper">
        <div class="header__brand">
          <a href="https://mazipan.github.io/demo/">
            <img src="https://mazipan.github.io/images/irfan-maulana.jpg" alt="Irfan Maulana" title="Irfan Maulana">
          </a>
          <div class="header__title">Irfan Maulana | Demo</div>
        </div>

        <a href="https://github.com/mazipan/vue-select-image"
            target="_blank" style="margin-right: 2em;">
          <SocialGithubIcon w="30px" h="30px"/>
        </a>

      </div>
    </header>

    <div class="app">

      <div class="grid__row centered" style="margin-bottom:1em;">
        <h1 class="centered">
          {{ title }}
          <small> {{ subtitle }} </small>
        </h1>
      </div>

      <div class="grid__row content centered">
        <h2>Single Selection</h2>
        <vue-select-image :dataImages="dataImages"
                          @onselectimage="onSelectImage">
        </vue-select-image>
        <div>
          <h5>Image Selected :
            <span v-if="imageSelected.id !== ''">
              <span>id = {{ imageSelected.id }}</span>
            </span>
          </h5>
        </div>
      </div>

      <div class="grid__row content centered">
        <h2>Multiple Selection</h2>
        <vue-select-image :dataImages="dataImages"
                          :is-multiple="true"
                          @onselectmultipleimage="onSelectMultipleImage"
                          :selectedImages="initialSelected">
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

    <!-- INSTALLATION -->

    <div class="grid__row content centered">
      <h2>Contribute</h2>
      <p>Feel free to fork <i class="fa fa-code-fork"></i> on <a href="https://github.com/mazipan/vue-select-image" target="_blank">GitHub <i class="fa fa-github"></i></a> if you have any features <i class="fa fa-cart-plus"></i> or bugs <i class="fa fa-bug"></i>!</p>
    </div>
    <div class="grid__row content centered">
      <h2>Contact Developer</h2>
      <p>
        <a href="https://github.com/mazipan">
          <SocialGithubIcon w="30px" h="30px"/>
        </a>
        <a href="mailto:mazipanneh@gmail.com">
          <IosEmailIcon w="30px" h="30px" />
        </a>
        <a href="https://facebook.com/mazipanneh">
          <SocialFacebookIcon w="30px" h="30px"/>
        </a>
        <a href="https://twitter.com/Maz_Ipan">
          <SocialTwitterIcon w="30px" h="30px"/>
        </a>
        <a href="https://id.linkedin.com/in/irfanmaulanamazipan">
          <SocialLinkedinIcon w="30px" h="30px"/>
        </a>
      </p>
    </div>
    <div class="grid__row content centered">
      <p>Copyright © 2017 <a href="https://mazipanneh.com/blog/">Irfan Maulana</a>, All Rights Reserved.</p>
    </div>

  </div>
</template>

<script src="./app.js"></script>

<style lang="scss">

// import ionicons global scss
@import "~vue-ionicons/ionicons.scss";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

small{
  display: block;
  color: #ddd;
  font-size: 16px;
}

.grid__row { *zoom: 1; margin: 0 auto; max-width: 92.308em; }
.grid__row:before, .grid__row:after { display: table; content: ' '; }
.grid__row:after { clear: both; }
.centered { text-align: center; }

.ion{
  &:hover{
    color: #4F8EF7;
  }
}

.vue-select-image{
  display: flex;
  justify-content: center;
}
</style>
