import Vue from 'vue'
import Router from 'vue-router'


const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

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
    /*       首页路由        */
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
    /*       我的页面路由        */
    {
      path: '/mine',
      name: "index",
      meta: {
        requireAuth : true
      },
      component: r => require.ensure([], () => r(require('@/pages/app/index.vue')), 'index'),
      children: [
        {
          path: '/mine/index',
          meta: {
            requireAuth : true
          },
          name: '我的',
          component: r => require.ensure([], () => r(require('@/pages/app/mine/index/index.vue')), 'mineIndex')
        }
      ]
    },
    /*       视频页面路由        */
    {
      path: '/video',
      name: "index",
      meta: {
        requireAuth : true
      },
      component: r => require.ensure([], () => r(require('@/pages/app/index.vue')), 'index'),
      children: [
        {
          path: '/video/index',
          meta: {
            requireAuth : true
          },
          name: '视频',
          component: r => require.ensure([], () => r(require('@/pages/app/video/index/index.vue')), 'videoIndex')
        }
      ]
    },
    /*       云村页面路由        */
    {
      path: '/community',
      name: "index",
      meta: {
        requireAuth : true
      },
      component: r => require.ensure([], () => r(require('@/pages/app/index.vue')), 'index'),
      children: [
        {
          path: '/community/index',
          meta: {
            requireAuth : true
          },
          name: '云村',
          component: r => require.ensure([], () => r(require('@/pages/app/community/index/index.vue')), 'communityIndex')
        }
      ]
    },
    /*       账户页面路由        */
    {
      path: '/account',
      name: "index",
      meta: {
        requireAuth : true
      },
      component: r => require.ensure([], () => r(require('@/pages/app/index.vue')), 'index'),
      children: [
        {
          path: '/account/index',
          meta: {
            requireAuth : true
          },
          name: '账户',
          component: r => require.ensure([], () => r(require('@/pages/app/account/index/index.vue')), 'accountIndex')
        }
      ]
    },
    /*  播放歌曲页面路由  */
    {
      path: '/music',
      name: "index",
      meta: {
        requireAuth : true
      },
      component: r => require.ensure([], () => r(require('@/pages/app/index.vue')), 'index'),
      children: [
        {
          path: '/music/index/:musicId',
          meta: {
            requireAuth : true
          },
          name: 'playMusic',
          component: r => require.ensure([], () => r(require('@/pages/app/music/playMusic/index.vue')), 'musicIndex')
        }
      ]
    },
  ]
})

