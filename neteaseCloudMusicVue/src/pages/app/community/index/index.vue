<template>
  <div>
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

      }
    },
    mounted() {
      this.getHotWallListFunc();
      this.getHotWallTopicFunc();
    },
    methods: {
      getHotWallListFunc() {
        getHotWallList().then(res => {
          console.log(res)
        })
      },
      getHotWallTopicFunc() {
        getHotTopicList().then(res => {
          console.log(res)
        })
      }
    }
  }
</script>

<style scoped>

</style>
