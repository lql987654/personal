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
      name: "home",
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
      name: "mine",
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
      name: "video",
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
        },
        {
          path: '/video/:id',
          meta: {
            requireAuth : true
          },
          name: 'videoDetail',
          component: r => require.ensure([], () => r(require('@/pages/app/video/videoDetail/index.vue')), 'videoDetail')
        }
      ]
    },
    /*       云村页面路由        */
    {
      path: '/community',
      name: "community",
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
      name: "account",
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
      name: "music",
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
    /*  搜索页面路由  */
    {
      path: '/search',
      name: "search",
      meta: {
        requireAuth : true
      },
      component: r => require.ensure([], () => r(require('@/pages/app/index.vue')), 'index'),
      children: [
        {
          path: '/search/index',
          meta: {
            requireAuth : true
          },
          name: 'searchPage',
          component: r => require.ensure([], () => r(require('@/pages/app/search/searchPage/index.vue')), 'searchPage')
        },
        {
          path: '/search/:keyword',
          meta: {
            requireAuth : true
          },
          name: 'searchResult',
          component: r => require.ensure([], () => r(require('@/pages/app/search/searchResult/index.vue')), 'searchResult')
        }
      ]
    },
    /*  歌单页面路由  */
    {
      path: '/playlist',
      name: "playlist",
      meta: {
        requireAuth : true
      },
      component: r => require.ensure([], () => r(require('@/pages/app/index.vue')), 'index'),
      children: [
        {
          path: '/playlist/:id',
          meta: {
            requireAuth : true
          },
          name: 'PlayListPage',
          component: r => require.ensure([], () => r(require('@/pages/app/play-list/index/index.vue')), 'PlayListPage')
        },
      ]
    },
  ]
})

