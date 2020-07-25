<template>
  <div class="home-box">
    <div class="head-top-box">
      <input type="text" placeholder="搜索" @click="toSearchPage">
    </div>
    <!-- banner轮播   -->
    <div class="banner wrap">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(item, index) in bannerList" :key="index">
          <img :src="item.pic">
        </mt-swipe-item>
      </mt-swipe>
    </div>

    <div class="home-tag-box wrap">
      <div class="tag-item" @click="toHomeItem(1)">
        <div class="tag-item-icon"></div>
        <p>每日推荐</p>
      </div>
      <div class="tag-item">
        <div class="tag-item-icon" @click="toHomeItem(2)"></div>
        <p>排行榜</p>
      </div>
    </div>
    <template v-if="appRecommendListStatus">
      <!-- 歌单推荐 -->
      <div class="music-list wrap">
        <div class="music-list-item">
          <h2>{{ appBlockList1.uiElement.mainTitle.title }} - {{ appBlockList1.uiElement.subTitle.title }}</h2>
          <a href="javascript:;" class="music-list-item-button">{{ appBlockList1.uiElement.button.text }}</a>
          <div class="list-scroll-box">
            <div class="scroll-item" v-for="(item, index) in appBlockList1.creatives" :key="index" @click="toPlayListPage(item.creativeId)">
              <img :src="item.uiElement.image.imageUrl">
              <p>{{ item.uiElement.mainTitle.title.substring(0, 14) }}...</p>
              <span>{{ item.resources[0].resourceExtInfo.playCount }}</span>
            </div>
          </div>
        </div>
        <div class="music-list-item">
          <h2>{{ appBlockList2.uiElement.mainTitle.title }} - {{ appBlockList2.uiElement.subTitle.title }}</h2>
          <a href="javascript:;" class="music-list-item-button">{{ appBlockList2.uiElement.button.text }}</a>
          <div class="list-scroll-box">
            <div class="scroll-item" v-for="(item, index) in appBlockList2.creatives" :key="index" @click="toPlayListPage(item.creativeId)">
              <img :src="item.uiElement.image.imageUrl">
              <p>{{ item.uiElement.mainTitle.title.substring(0, 14) }}...</p>
              <span>{{ item.resources[0].resourceExtInfo.playCount }}</span>
            </div>
          </div>
        </div>
      </div>
    </template>

    <buttonNav></buttonNav>
  </div>
</template>

<script>
  import {
    getBannerList,
    getRecommendMusicList,
    getHomePageFind,
  } from '@/service'

  import buttonNav from "@/components/bottom-nav/ButtonNav";

  export default {
    components: {buttonNav},
    name: "Home",
    data() {
      return {
        bannerList: '',
        appRecommendListStatus: false,
        appBlockList1: {}, //首页 第一个推荐list
        appBlockList2: {}, //首页 第二个推荐list
        searchData: ''
      }
    },
    mounted() {
      this.getBannerListFunc();
      this.getRecommendMusicListFunc();
      this.getHomePageFindFunc();
    },
    methods: {
      // 获取banner列表
      getBannerListFunc() {
        getBannerList().then(res => {
          if(res.code === 200) {
            this.bannerList = res.banners;
          }
        })
      },
      // 获取推荐歌单列表
      getRecommendMusicListFunc() {
        getRecommendMusicList().then(res => {
          console.log(res)
        })
      },
      // 获取发现列表
      getHomePageFindFunc() {
        getHomePageFind().then(res => {
          this.appBlockList1 = res.data.blocks[0]
          this.appBlockList2 = res.data.blocks[2]
          this.appRecommendListStatus = true
        })
      },
      toHomeItem(index) {
        let that = this;
        switch (index) {
          case 1:
            that.$router.push({ path: '/home/dayRecommend' });
            break;
          case 2:
            that.$router.push({ path: '/home/topList' });
            break;
          default:
            console.log('无传值')
        }
      },
      toSearchPage() {
        this.$router.push({ path: '/search/index' });
      },
      toPlayListPage(id) {
        this.$router.push({ path: `/playlist/${id}` });
      }
    }
  }
</script>

<style scoped>
  .head-top-box {
    font-size: 0;
  }
  .head-top-box input {
    width: 6rem;
    height: .6rem;
    line-height: .6rem;
    padding-left: .2rem;
    margin: .1rem auto 0;
    display: block;
    border-radius: .3rem;
    border: 1px solid #ccc;
    outline: none;
  }
  .banner {
    width: 7rem;
    height: 2.7rem;
    margin: .2rem auto;
    overflow: hidden;
    border-radius: .3rem;
  }
  .banner img {
    width: 100%;
    display: block;
  }
  .music-list {
    width: 7rem;
    margin: 0 auto;
  }
  .music-list h2 {
    font-size: .34rem;
    color: #333;
    margin-bottom: .2rem;
  }
  .home-tag-box {
    display: flex;
    margin-bottom: .2rem;
  }
  .home-tag-box .tag-item {
    margin: auto;
  }
  .home-tag-box .tag-item .tag-item-icon {
    width: .5rem;
    height: .5rem;
    margin: 0 auto .2rem;
    background: #d43c33;
    border-radius: 50%;
  }
  .home-tag-box .tag-item p {
    font-size: .24rem;
    text-align: center;
  }
  .list-scroll-box {
    overflow-y: hidden;
    overflow-x: auto;
    white-space: nowrap;
  }
  .list-scroll-box::-webkit-scrollbar {
    display: none;
  }
  .list-scroll-box .scroll-item {
    position: relative;
    width: 2rem;
    display: inline-block;
    margin-right: .3rem;
    vertical-align: middle;
  }
  .music-list-item {
    position: relative;
    margin-bottom: .6rem;
  }
  .music-list-item-button {
    position: absolute;
    top: 0;
    right: 0;
    padding: .06rem .2rem;
    border: 1px solid #ccc;
    font-size: .22rem;
    text-align: center;
    border-radius: .3rem;
    text-decoration: none;
    color: #333;
  }
  .list-scroll-box .scroll-item img {
    width: 2rem;
    height: 2rem;
    display: block;
    margin: 0 auto;
  }
  .list-scroll-box .scroll-item p {
    font-size: .24rem;
    color: #333;
    margin-top: .1rem;
    white-space: normal;
  }
  .scroll-item span {
    position: absolute;
    top: .1rem;
    right: .1rem;
    font-size: .2rem;
    color: #ccc;
  }
</style>
