<template>
  <div class="play-list-container" v-if="PlayListStatus">
    <h2><em @click="returnBack"></em>{{ PlayListDetail.playlist.name }}</h2>
    <div class="play-list-content">
      <div class="play-list-item" v-for="(item, index) in PlayListDetail.playlist.tracks" :key="index" @click="toPlayMusic(item.id)">
        <img :src="item.al.picUrl">
        <div class="list-item-content">
          <h3>{{ item.name }}</h3>
          <h4>{{ item.al.name }} - {{item.ar[0].name}}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    getPlayListDetail,
  } from '@/service'

  export default {
    name: "PlayListPage",
    data() {
      return {
        PlayListStatus: false,
        PlayListDetail: {}
      }
    },
    mounted() {
      this.getPlayListDetailFunc()
    },
    methods: {
      getPlayListDetailFunc() {
        getPlayListDetail({id: this.$route.params.id}).then(res => {
          this.PlayListDetail = res
          this.PlayListStatus = true
        })
      },
      returnBack() {
        this.$router.go(-1)
      },
      toPlayMusic(id) {
        this.$router.push({ path: `/music/index/${id}` });
      }
    }
  }
</script>

<style scoped>
  .play-list-container {
    width: 6.9rem;
    margin: 0 auto;
  }
  .play-list-container h2 {
    position: relative;
    height: .8rem;
    line-height: .8rem;
    font-size: .32rem;
    color: #000;
    margin-bottom: .2rem;
    text-align: center;
  }
  .play-list-container h2 em {
    position: absolute;
    top: 0;
    left: -.2rem;
    width: .8rem;
    height: .8rem;
    display: inline-block;
    background: url("../../../../assets/play-music/arrow_back_black.png") center no-repeat;
    background-size: .4rem .4rem;
  }
  .play-list-item {
    margin-bottom: .2rem;
  }
  .play-list-item img {
    width: .8rem;
    height: .8rem;
    display: inline-block;
    border-radius: .1rem;
    vertical-align: middle;
  }
  .list-item-content {
    display: inline-block;
    margin-left: .2rem;
    vertical-align: middle;
    font-size: 0;
  }
  .play-list-item h3 {
    font-size: .3rem;
    color: #333;
    margin-bottom: .12rem;
    display: inline-block;
  }
  .play-list-item h4 {
    color: #ccc;
    font-size: .22rem;
    display: block;
  }
</style>
