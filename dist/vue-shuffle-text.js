!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).VueShuffleText={})}(this,(function(t){"use strict";function e(t,e,i,n,s,h,o,r,a,f){"boolean"!=typeof o&&(a=r,r=o,o=!1);const u="function"==typeof i?i.options:i;let l;if(t&&t.render&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0,s&&(u.functional=!0)),n&&(u._scopeId=n),h?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,a(t)),t&&t._registeredComponents&&t._registeredComponents.add(h)},u._ssrRegister=l):e&&(l=o?function(t){e.call(this,f(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,r(t))}),l)if(u.functional){const t=u.render;u.render=function(e,i){return l.call(i),t(e,i)}}else{const t=u.beforeCreate;u.beforeCreate=t?[].concat(t,l):[l]}return i}const i={props:{originalText:{type:String,default:void 0},randomChars:{type:String,default:"ABCDEFGHIJKLMNOPQRSTUVWXYG01234566789"},timeOut:{type:Number,default:20}},data:function(){return{text:"",outputText:"",originalLength:this.originalText.length,length:0,shuffleLength:0,startTime:void 0}},mounted:function(){this.startTime=(new Date).getTime(),this.shuffle()},methods:{init:function(){this.text="",this.length=0,this.shuffleLength=0},shuffle:function(){this.init(),requestAnimationFrame(this.update().bind(this))},update:function(){this.length>this.originalLength||(new Date).getTime()-this.startTime>this.timeOut&&(this.text.length<this.originalLength&&(this.text+=this.emptyChar),this.text.length>this.originalLength/3&&(this.text=this.generateRandomText(this.shuffleLength)+this.text.slice(this.shuffleLength),this.shuffleLength<this.originalLength&&this.shuffleLength++),this.shuffleLength>this.originalLength/2&&(this.text=this.originalText.slice(0,this.length)+this.text.slice(this.length),this.length++),this.outputText=this.text,requestAnimationFrame(this.update()))},generateRandomTex:function(t){for(var e="",i=0;i<t;i++)e+=this.randomChars[Math.floor(Math.random()*this.randomChars.length)];return e}}};var n=function(){var t=this.$createElement;return(this._self._c||t)("span",[this._v("\n  "+this._s(this.outputText)+"\n")])};n._withStripped=!0;const s=e({render:n,staticRenderFns:[]},void 0,i,void 0,!1,void 0,!1,void 0,void 0,void 0);t.ShuffleText=s,Object.defineProperty(t,"__esModule",{value:!0})}));
