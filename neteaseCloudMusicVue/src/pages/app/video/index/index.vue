<template>
  <div>
    视频
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

      }
    },
    mounted() {
      this.getAllVideoFunc()
      this.getGroupVideoTagFunc()
      this.getCategoryVideoTagFunc()
      // this.getCategoryVideoFunc()
    },
    methods: {
      getAllVideoFunc() {
        getAllVideo().then( res=> {
          console.log(res)
        })
      },
      getGroupVideoTagFunc() {
        getGroupVideoTag().then( res=> {
          console.log(res)
        })
      },
      getCategoryVideoTagFunc() {
        getCategoryVideoTag().then( res=> {
          console.log(res)
        })
      },
      getCategoryVideoFunc() {
        getCategoryVideo().then( res=> {
          console.log(res)
        })
      }

    }
  }
</script>

<style scoped>

</style>
