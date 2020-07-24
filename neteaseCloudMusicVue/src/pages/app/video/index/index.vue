<template>
  <div class="video-container">
    <div class="tag-box">
      <span v-if="videoTagList && videoTagList.length > 0" v-for="(item, index) in videoTagList" :key="index" @click="getCategoryVideoFunc(item.id)">{{ item.name }}</span>
    </div>
    <div class="video-list-box" v-if="videoList && videoList.length > 0">
      <div class="video-list-item" v-for="(item, index) in videoList" :key="index" @click="toVideoDetail(item.data.vid)">
        <img :src="item.data.coverUrl">
        <p>{{ item.data.title }}</p>
      </div>
    </div>
    <buttonNav></buttonNav>
  </div>
</template>

<script>
  import buttonNav from "@/components/bottom-nav/ButtonNav";
  import {
    getAllVideo,
    getGroupVideoTag,
    getCategoryVideoTag,
    getCategoryVideo,
  } from '@/service'

  export default {
    components: {buttonNav},
    name: "videoIndex",
    data(){
      return{
        videoTagList: {},
        videoList: {}
      }
    },
    mounted() {
      this.getAllVideoFunc()
      this.getGroupVideoTagFunc()
      this.getCategoryVideoTagFunc()
    },
    methods: {
      getAllVideoFunc() {
        getAllVideo().then( res=> {
          this.videoList = res.datas
        })
      },
      getGroupVideoTagFunc() {
        getGroupVideoTag().then( res=> {
          console.log(res)
        })
      },
      getCategoryVideoTagFunc() {
        getCategoryVideoTag().then( res=> {
          this.videoTagList = res.data
        })
      },
      getCategoryVideoFunc(id) {
        getCategoryVideo({id: id}).then( res=> {
          this.videoList = res.datas
        })
      },
      toVideoDetail(id) {
        this.$router.push({ path: `/video/${id}` });
      }
    }
  }
</script>

<style scoped>
  .tag-box {
    width: 6.9rem;
    margin: 0 auto .3rem;
    padding-top: .2rem;
    overflow-y: hidden;
    overflow-x: auto;
    font-size: .24rem;
    color: #333;
    white-space: nowrap;
  }
  .tag-box::-webkit-scrollbar {
    display: none;
  }
  .tag-box span {
    height: .4rem;
    line-height: .4rem;
    margin-right: .3rem;
    display: inline-block;
  }
  .video-list-item {
    width: 6.9rem;
    margin: 0 auto .3rem;
  }
  .video-list-item img {
    width: 100%;
    display: block;
    border-radius: .2rem;
  }
  .video-list-item p {
    font-size: .26rem;
    color: #000;
    margin: .2rem 0;
  }
</style>
