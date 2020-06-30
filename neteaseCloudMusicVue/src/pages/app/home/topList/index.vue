<template>
  <div class="top-list">
    排行榜
  </div>
</template>

<script>
  import {
    getTopList,
  } from '@/service'

  export default {
    name: "index",
    data() {
      return {

      }
    },
    mounted() {
      this.getTopListFunc();
    },
    methods: {
      getTopListFunc() {
        getTopList().then( res=> {
          console.log(res)
        })
      }
    }
  }
</script>

<style scoped>

</style>
