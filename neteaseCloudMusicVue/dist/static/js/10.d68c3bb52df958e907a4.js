webpackJsonp([10],{Hzxn:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i("0jG4"),n={name:"videoDetail",data:function(){return{videoUrl:"",videoDetailStatus:!1,videoDetail:{}}},mounted:function(){this.getVideoDetailFunc(),this.getVideoUrlFunc(),this.getVideoInfoFunc()},methods:{getVideoDetailFunc:function(){var t=this;Object(o.z)({id:this.$route.params.id}).then(function(e){t.videoDetail=e.data,t.videoDetailStatus=!0})},getVideoUrlFunc:function(){var t=this;Object(o.B)({id:this.$route.params.id}).then(function(e){t.videoUrl=e.urls[0].url})},getVideoInfoFunc:function(){Object(o.A)({vid:this.$route.params.id}).then(function(t){console.log(t)})}}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"video-detail-container"},[t.videoUrl&&t.videoUrl.length>0?i("video",{staticClass:"video",attrs:{src:t.videoUrl,controls:"controls",autoplay:"autoplay",muted:"",loop:""},domProps:{muted:!0}}):t._e(),t._v(" "),t.videoDetailStatus?i("div",{staticClass:"video-content"},[i("h2",[t._v(t._s(t.videoDetail.description))])]):t._e()])},staticRenderFns:[]};var d=i("VU/8")(n,a,!1,function(t){i("j8Ma")},"data-v-2d33b5ec",null);e.default=d.exports},j8Ma:function(t,e){}});
//# sourceMappingURL=10.d68c3bb52df958e907a4.js.map