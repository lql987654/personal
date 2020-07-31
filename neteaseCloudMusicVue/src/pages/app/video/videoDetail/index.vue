<template>
  <div class="video-detail-container">
    <PageHeader :headerText="headerText"></PageHeader>
    <video v-if="videoUrl && videoUrl.length > 0" :src="videoUrl" class="video" controls="controls" autoplay="autoplay" muted  loop></video>
    <div class="video-content" v-if="videoDetailStatus">
      <h2>{{ videoDetail.description }}</h2>
    </div>

    <div class="similar-video-box">
      <h2>相似MV</h2>
      <div class="similar-video-content" v-if="similarVideoStatus">
        <div class="similar-video-item" v-for="(item, index) in similarVideoList" :key="index" @click="toVideoDetail(item.vid)">
          <img :src="item.coverUrl">
          <p>{{ item.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    getVideoDetail,
    getVideoUrl,
    getVideoInfo,
    getSimiVideo
  } from '@/service'

  import PageHeader from "@/components/page-header/PageHeader"

  export default {
    name: "videoDetail",
    components: {
      PageHeader
    },
    data() {
      return {
        videoUrl: '',
        videoDetailStatus: false,
        videoDetail: {},
        headerText: '',
        similarVideoList: {},
        similarVideoStatus: false
      }
    },
    mounted() {
      this.getVideoDetailFunc()
      this.getVideoInfoFunc()
    },
    watch: {
      '$route': 'getVideoDetailFunc'
    },
    methods: {
      getVideoDetailFunc() {
        getVideoDetail({id: this.$route.params.id}).then( res=> {
          this.videoDetail = res.data;
          this.videoDetailStatus = true
          this.headerText = res.data.title
        })
        getVideoUrl({id: this.$route.params.id}).then( res=> {
          this.videoUrl = res.urls[0].url
        })
        getSimiVideo({id: this.$route.params.id}).then( res=> {
          this.similarVideoList = res.data
          this.similarVideoStatus = true
        })
      },
      getVideoInfoFunc() {
        getVideoInfo({vid: this.$route.params.id}).then( res=> {
          console.log(res)
        })
      },
      toVideoDetail(id) {
        this.$router.replace({ path: `/video/${id}` });
      }
    }
  }
</script>

<style scoped>
  .video {
    width: 7.5rem;
    height: 4rem;
  }
  .video-content {
    width: 6.9rem;
    margin: 0 auto;
  }
  .video-content h2 {
    font-size: .3rem;
    color: #aaa;
  }
  .similar-video-box {
    width: 6.9rem;
    margin: 0 auto;
  }
  .similar-video-box h2 {
    font-size: .5rem;
    color: #000;
    margin-top: .3rem;
  }
  .similar-video-item {
    margin: .2rem 0;
  }
  .similar-video-item img {
    width: 100%;
    display: block;
    border-radius: .2rem;
  }
  .similar-video-item p {
    color: #333;
    font-size: .26rem;
    line-height: .4rem;
    margin-top: .2rem;
  }
</style>
