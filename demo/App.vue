<template>
  <div id="app" class="VueSelectImage">

    <header role="header" class="site__header header">
      <div class="header__wrapper">
        <div class="header__brand">
          <a href="https://mazipan.github.io/demo/">
            <img src="https://mazipan.github.io/images/irfan-maulana.jpg" alt="Irfan Maulana" title="Irfan Maulana">
          </a>
          <div class="header__title">{{ title }}</div>
        </div>
        
        <div class="header__brand">
          <a href="#docs" style="margin-right: 2em;">
            Docs
          </a>

          <a href="https://github.com/mazipan/vue-select-image"
              target="_blank" style="margin-right: 2em;">
            <SocialGithubIcon w="30px" h="30px"/>
          </a>
        </div>

      </div>
    </header>

    <div class="app">

      <div class="grid__row centered" style="margin-bottom:1em;">
        <h1 class="centered">
          {{ title }}
          <small> {{ subtitle }} </small>
        </h1>
      </div>

      <InArticleAdsense
          data-ad-client="ca-pub-5442972248172818"
          data-ad-slot="7974047383">
      </InArticleAdsense>

      <div class="grid__row content centered">
        <h2>Single Selection</h2>
        <vue-select-image :dataImages="dataImages"
                          @onselectimage="onSelectImage"
                          ref="single-select-image">
        </vue-select-image>
        <div>
          <h5>Image Selected :
            <span v-if="imageSelected.id !== ''">
              <span>id = {{ imageSelected.id }}</span>
            </span>
          </h5>
          <button @click="onUnselectSingleImage">Reset Selection</button>
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

      <div class="grid__row content centered">
        <h2>Use Label</h2>
        <vue-select-image :dataImages="dataImages"
                          @onselectimage="onSelectImage"
                          :useLabel="true">
        </vue-select-image>
      </div>

      <div class="grid__row content centered">
        <h2>Custom Active State</h2>
        <vue-select-image :dataImages="dataImages"
                          @onselectimage="onSelectImage"
                          :activeClass="'--active'">
        </vue-select-image>
      </div>

       <div class="grid__row content centered">
        <h2>Custom Style</h2>
        <vue-select-image :dataImages="dataImages"
                          @onselectimage="onSelectImage"
                          :rootClass="'custom-style'">
        </vue-select-image>
        <br>
        <i class="label-image">Image by http://placekitten.com</i>
      </div>

    </div>

    <InArticleAdsense
        data-ad-client="ca-pub-5442972248172818"
        data-ad-slot="7974047383">
    </InArticleAdsense>

    <!-- INSTALLATION -->

    <div class="grid__row content centered" id="docs">
      <h2>Download</h2>
      <pre v-highlightjs>
        <code class="bash">
# NPM
npm install vue-select-image

# Yarn
yarn add vue-select-image
        </code>
      </pre>
    </div>
    <div class="grid__row content centered">
      <h2>How to use</h2>
      <pre v-highlightjs>
        <code class="javascript">
import VueSelectImage from 'vue-select-image'
Vue.use(VueSelectImage)

