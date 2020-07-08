<template>
  <div class="">
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
    <!-- 歌单推荐 -->
    <div class="music-list wrap">
      <h2>宝藏歌单，值得聆听</h2>
    </div>

    <buttonNav></buttonNav>
  </div>
</template>

<script>
  import {
    getBannerList,
    getRecommendMusicList,
  } from '@/service'

  import buttonNav from "@/components/bottom-nav/ButtonNav";

  export default {
    components: {buttonNav},
    name: "Home",
    data() {
      return {
        bannerList: ''
      }
    },
    mounted() {
      this.getBannerListFunc();
      this.getRecommendMusicListFunc();
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
      }
    }
  }
</script>

<style scoped>
  .banner {
    width: 7rem;
    height: 2.7rem;
    margin: .2rem auto;
    overflow: hidden;
    border-radius: .2rem;
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
</style>
