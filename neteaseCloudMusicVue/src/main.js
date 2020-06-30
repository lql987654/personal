// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import { Toast } from 'mint-ui';
import { initFlexible } from './util/initFlexible'
import  regular  from './util/regular'
import * as Cookies from 'es-cookie';

Vue.use(MintUI)

// 全局toast提示
Vue.prototype.toast = Toast;
//正则
Vue.prototype.regular = regular;
// rem布局
initFlexible()

import axios from 'axios'
Vue.prototype.$axios = axios
axios.defaults.baseURL = '/api'  //关键代码

Vue.config.productionTip = false

// 登录拦截
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    if (Cookies.get('MUSIC_U')) { // 判断本地是否存在token
      next()
    } else {
      // 未登录,跳转到登陆页面
      next({
        path: '/login'
      })
    }
  } else {
    if(sessionStorage.getItem("token") == 'true'){
      next('/login?type=2421');
    }else{
      next();
    }
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
