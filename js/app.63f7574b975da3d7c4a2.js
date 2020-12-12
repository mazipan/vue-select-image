!function(e){function t(t){for(var i,n,c=t[0],r=t[1],o=t[2],m=0,u=[];m<c.length;m++)n=c[m],Object.prototype.hasOwnProperty.call(l,n)&&l[n]&&u.push(l[n][0]),l[n]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);for(d&&d(t);u.length;)u.shift()();return s.push.apply(s,o||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],i=!0,c=1;c<a.length;c++){var r=a[c];0!==l[r]&&(i=!1)}i&&(s.splice(t--,1),e=n(n.s=a[0]))}return e}var i={},l={0:0},s=[];function n(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=i,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(a,i,function(t){return e[t]}.bind(null,i));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/vue-select-image/";var c=window.webpackJsonp=window.webpackJsonp||[],r=c.push.bind(c);c.push=t,c=c.slice();for(var o=0;o<c.length;o++)t(c[o]);var d=r;s.push([207,1]),a()}({1:function(e,t,a){},2:function(e,t,a){var i=a(9);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,a(208).default)("24b289de",i,!0,{})},207:function(e,t,a){"use strict";a.r(t);var i=a(0),l={name:"vue-select-image",props:{dataImages:{type:Array,default:function(){return[]}},selectedImages:{type:Array,default:function(){return[]}},isMultiple:{type:Boolean,default:!1},useLabel:{type:Boolean,default:!1},rootClass:{type:String,default:"vue-select-image"},activeClass:{type:String,default:"--selected"},h:{type:String,default:"auto"},w:{type:String,default:"auto"},limit:{type:Number,default:0}},data:function(){return{singleSelected:{id:""},multipleSelected:[]}},computed:{dataImagesLocal:function(){return this.dataImages||[]}},mounted:function(){this.setInitialSelection()},methods:{classThumbnail:function(e,t,a){var i="".concat(this.rootClass,"__thumbnail");return a?"".concat(i," ").concat(i,"--disabled"):e===t?"".concat(i," ").concat(i).concat(this.activeClass):"".concat(i)},classThumbnailMultiple:function(e,t){var a="".concat(this.rootClass,"__thumbnail"),i="".concat(a," is--multiple");return t?"".concat(i," ").concat(a,"--disabled"):this.isExistInArray(e)?"".concat(i," ").concat(a).concat(this.activeClass):"".concat(i)},onSelectImage:function(e){e.disabled||(this.singleSelected=Object.assign({},this.singleSelected,e),this.$emit("onselectimage",e))},isExistInArray:function(e){return this.multipleSelected.find((function(t){return e===t.id}))},removeFromSingleSelected:function(){this.singleSelected={},this.$emit("onselectimage",{})},removeFromMultipleSelected:function(e,t){this.multipleSelected=this.multipleSelected.filter((function(t){return e!==t.id})),t||this.$emit("onselectmultipleimage",this.multipleSelected)},resetMultipleSelection:function(){this.multipleSelected=[]},onSelectMultipleImage:function(e){e.disabled||(this.isExistInArray(e.id)?(this.removeFromMultipleSelected(e.id,!0),this.$emit("onselectmultipleimage",this.multipleSelected)):this.limit>0?this.multipleSelected.length<this.limit?(this.multipleSelected.push(e),this.$emit("onselectmultipleimage",this.multipleSelected)):this.$emit("onreachlimit",this.limit):(this.multipleSelected.push(e),this.$emit("onselectmultipleimage",this.multipleSelected)))},setInitialSelection:function(){this.selectedImages&&(this.isMultiple||1!==this.selectedImages.length?this.multipleSelected=[].concat(this.selectedImages):this.singleSelected=Object.assign({},this.selectedImages[0]))}}},s=(a(7),a(3)),n={name:"app",components:{VueSelectImage:Object(s.a)(l,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:e.rootClass},[a("ul",{class:e.rootClass+"__wrapper"},e._l(e.dataImagesLocal,(function(t,i){return a("li",{key:i,class:e.rootClass+"__item"},[e.isMultiple?e._e():a("div",{class:e.classThumbnail(e.singleSelected.id,t.id,t.disabled),on:{click:function(a){return e.onSelectImage(t)}}},[a("img",{class:e.rootClass+"__img",attrs:{src:t.src,alt:t.alt,id:t.id,height:e.h,width:e.w}}),e._v(" "),e.useLabel?a("label",{class:e.rootClass+"__lbl",attrs:{for:t.id}},[e._v(e._s(t.alt))]):e._e()]),e._v(" "),e.isMultiple?a("div",{class:e.classThumbnailMultiple(t.id,t.disabled),on:{click:function(a){return e.onSelectMultipleImage(t)}}},[a("img",{class:e.rootClass+"__img",attrs:{src:t.src,alt:t.alt,id:t.id,height:e.h,width:e.w}}),e._v(" "),e.useLabel?a("label",{class:e.rootClass+"__lbl",attrs:{for:t.id}},[e._v(e._s(t.alt))]):e._e()]):e._e()])})),0)])}),[],!1,null,null,null).exports},data:function(){return{title:"✅ Vue Select Image",subtitle:"Vue 2.x component for selecting image from list",imageSelected:{id:"",src:"",alt:""},imageMultipleSelected:[],dataImages:[{id:"1",src:"http://placekitten.com/200/200",alt:"jQuery"},{id:"2",src:"http://placekitten.com/200/200",alt:"Angular"},{id:"3",src:"http://placekitten.com/200/200",alt:"Vue.js"},{id:"4",src:"http://placekitten.com/200/200",alt:"React"},{id:"5",src:"http://placekitten.com/200/200",alt:"I am disabled",disabled:!0}],initialSelected:[{id:"2",src:"http://placekitten.com/200/200",alt:"Angular"},{id:"3",src:"http://placekitten.com/200/200",alt:"Vue.js"}],templateSingle:'\n\x3c!-- SINGLE SELECTION --\x3e\n<vue-select-image :dataImages="dataImages"\n      @onselectimage="onSelectImage">\n</vue-select-image>\n      ',templateMultiple:'\n\x3c!-- MULTIPLE SELECTION --\x3e\n<vue-select-image :dataImages="dataImages"\n      :is-multiple="true"\n      :selectedImages="initialSelected"\n      @onselectmultipleimage="onSelectMultipleImage">\n</vue-select-image>\n      '}},methods:{onSelectImage:function(e){console.log("fire event onSelectImage: ",e),this.imageSelected=e},onSelectMultipleImage:function(e){console.log("fire event onSelectMultipleImage: ",e),this.imageMultipleSelected=e},onReachLimit:function(){alert("Reach limit...")},onUnselectSingleImage:function(){this.$refs["single-select-image"].removeFromSingleSelected()}}},c=(a(8),Object(s.a)(n,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"VueSelectImage",attrs:{id:"app"}},[a("header",{staticClass:"site__header header",attrs:{role:"header"}},[a("div",{staticClass:"header__wrapper"},[a("div",{staticClass:"header__brand"},[e._m(0),e._v(" "),a("div",{staticClass:"header__title"},[e._v(e._s(e.title))])]),e._v(" "),e._m(1)])]),e._v(" "),a("div",{staticClass:"app"},[a("div",{staticClass:"grid__row centered",staticStyle:{"margin-bottom":"1em"}},[a("h1",{staticClass:"centered"},[e._v("\n          "+e._s(e.title)+"\n          "),a("small",[e._v(" "+e._s(e.subtitle)+" ")])])]),e._v(" "),a("InArticleAdsense",{attrs:{"data-ad-client":"ca-pub-5442972248172818","data-ad-slot":"7974047383"}}),e._v(" "),a("div",{staticClass:"grid__row content centered"},[a("h2",[e._v("Single Selection")]),e._v(" "),a("vue-select-image",{ref:"single-select-image",attrs:{dataImages:e.dataImages},on:{onselectimage:e.onSelectImage}}),e._v(" "),a("div",[a("h5",[e._v("Image Selected :\n            "),""!==e.imageSelected.id?a("span",[a("span",[e._v("id = "+e._s(e.imageSelected.id))])]):e._e()]),e._v(" "),a("button",{on:{click:e.onUnselectSingleImage}},[e._v("Reset Selection")])])],1),e._v(" "),a("div",{staticClass:"grid__row content centered"},[a("h2",[e._v("Multiple Selection")]),e._v(" "),a("vue-select-image",{attrs:{dataImages:e.dataImages,"is-multiple":!0,selectedImages:e.initialSelected},on:{onselectmultipleimage:e.onSelectMultipleImage}}),e._v(" "),a("div",[a("h5",[e._v("Mutiple Image Selected :\n            "),e._l(e.imageMultipleSelected,(function(t,i){return a("span",{key:i},[a("span",[e._v("id = "+e._s(t.id)+", ")])])}))],2)])],1),e._v(" "),a("div",{staticClass:"grid__row content centered"},[a("h2",[e._v("Multiple Selection with Limit 2")]),e._v(" "),a("vue-select-image",{attrs:{dataImages:e.dataImages,"is-multiple":!0,limit:2,selectedImages:e.initialSelected},on:{onreachlimit:e.onReachLimit,onselectmultipleimage:e.onSelectMultipleImage}}),e._v(" "),a("div",[a("h5",[e._v("Mutiple Image Selected :\n            "),e._l(e.imageMultipleSelected,(function(t,i){return a("span",{key:i},[a("span",[e._v("id = "+e._s(t.id)+", ")])])}))],2)])],1),e._v(" "),a("div",{staticClass:"grid__row content centered"},[a("h2",[e._v("Use Label")]),e._v(" "),a("vue-select-image",{attrs:{dataImages:e.dataImages,useLabel:!0},on:{onselectimage:e.onSelectImage}})],1),e._v(" "),a("div",{staticClass:"grid__row content centered"},[a("h2",[e._v("Custom Active State")]),e._v(" "),a("vue-select-image",{attrs:{dataImages:e.dataImages,activeClass:"--active"},on:{onselectimage:e.onSelectImage}})],1),e._v(" "),a("div",{staticClass:"grid__row content centered"},[a("h2",[e._v("Custom Style")]),e._v(" "),a("vue-select-image",{attrs:{dataImages:e.dataImages,rootClass:"custom-style"},on:{onselectimage:e.onSelectImage}}),e._v(" "),a("br"),e._v(" "),a("i",{staticClass:"label-image"},[e._v("Image by http://placekitten.com")])],1)],1),e._v(" "),a("InArticleAdsense",{attrs:{"data-ad-client":"ca-pub-5442972248172818","data-ad-slot":"7974047383"}}),e._v(" "),a("div",{staticClass:"grid__row content centered",attrs:{id:"docs"}},[a("h2",[e._v("Download")]),e._v(" "),a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[e._v("        "),a("code",{staticClass:"bash"},[e._v("\n# NPM\nnpm install vue-select-image\n\n# Yarn\nyarn add vue-select-image\n        ")]),e._v("\n      ")])]),e._v(" "),a("div",{staticClass:"grid__row content centered"},[a("h2",[e._v("How to use")]),e._v(" "),a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[e._v("        "),a("code",{staticClass:"javascript"},[e._v("\nimport VueSelectImage from 'vue-select-image'\nVue.use(VueSelectImage)\n\n// add stylesheet\nrequire('vue-select-image/dist/vue-select-image.css')\n        ")]),e._v("\n      ")])]),e._v(" "),a("div",{staticClass:"grid__row content centered"},[a("h2",[e._v("Template")]),e._v(" "),a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[e._v("        "),a("code",{staticClass:"html"},[e._v("\n          "+e._s(e.templateSingle)+"\n          "+e._s(e.templateMultiple)+"\n        ")]),e._v("\n      ")])]),e._v(" "),a("InArticleAdsense",{attrs:{"data-ad-client":"ca-pub-5442972248172818","data-ad-slot":"7974047383"}}),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5)],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("a",{attrs:{href:"https://mazipan.github.io/demo/"}},[t("img",{attrs:{src:"https://mazipan.github.io/images/irfan-maulana.jpg",alt:"Irfan Maulana",title:"Irfan Maulana"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"header__brand"},[t("a",{staticStyle:{"margin-right":"2em"},attrs:{href:"#docs"}},[this._v("\n            Docs\n          ")]),this._v(" "),t("a",{staticStyle:{"margin-right":"2em"},attrs:{href:"https://github.com/mazipan/vue-select-image",target:"_blank"}},[this._v("\n            Github\n          ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"grid__row content centered"},[a("h2",[e._v("Available Props")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Attribute")]),e._v(" "),a("th",[e._v("Type")]),e._v(" "),a("th",[e._v("Default")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v(":dataImages")])]),e._v(" "),a("td",[e._v("Array")]),e._v(" "),a("td",[e._v("[]")]),e._v(" "),a("td",[e._v("Array of images that will be shown")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v(":selectedImages")])]),e._v(" "),a("td",[e._v("Array")]),e._v(" "),a("td",[e._v("[]")]),e._v(" "),a("td",[e._v("Array of initial selected images")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v(":isMultiple")])]),e._v(" "),a("td",[e._v("Boolean")]),e._v(" "),a("td",[e._v("false")]),e._v(" "),a("td",[e._v("Flag to enable multiple selection")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v(":useLabel")])]),e._v(" "),a("td",[e._v("Boolean")]),e._v(" "),a("td",[e._v("false")]),e._v(" "),a("td",[e._v("Flag to enable showing alt as label")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v(":rootClass")])]),e._v(" "),a("td",[e._v("String")]),e._v(" "),a("td",[e._v("vue-select-image")]),e._v(" "),a("td",[e._v("Class for root element of this component")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v(":activeClass")])]),e._v(" "),a("td",[e._v("String")]),e._v(" "),a("td",[e._v("--selected")]),e._v(" "),a("td",[e._v("Class for active state, will concat with :rootClass")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v(":h")])]),e._v(" "),a("td",[e._v("String")]),e._v(" "),a("td",[e._v("auto")]),e._v(" "),a("td",[e._v("Height of images, ex: '50px'")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v(":w")])]),e._v(" "),a("td",[e._v("String")]),e._v(" "),a("td",[e._v("auto")]),e._v(" "),a("td",[e._v("Width of images, ex: '50px'")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v(":limit")])]),e._v(" "),a("td",[e._v("Number")]),e._v(" "),a("td",[e._v("0")]),e._v(" "),a("td",[e._v("To set maximum images can be select")])])])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"grid__row content centered"},[a("h2",[e._v("Available Events")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Events Attr")]),e._v(" "),a("th",[e._v("Return")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("@onselectimage")])]),e._v(" "),a("td",[e._v("Object image selected")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("@onselectmultipleimage")])]),e._v(" "),a("td",[e._v("Array of object image has been selected")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("@onreachlimit")])]),e._v(" "),a("td",[e._v("When the length of selected images reach the limit")])])])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"grid__row content centered"},[a("h2",[e._v("Contribute")]),e._v(" "),a("p",[e._v("Feel free to fork "),a("i",{staticClass:"fa fa-code-fork"}),e._v(" on "),a("a",{attrs:{href:"https://github.com/mazipan/vue-select-image",target:"_blank"}},[e._v("GitHub "),a("i",{staticClass:"fa fa-github"})]),e._v(" if you have any features "),a("i",{staticClass:"fa fa-cart-plus"}),e._v(" or bugs "),a("i",{staticClass:"fa fa-bug"}),e._v("!")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"grid__row content centered"},[t("p",[this._v("Copyright © 2017 "),t("a",{attrs:{href:"https://mazipan.space/"}},[this._v("Irfan Maulana")]),this._v(", All Rights Reserved.")])])}],!1,null,null,null).exports),r=a(4),o=a.n(r),d=a(6),m=a.n(d);i.a.use(a(206)),i.a.use(o.a.Adsense),i.a.use(o.a.InArticleAdsense),i.a.use(o.a.InFeedAdsense),i.a.use(m.a),new i.a({el:"#app",template:"<App/>",components:{App:c}})},7:function(e,t,a){"use strict";var i=a(1);a.n(i).a},8:function(e,t,a){"use strict";var i=a(2);a.n(i).a},9:function(e,t,a){(t=a(10)(!1)).push([e.i,'#app{font-family:"Avenir", Helvetica, Arial, sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}small{display:block;color:#ddd;font-size:16px}.grid__row{*zoom:1;margin:0 auto;max-width:92.308em}.grid__row:before,.grid__row:after{display:table;content:" "}.grid__row:after{clear:both}.centered{text-align:center}.content{margin:0 20px}.ion:hover{color:#4f8ef7}.label-image{font-size:.7rem}.vue-select-image{display:flex;justify-content:center}pre,code{text-align:left;max-width:500px;margin:auto}table{overflow:auto;margin:auto;margin-top:0;margin-bottom:16px;border-spacing:0;border-collapse:collapse;text-align:left;font-size:1.2rem}table thead tr{background-color:#f6f8fa}table tr{background-color:#fff;border-top:1px solid #c6cbd1}table th,table td{padding:6px 13px;border:1px solid #dfe2e5}.VueSelectImage /deep/ .vue-select-image__thumbnail--active{background:#50af2b}.VueSelectImage /deep/ .vue-select-image__thumbnail--active:after{content:\'✅\';position:absolute;color:#50af2b;margin-top:-190px;margin-left:70px;font-size:20px;border-radius:3px}.custom-style{display:flex;justify-content:center}.custom-style__wrapper{overflow:auto;list-style-image:none;list-style-position:outside;list-style-type:none;padding:0px;margin:0px}.custom-style__item{margin:0px 12px 12px 0px;float:left}@media only screen and (min-width: 1200px){.custom-style__item{margin-left:30px}}.custom-style__thumbnail{padding:6px;border:1px solid #dddddd;display:block;padding:4px;line-height:20px;border:1px solid #ddd;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;-webkit-box-shadow:0 1px 3px rgba(0,0,0,0.055);-moz-box-shadow:0 1px 3px rgba(0,0,0,0.055);box-shadow:0 1px 3px rgba(0,0,0,0.055);-webkit-transition:all 0.2s ease-in-out;-moz-transition:all 0.2s ease-in-out;-o-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out}.custom-style__thumbnail--selected{background:#0088cc}.custom-style__thumbnail--selected .custom-style__img{zoom:1.1}.custom-style__img{-webkit-user-drag:none;display:block;max-width:100%;margin-right:auto;margin-left:auto;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%}.adswrapper{width:70%;margin:0 auto;text-align:center}\n',""]),e.exports=t}});