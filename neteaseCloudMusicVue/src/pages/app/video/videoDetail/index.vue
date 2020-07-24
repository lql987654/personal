<template>
  <div class="video-detail-container">
    <video v-if="videoUrl && videoUrl.length > 0" :src="videoUrl" class="video" controls="controls" autoplay="autoplay" muted  loop></video>
    <div class="video-content" v-if="videoDetailStatus">
      <h2>{{ videoDetail.description }}</h2>
    </div>
  </div>
</template>

<script>
  import {
    getVideoDetail,
    getVideoUrl,
    getVideoInfo,
  } from '@/service'
  export default {
    name: "videoDetail",
    data() {
      return {
        videoUrl: '',
        videoDetailStatus: false,
        videoDetail: {}
      }
    },
    mounted() {
      this.getVideoDetailFunc()
      this.getVideoUrlFunc()
      this.getVideoInfoFunc()
    },
    methods: {
      getVideoDetailFunc() {
        getVideoDetail({id: this.$route.params.id}).then( res=> {
          this.videoDetail = res.data;
          this.videoDetailStatus = true
        })
      },
      getVideoUrlFunc() {
        getVideoUrl({id: this.$route.params.id}).then( res=> {
          this.videoUrl = res.urls[0].url
        })
      },
      getVideoInfoFunc() {
        getVideoInfo({vid: this.$route.params.id}).then( res=> {
          console.log(res)
        })
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
    color: #000;
  }
</style>