// add stylesheet
require('vue-select-image/dist/vue-select-image.css')
        </code>
      </pre>
    </div>
    <div class="grid__row content centered">
      <h2>Template</h2>
      <pre v-highlightjs>
        <code class="html">
          {{templateSingle}}
          {{templateMultiple}}
        </code>
      </pre>
    </div>

    <InArticleAdsense
        data-ad-client="ca-pub-5442972248172818"
        data-ad-slot="7974047383">
    </InArticleAdsense>


    <div class="grid__row content centered">
      <h2>Available Props</h2>
      <table>
        <thead>
          <tr>
          <th>Attribute</th>
          <th>Type</th>
          <th>Default</th>
          <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>:dataImages</td>
            <td>Array</td>
            <td>[]</td>
            <td>Array of images that will be shown</td>
          </tr>
          <tr>
            <td>:selectedImages</td>
            <td>Array</td>
            <td>[]</td>
            <td>Array of initial selected images</td>
          </tr>
          <tr>
            <td>:isMultiple</td>
            <td>Boolean</td>
            <td>false</td>
            <td>Flag to enable multiple selection</td>
          </tr>
          <tr>
            <td>:useLabel</td>
            <td>Boolean</td>
            <td>false</td>
            <td>Flag to enable showing alt as label</td>
          </tr>
          <tr>
            <td>:rootClass</td>
            <td>String</td>
            <td>vue-select-image</td>
            <td>Class for root element of this component</td>
          </tr>
          <tr>
            <td>:activeClass</td>
            <td>String</td>
            <td>--selected</td>
            <td>Class for active state, will concat with :rootClass</td>
          </tr>
          <tr>
            <td>:h</td>
            <td>String</td>
            <td>auto</td>
            <td>Height of images, ex: '50px'</td>
          </tr>
          <tr>
            <td>:w</td>
            <td>String</td>
            <td>auto</td>
            <td>Width of images, ex: '50px'</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="grid__row content centered">
      <h2>Available Events</h2>
      <table>
        <thead>
          <tr>
            <th>Events Attr</th>
            <th>Return</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>@onselectimage</td>
            <td>Object image selected</td>
          </tr>
          <tr>
            <td>@onselectmultipleimage</td>
            <td>Array of object image has been selected</td>
          </tr>
        </tbody>
      </table>
    </div>

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
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

small {
  display: block;
  color: #ddd;
  font-size: 16px;
}

.grid__row {
  *zoom: 1;
  margin: 0 auto;
  max-width: 92.308em;
}
.grid__row:before,
.grid__row:after {
  display: table;
  content: " ";
}
.grid__row:after {
  clear: both;
}
.centered {
  text-align: center;
}
.content {
  margin: 0 20px;
}

.ion {
  &:hover {
    color: #4f8ef7;
  }
}
.label-image{
  font-size: .7rem;
}
.vue-select-image {
  display: flex;
  justify-content: center;
}

pre,
code {
  text-align: left;
  max-width: 500px;
  margin: auto;
}

table{
  overflow: auto;
  margin: auto;
  margin-top: 0;
  margin-bottom: 16px;
  border-spacing: 0;
  border-collapse: collapse;
  text-align: left;
  font-size: 1.2rem;

  thead{
    tr{
      background-color: #f6f8fa;
    }
  }
  tr {
      background-color: #fff;
      border-top: 1px solid #c6cbd1;
  }

  th, td{
    padding: 6px 13px;
    border: 1px solid #dfe2e5;
  }

}

.VueSelectImage{
  /deep/ .vue-select-image__thumbnail--active{
    background: #50af2b;

    &:after{
      content: '✅';
      position: absolute;
      color: #50af2b;
      margin-top: -190px;
      margin-left: 70px;
      font-size: 20px;
      border-radius: 3px;
    }

  }
}


.custom-style {
  display: flex;
  justify-content: center;

  &__wrapper {
    overflow: auto;
    list-style-image: none;
    list-style-position: outside;
    list-style-type: none;
    padding: 0px;
    margin: 0px;
  }

  &__item {
    margin: 0px 12px 12px 0px;
    float: left;

    @media only screen and (min-width: 1200px) {
      margin-left: 30px;
    }
  }

  &__thumbnail{
    padding: 6px;
    border: 1px solid #dddddd;

    display: block;
    padding: 4px;
    line-height: 20px;
    border: 1px solid #ddd;

    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;

    -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.055);
    -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.055);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.055);

    -webkit-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;

    &--selected{
      background: #0088cc;

      .custom-style__img{
        zoom: 1.1;
      }
    }
  }
  &__img{
    -webkit-user-drag: none;
    display: block;
    max-width: 100%;
    margin-right: auto;
    margin-left: auto;

    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
  }
}
.adswrapper {
  width: 70%;
  margin: 0 auto;
  text-align: center;
}
</style>
