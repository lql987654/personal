webpackJsonp([11],{"1HWn":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("0jG4"),c={components:{buttonNav:e("a06Y").a},name:"communityIndex",data:function(){return{communityStatus:!1,communityList:""}},mounted:function(){this.getHotWallListFunc(),this.getHotWallTopicFunc()},methods:{getHotWallListFunc:function(){var t=this;Object(i.j)().then(function(n){t.communityList=n.data,t.communityStatus=!0})},getHotWallTopicFunc:function(){Object(i.i)().then(function(t){})}}},o={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"community-container"},[e("h2",[t._v("云村热评")]),t._v(" "),t.communityStatus?e("div",{staticClass:"community-content"},t._l(t.communityList,function(n,i){return e("div",{key:i,staticClass:"community-item"},[e("img",{attrs:{src:n.simpleResourceInfo.songCoverUrl}}),t._v(" "),e("p",[t._v(t._s(n.content.substring(0,18))+"...")])])}),0):t._e(),t._v(" "),e("buttonNav")],1)},staticRenderFns:[]};var u=e("VU/8")(c,o,!1,function(t){e("Ctme")},"data-v-1b876995",null);n.default=u.exports},Ctme:function(t,n){}});
//# sourceMappingURL=11.e33d977d1e703bfc22fe.js.map