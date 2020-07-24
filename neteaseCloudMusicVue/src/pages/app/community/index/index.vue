<template>
  <div class="community-container">
    <h2>云村热评</h2>
    <div class="community-content" v-if="communityStatus">
      <div class="community-item" v-for="(item, index) in communityList" :key="index">
        <img :src="item.simpleResourceInfo.songCoverUrl">
        <p>{{ item.content.substring(0, 18) }}...</p>
      </div>
    </div>
    <buttonNav></buttonNav>
  </div>
</template>

<script>
  import {
    getHotWallList,
    getHotTopicList
  } from '@/service'

  import buttonNav from "@/components/bottom-nav/ButtonNav";

  export default {
    components: {buttonNav},
    name: "communityIndex",
    data() {
      return {
        communityStatus: false,
        communityList: ''
      }
    },
    mounted() {
      this.getHotWallListFunc();
      this.getHotWallTopicFunc();
    },
    methods: {
      getHotWallListFunc() {
        getHotWallList().then(res => {
          this.communityList = res.data
          this.communityStatus = true
        })
      },
      getHotWallTopicFunc() {
        getHotTopicList().then(res => {

        })
      }
    }
  }
</script>

<style scoped>
  .community-container h2 {
    padding-top: .3rem;
    margin-left: .3rem;
    color: #333;
    font-size: .3rem;
    margin-bottom: .3rem;
  }
  .community-content {
    width: 6.9rem;
    margin: 0 auto;
  }
  .community-item {
    position: relative;
    width: 3rem;
    display: inline-block;
    margin-right: .1rem;
  }
  .community-item:nth-child(2n) {
    margin-right: 0;
    float: right;
  }
  .community-item img {
    width: 100%;
    display: block;
    border-radius: .2rem;
  }
  .community-item p {
    font-size: .3rem;
    margin-top: .2rem;
    color: #000;
  }
</style>
