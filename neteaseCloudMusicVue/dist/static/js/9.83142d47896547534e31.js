webpackJsonp([9],{"1HWn":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var c=e("0jG4"),i={components:{buttonNav:e("a06Y").a},name:"communityIndex",data:function(){return{communityStatus:!1,communityList:""}},mounted:function(){this.getHotWallListFunc(),this.getHotWallTopicFunc()},methods:{getHotWallListFunc:function(){var t=this;Object(c.j)().then(function(n){t.communityList=n.data,t.communityStatus=!0})},getHotWallTopicFunc:function(){Object(c.i)().then(function(t){})}}},o={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"community-container"},[e("h2",[t._v("云村热评")]),t._v(" "),t.communityStatus?e("div",{staticClass:"community-content"},t._l(t.communityList,function(n,c){return e("div",{key:c,staticClass:"community-item"},[e("img",{attrs:{src:n.simpleResourceInfo.songCoverUrl}}),t._v(" "),e("p",[t._v(t._s(n.content.substring(0,18))+"...")])])}),0):t._e(),t._v(" "),e("buttonNav")],1)},staticRenderFns:[]};var u=e("VU/8")(i,o,!1,function(t){e("Whc7")},"data-v-3191feec",null);n.default=u.exports},Whc7:function(t,n){}});
//# sourceMappingURL=9.83142d47896547534e31.js.map