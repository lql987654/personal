import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      hidden: true,
      redirect: '/home',
    },
    {
      path: '/login',
      name: "login",
      component: resolve => require(['@/pages/login/Login.vue'], resolve),
    },
    {
      path: '*',
      name: "notFound",
      component: resolve => require(['@/pages/not-found/NotFound.vue'], resolve),
    },

    {
      path: '/',
      name: "index",
      meta: {
        requireAuth : true
      },
      component: r => require.ensure([], () => r(require('@/pages/app/index.vue')), 'index'),
      children: [
        {
          path: '/home',
          meta: {
            requireAuth : true
          },
          name: '发现',
          component: r => require.ensure([], () => r(require('@/pages/app/home/home/index.vue')), 'index')
        },
        {
          path: '/home/dayRecommend',
          meta: {
            requireAuth : true
          },
          name: '每日推荐',
          component: r => require.ensure([], () => r(require('@/pages/app/home/dayRecommend/index.vue')), 'index')
        },
        {
          path: '/home/topList',
          meta: {
            requireAuth : true
          },
          name: '排行榜',
          component: r => require.ensure([], () => r(require('@/pages/app/home/topList/index.vue')), 'index')
        },
      ]
    },
  ]
})

