webpackJsonp([3],{108:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),o=(n(47),n(79)),s=n.n(o),a=n(70),u=n(78),r=n(74),l=n.n(r),d=n(75),c=(n.n(d),n(73)),h=n(71),f=n(72),p=n(77),m=n.n(p),v=n(76);n.n(v);i.default.use(c.a),i.default.use(h.a),i.default.use(f.a),i.default.use(u.a),i.default.use(l.a),i.default.use(m.a,{ak:"BN1bXXigqIG2sPObLUVpZ67OQccucmrI"}),i.default.http.interceptors.push(function(t,e){e(function(t){})});new i.default({router:a.a,render:function(t){return t(s.a)}}).$mount("#app-box")},109:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(189),o=n.n(i);e.default={name:"alert",components:{XDialog:o.a},created:function(){void 0!==this.value&&(this.showValue=this.value)},props:{value:Boolean,title:String,content:String,buttonText:String,hideOnBlur:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-mask"},dialogTransition:{type:String,default:"vux-dialog"},maskZIndex:[Number,String]},data:function(){return{showValue:!1}},methods:{_onHide:function(){this.showValue=!1}},watch:{value:function(t){this.showValue=t},showValue:function(t){this.$emit("input",t)}}}},110:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"loading",model:{prop:"show",event:"change"},props:{show:Boolean,text:String,position:String,transition:{type:String,default:"vux-mask"}},watch:{show:function(t){this.$emit("update:show",t)}}}},111:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(116);e.default={name:"toast",mixins:[i.a],props:{value:Boolean,time:{type:Number,default:2e3},type:{type:String,default:"success"},transition:String,width:{type:String,default:"7.6em"},isShowMask:{type:Boolean,default:!1},text:String,position:String},data:function(){return{show:!1}},created:function(){this.value&&(this.show=!0)},computed:{currentTransition:function(){return this.transition?this.transition:"top"===this.position?"vux-slide-from-top":"bottom"===this.position?"vux-slide-from-bottom":"vux-fade"},toastClass:function(){return{"weui-toast_forbidden":"warn"===this.type,"weui-toast_cancel":"cancel"===this.type,"weui-toast_success":"success"===this.type,"weui-toast_text":"text"===this.type,"vux-toast-top":"top"===this.position,"vux-toast-bottom":"bottom"===this.position,"vux-toast-middle":"middle"===this.position}},style:function(){if("text"===this.type&&"auto"===this.width)return{padding:"10px"}}},watch:{show:function(t){var e=this;t&&(this.$emit("input",!0),this.$emit("on-show"),this.fixSafariOverflowScrolling("auto"),clearTimeout(this.timeout),this.timeout=setTimeout(function(){e.show=!1,e.$emit("input",!1),e.$emit("on-hide"),e.fixSafariOverflowScrolling("touch")},this.time))},value:function(t){this.show=t}}}},112:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(115);e.default={mixins:[i.a],name:"x-dialog",model:{prop:"show",event:"change"},props:{show:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-mask"},maskZIndex:[String,Number],dialogTransition:{type:String,default:"vux-dialog"},dialogClass:{type:String,default:"weui-dialog"},hideOnBlur:Boolean,dialogStyle:Object,scroll:{type:Boolean,default:!0,validator:function(t){return!0}}},computed:{maskStyle:function(){if(void 0!==this.maskZIndex)return{zIndex:this.maskZIndex}}},mounted:function(){"undefined"!=typeof window&&window.VUX_CONFIG&&"VIEW_BOX"===window.VUX_CONFIG.$layout&&(this.layout="VIEW_BOX")},watch:{show:function(t){this.$emit("update:show",t),this.$emit(t?"on-show":"on-hide"),t?this.addModalClassName():this.removeModalClassName()}},methods:{shouldPreventScroll:function(){var t=/iPad|iPhone|iPod/i.test(window.navigator.userAgent),e=this.$el.querySelector("input")||this.$el.querySelector("textarea");if(t&&e)return!0},hide:function(){this.hideOnBlur&&(this.$emit("update:show",!1),this.$emit("change",!1),this.$emit("on-click-mask"))}},data:function(){return{layout:""}}}},113:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(80),o=(n.n(i),n(81));n.n(o);e.default={data:function(){return{}},mounted:function(){},watch:{},methods:{}}},166:function(t,e){},167:function(t,e){},168:function(t,e){},169:function(t,e){},170:function(t,e){},180:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-alert"},[n("x-dialog",{attrs:{"mask-transition":t.maskTransition,"dialog-transition":t.dialogTransition,"hide-on-blur":t.hideOnBlur,"mask-z-index":t.maskZIndex},on:{"on-hide":function(e){t.$emit("on-hide")},"on-show":function(e){t.$emit("on-show")}},model:{value:t.showValue,callback:function(e){t.showValue=e},expression:"showValue"}},[n("div",{staticClass:"weui-dialog__hd"},[n("strong",{staticClass:"weui-dialog__title"},[t._v(t._s(t.title))])]),t._v(" "),n("div",{staticClass:"weui-dialog__bd"},[t._t("default",[n("div",{domProps:{innerHTML:t._s(t.content)}})])],2),t._v(" "),n("div",{staticClass:"weui-dialog__ft"},[n("a",{staticClass:"weui-dialog__btn weui-dialog__btn_primary",attrs:{href:"javascript:;"},on:{click:t._onHide}},[t._v(t._s(t.buttonText||"确定"))])])])],1)},staticRenderFns:[]}},181:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-x-dialog",class:{"vux-x-dialog-absolute":"VIEW_BOX"===t.layout}},[n("transition",{attrs:{name:t.maskTransition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-mask",style:t.maskStyle,on:{click:t.hide}})]),t._v(" "),n("transition",{attrs:{name:t.dialogTransition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],class:t.dialogClass,style:t.dialogStyle},[t._t("default")],2)])],1)},staticRenderFns:[]}},182:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:"el-fade-in-linear",mode:"out-in"}},[n("router-view")],1)],1)},staticRenderFns:[]}},183:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-toast"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowMask&&t.show,expression:"isShowMask && show"}],staticClass:"weui-mask_transparent"}),t._v(" "),n("transition",{attrs:{name:t.currentTransition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-toast",class:t.toastClass,style:{width:t.width}},[n("i",{directives:[{name:"show",rawName:"v-show",value:"text"!==t.type,expression:"type !== 'text'"}],staticClass:"weui-icon-success-no-circle weui-icon_toast"}),t._v(" "),t.text?n("p",{staticClass:"weui-toast__content",style:t.style,domProps:{innerHTML:t._s(t.text)}}):n("p",{staticClass:"weui-toast__content",style:t.style},[t._t("default")],2)])])],1)},staticRenderFns:[]}},184:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:t.transition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-loading_toast vux-loading",class:t.text?"":"vux-loading-no-text"},[n("div",{staticClass:"weui-mask_transparent"}),t._v(" "),n("div",{staticClass:"weui-toast",style:{position:t.position}},[n("i",{staticClass:"weui-loading weui-icon_toast"}),t._v(" "),t.text?n("p",{staticClass:"weui-toast__content"},[t._v(t._s(t.text||"加载中")),t._t("default")],2):t._e()])])])},staticRenderFns:[]}},186:function(t,e,n){n(166);var i=n(15)(n(109),n(180),null,null);t.exports=i.exports},187:function(t,e,n){n(170);var i=n(15)(n(110),n(184),null,null);t.exports=i.exports},188:function(t,e,n){n(169);var i=n(15)(n(111),n(183),null,null);t.exports=i.exports},189:function(t,e,n){n(167);var i=n(15)(n(112),n(181),null,null);t.exports=i.exports},190:function(t,e){},70:function(t,e,n){"use strict";var i=n(1),o=n(47),s=function(t){return n.e(1).then(function(){var e=[n(193)];t.apply(null,e)}.bind(this)).catch(n.oe)},a=function(t){return n.e(0).then(function(){var e=[n(194)];t.apply(null,e)}.bind(this)).catch(n.oe)};i.default.use(o.a),e.a=new o.a({mode:"history",base:"/h5/",routes:[{path:"/",name:"index",component:s},{path:"/mobile",name:"mobileIndex",component:a}]})},75:function(t,e){},79:function(t,e,n){n(168);var i=n(15)(n(113),n(182),null,null);t.exports=i.exports},80:function(t,e,n){function i(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;l.default.http.post(t,e,{emulateJSON:!0}).then(function(t){200==t.data.status?n(t.data):(console.log(t,"error ajax"),i(t.data))},function(t){i&&i(t.data)})}function o(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=sessionStorage.getItem("sessionId"),s=t+"?sessionId="+o;l.default.http.post(s,e,{headers:{"Content-Type":"multipart/form-data"},emulateJSON:!0}).then(function(t){200==t.data.status?n(t.data):i(t,"error ajax")},function(t){i&&i(t.data)})}function s(t){function e(t){return t>9?t:"0"+t}var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"date",i=new Date(t),o=i.getFullYear(),s=i.getDate(),a=+i.getMonth()+1,u=i.getHours(),r=i.getMinutes(),l=i.getSeconds();if(console.log(n),"date"==n)var d=o+"-"+e(a)+"-"+e(s)+" "+e(u)+":"+e(r)+":"+e(l);else if("birth"==n)var d=o+"/"+a+"/"+s;else if("time"==n)var d=e(u)+":"+e(r);return d}function a(t,e){var n=new Date;n.setTime(n.getTime()+864e5),document.cookie=t+"="+escape(e)+";expires="+n.toGMTString()}function u(t){var e,n=new RegExp("(^| )"+t+"=([^;]*)(;|$)");return(e=document.cookie.match(n))?unescape(e[2]):null}function r(t,e){window.addEventListener("scroll",function(){document.body.scrollHeight-(window.scrollY+document.body.clientHeight)<100&&t()})}var l=n(1);t.exports={requestAjax:i,uploadFile:o,dateFormate:s,setCookie:a,getCookie:u,refresh:r}},81:function(t,e){t.exports={USER:{REGISTERINTEREST:"https://www.dreamlot.com/api/app/user/add"}}}},[108]);
//# sourceMappingURL=app.7ba82d4a07fe56a8e62b.js.map