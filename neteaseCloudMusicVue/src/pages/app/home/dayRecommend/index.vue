<template>
  <div class="day-recommend">
    <div class="day-recommend-banner">
      <img src="../../../../assets/bg/day-recommend-bg.jpg">
    </div>
    <div class="recommend-list wrap">
      <div class="recommend-item clx" v-for="(item, index) in recommendList" :key="index" @click="toPlayMusicPage(item.id)">
        <img :src="item.al.picUrl" class="album-img">
        <div class="music-name">{{ item.name }}</div>
        <div class="music-info">{{ item.ar[0].name }} - {{ item.al.name }}</div>
        <img src="../../../../assets/icon/mv-icon.png" v-if="item.mvid !== 0" class="mv-icon">
      </div>
    </div>
  </div>
</template>

<script>
  import {
    getDayRecommendSong,
    getHistoryRecommendList,
  } from '@/service'

  export default {
    name: "index",
    data() {
      return{
        recommendList: '',
        date: []
      }
    },
    mounted() {
      this.getDayRecommendSongFunc();
      this.getHistoryRecommendSongFunc();
    },
    methods: {
      getDayRecommendSongFunc() {
        getDayRecommendSong().then( res => {
          console.log(res)
          this.recommendList = res.data.dailySongs;
        })
      },
      getHistoryRecommendSongFunc() {
        getHistoryRecommendList().then( res => {
          console.log(res)
        })
      },
      getCurrentDate() {
        let date = [];
        let month = new Date().getMonth() + 1;
        let day = new Date().getDay() + 1;
        this.date = date[month, day]
      },
      toPlayMusicPage(id) {
        this.$router.push({ path: `/music/index/${id}` });
      }
    }
  }
</script>

<style scoped>
  .day-recommend-banner {
    position: relative;
    height: 4rem;
    z-index: 1;
  }
  .day-recommend-banner img {
    width: 100%;
    display: block;
  }
  .recommend-list {
    position: relative;
    padding-top: .3rem;
    background: #fff;
    border-top-left-radius: .3rem;
    border-top-right-radius: .3rem;
    z-index: 2;
  }
  .recommend-item {
    position: relative;
    box-sizing: border-box;
    padding: 0 .2rem;
    margin-bottom: .2rem;
  }
  .recommend-item .album-img {
    width: 1rem;
    height: 1rem;
    float: left;
    border-radius: .1rem;
  }
  .recommend-item .music-name {
    width: 4.4rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: .28rem;
    color: #333;
    margin-left: 1.5rem;
    margin-bottom: .12rem;
  }
  .recommend-item .music-info {
    width: 3.6rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: .22rem;
    color: #716c6c;
    margin-left: 1.5rem;
  }
  .recommend-item .mv-icon {
    position: absolute;
    top: .2rem;
    right: .8rem;
    width: .44rem;
    height: .44rem;
  }
</style>
