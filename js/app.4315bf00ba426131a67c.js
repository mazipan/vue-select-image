!function(e){function t(t){for(var i,l,r=t[0],o=t[1],c=t[2],d=0,p=[];d<r.length;d++)l=r[d],n[l]&&p.push(n[l][0]),n[l]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i]);for(u&&u(t);p.length;)p.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],i=!0,r=1;r<a.length;r++){var o=a[r];0!==n[o]&&(i=!1)}i&&(s.splice(t--,1),e=l(l.s=a[0]))}return e}var i={},n={1:0},s=[];function l(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=i,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)l.d(a,i,function(t){return e[t]}.bind(null,i));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/vue-select-image/";var r=window.webpackJsonp=window.webpackJsonp||[],o=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var u=o;s.push([33,0]),a()}([,,,,,,function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"vue-select-image",props:{dataImages:{type:Array,default:function(){return[]}},selectedImages:{type:Array,default:function(){return[]}},isMultiple:{type:Boolean,default:!1},rootClass:{type:String,default:"vue-select-image"},h:{type:String,default:"auto"},w:{type:String,default:"auto"}},data:function(){return{singleSelected:{id:""},multipleSelected:[]}},computed:{dataImagesLocal:function(){return this.dataImages||[]}},created:function(){this.setInitialSelection()},methods:{classThumbnail:function(e,t){var a=this.rootClass+"__thumbnail";return e===t?a+" "+a+"--selected":""+a},classThumbnailMultiple:function(e){var t=this.rootClass+"__thumbnail",a=t+" is--multiple";return this.isExistInArray(e)?a+" "+t+"--selected":""+a},onSelectImage:function(e){this.singleSelected=Object.assign({},this.singleSelected,e),this.$emit("onselectimage",e)},isExistInArray:function(e){return this.multipleSelected.find(function(t){return e===t.id})},removeSelected:function(e){return this.multipleSelected.filter(function(t){return e!==t.id})},onSelectMultipleImage:function(e){this.isExistInArray(e.id)?this.multipleSelected=this.removeSelected(e.id):this.multipleSelected.push(e),this.$emit("onselectmultipleimage",this.multipleSelected)},setInitialSelection:function(){this.selectedImages&&(this.isMultiple||1!==this.selectedImages.length?this.multipleSelected=[].concat(this.selectedImages):this.singleSelected=Object.assign({},this.selectedImages[0]))}}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=c(a(25)),n=c(a(22)),s=c(a(21)),l=c(a(20)),r=c(a(19)),o=c(a(18));function c(e){return e&&e.__esModule?e:{default:e}}t.default={name:"app",components:{VueSelectImage:i.default,SocialGithubIcon:n.default,IosEmailIcon:s.default,SocialFacebookIcon:l.default,SocialTwitterIcon:r.default,SocialLinkedinIcon:o.default},data:function(){return{title:"Vue Select Image",subtitle:"Vue 2.x component for selecting image from list",imageSelected:{id:"",src:"",alt:""},imageMultipleSelected:[],dataImages:[{id:"1",src:"https://raw.githubusercontent.com/mazipan/vue-select-image/master/src/assets/logo-1.png",alt:"jQuery"},{id:"2",src:"https://raw.githubusercontent.com/mazipan/vue-select-image/master/src/assets/logo-2.png",alt:"Angular"},{id:"3",src:"https://raw.githubusercontent.com/mazipan/vue-select-image/master/src/assets/logo-3.png",alt:"Vue.js"},{id:"4",src:"https://raw.githubusercontent.com/mazipan/vue-select-image/master/src/assets/logo-4.png",alt:"React"}],initialSelected:[{id:"2",src:"https://raw.githubusercontent.com/mazipan/vue-select-image/master/src/assets/logo-2.png",alt:"Angular"},{id:"3",src:"https://raw.githubusercontent.com/mazipan/vue-select-image/master/src/assets/logo-3.png",alt:"Vue.js"}]}},methods:{onSelectImage:function(e){console.log("fire event onSelectImage: ",e),this.imageSelected=Object.assign({},this.imageSelected,e)},onSelectMultipleImage:function(e){console.log("fire event onSelectMultipleImage: ",e),this.imageMultipleSelected=e}}}},function(e,t,a){"use strict";a.d(t,"a",function(){return i}),a.d(t,"b",function(){return n});var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"VueSelectImage",attrs:{id:"app"}},[a("header",{staticClass:"site__header header",attrs:{role:"header"}},[a("div",{staticClass:"header__wrapper"},[e._m(0),e._v(" "),a("a",{staticStyle:{"margin-right":"2em"},attrs:{href:"https://github.com/mazipan/vue-select-image",target:"_blank"}},[a("SocialGithubIcon",{attrs:{w:"30px",h:"30px"}})],1)])]),e._v(" "),a("div",{staticClass:"app"},[a("div",{staticClass:"grid__row centered",staticStyle:{"margin-bottom":"1em"}},[a("h1",{staticClass:"centered"},[e._v("\n        "+e._s(e.title)+"\n        "),a("small",[e._v(" "+e._s(e.subtitle)+" ")])])]),e._v(" "),a("div",{staticClass:"grid__row content centered"},[a("h2",[e._v("Single Selection")]),e._v(" "),a("vue-select-image",{attrs:{dataImages:e.dataImages},on:{onselectimage:e.onSelectImage}}),e._v(" "),a("div",[a("h5",[e._v("Image Selected :\n          "),""!==e.imageSelected.id?a("span",[a("span",[e._v("id = "+e._s(e.imageSelected.id))])]):e._e()])])],1),e._v(" "),a("div",{staticClass:"grid__row content centered"},[a("h2",[e._v("Multiple Selection")]),e._v(" "),a("vue-select-image",{attrs:{dataImages:e.dataImages,"is-multiple":!0,selectedImages:e.initialSelected},on:{onselectmultipleimage:e.onSelectMultipleImage}}),e._v(" "),a("div",[a("h5",[e._v("Mutiple Image Selected :\n          "),e._l(e.imageMultipleSelected,function(t,i){return a("span",{key:i},[a("span",[e._v("id = "+e._s(t.id)+", ")])])})],2)])],1)]),e._v(" "),e._m(1),e._v(" "),a("div",{staticClass:"grid__row content centered"},[a("h2",[e._v("Contact Developer")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/mazipan"}},[a("SocialGithubIcon",{attrs:{w:"30px",h:"30px"}})],1),e._v(" "),a("a",{attrs:{href:"mailto:mazipanneh@gmail.com"}},[a("IosEmailIcon",{attrs:{w:"30px",h:"30px"}})],1),e._v(" "),a("a",{attrs:{href:"https://facebook.com/mazipanneh"}},[a("SocialFacebookIcon",{attrs:{w:"30px",h:"30px"}})],1),e._v(" "),a("a",{attrs:{href:"https://twitter.com/Maz_Ipan"}},[a("SocialTwitterIcon",{attrs:{w:"30px",h:"30px"}})],1),e._v(" "),a("a",{attrs:{href:"https://id.linkedin.com/in/irfanmaulanamazipan"}},[a("SocialLinkedinIcon",{attrs:{w:"30px",h:"30px"}})],1)])]),e._v(" "),e._m(2)])},n=[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"header__brand"},[t("a",{attrs:{href:"https://mazipan.github.io/demo/"}},[t("img",{attrs:{src:"https://mazipan.github.io/images/irfan-maulana.jpg",alt:"Irfan Maulana",title:"Irfan Maulana"}})]),this._v(" "),t("div",{staticClass:"header__title"},[this._v("Irfan Maulana | Demo")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"grid__row content centered"},[a("h2",[e._v("Contribute")]),e._v(" "),a("p",[e._v("Feel free to fork "),a("i",{staticClass:"fa fa-code-fork"}),e._v(" on "),a("a",{attrs:{href:"https://github.com/mazipan/vue-select-image",target:"_blank"}},[e._v("GitHub "),a("i",{staticClass:"fa fa-github"})]),e._v(" if you have any features "),a("i",{staticClass:"fa fa-cart-plus"}),e._v(" or bugs "),a("i",{staticClass:"fa fa-bug"}),e._v("!")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"grid__row content centered"},[t("p",[this._v("Copyright © 2017 "),t("a",{attrs:{href:"https://mazipanneh.com/blog/"}},[this._v("Irfan Maulana")]),this._v(", All Rights Reserved.")])])}]},,,,,,function(e,t,a){"use strict";a.d(t,"a",function(){return i}),a.d(t,"b",function(){return n});var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:e.rootClass},[a("ul",{class:e.rootClass+"__wrapper"},e._l(e.dataImagesLocal,function(t,i){return a("li",{key:i,class:e.rootClass+"__item"},[e.isMultiple?e._e():a("div",{class:e.classThumbnail(e.singleSelected.id,t.id),on:{click:function(a){e.onSelectImage(t)}}},[a("img",{class:e.rootClass+"__img",attrs:{src:t.src,alt:t.alt,height:e.h,width:e.w}})]),e._v(" "),e.isMultiple?a("div",{class:e.classThumbnailMultiple(t.id),on:{click:function(a){e.onSelectMultipleImage(t)}}},[a("img",{class:e.rootClass+"__img",attrs:{src:t.src,alt:t.alt,height:e.h,width:e.w}})]):e._e()])}))])},n=[]},,,,,,,,,function(e,t,a){(e.exports=a(16)(!1)).push([e.i,".vue-select-image__wrapper{overflow:auto;list-style-image:none;list-style-position:outside;list-style-type:none;padding:0;margin:0}.vue-select-image__item{margin:0 12px 12px 0;float:left}.vue-select-image__thumbnail{padding:6px;display:block;padding:4px;line-height:20px;border:1px solid #ddd;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.055);-moz-box-shadow:0 1px 3px rgba(0,0,0,.055);box-shadow:0 1px 3px rgba(0,0,0,.055);-webkit-transition:all .2s ease-in-out;-moz-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.vue-select-image__thumbnail--selected{background:#08c}.vue-select-image__img{-webkit-user-drag:none;display:block;max-width:100%;margin-right:auto;margin-left:auto}@media only screen and (min-width:1200px){.vue-select-image__item{margin-left:30px}}",""])},function(e,t,a){var i=a(23);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,a(15).default)("065c2806",i,!0,{})},function(e,t,a){"use strict";a.r(t);var i=a(6),n=a.n(i);for(var s in i)"default"!==s&&function(e){a.d(t,e,function(){return i[e]})}(s);var l=a(14),r=a(0);var o=function(e){a(24)},c=Object(r.a)(n.a,l.a,l.b,!1,o,null,null);t.default=c.exports},function(e,t,a){(e.exports=a(16)(!1)).push([e.i,"\n.ion {\n  display: inline-flex;\n}\n.ion__svg {\n    fill: currentColor;\n}\n#app {\n  font-family: 'Avenir', Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nsmall {\n  display: block;\n  color: #ddd;\n  font-size: 16px;\n}\n.grid__row {\n  *zoom: 1;\n  margin: 0 auto;\n  max-width: 92.308em;\n}\n.grid__row:before, .grid__row:after {\n  display: table;\n  content: ' ';\n}\n.grid__row:after {\n  clear: both;\n}\n.centered {\n  text-align: center;\n}\n.ion:hover {\n  color: #4F8EF7;\n}\n.vue-select-image {\n  display: flex;\n  justify-content: center;\n}\n",""])},function(e,t,a){var i=a(26);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,a(15).default)("3bab8a64",i,!0,{})},function(e,t,a){"use strict";a.r(t);var i=a(7),n=a.n(i);for(var s in i)"default"!==s&&function(e){a.d(t,e,function(){return i[e]})}(s);var l=a(8),r=a(0);var o=function(e){a(27)},c=Object(r.a)(n.a,l.a,l.b,!1,o,null,null);t.default=c.exports},,,,,function(e,t,a){"use strict";var i=s(a(32)),n=s(a(28));function s(e){return e&&e.__esModule?e:{default:e}}new i.default({el:"#app",template:"<App/>",components:{App:n.default}})}]);