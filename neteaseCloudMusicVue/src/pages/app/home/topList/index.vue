<template>
  <div class="top-list">
    <div class="top-list-item">
      <h2>官方榜</h2>
      <div class="official-item" v-for="(item, index) in topList">
        <img src="">
      </div>
    </div>
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
        topList: ''
      }
    },
    mounted() {
      this.getTopListFunc();
    },
    methods: {
      getTopListFunc() {
        getTopList().then( res=> {
          console.log(res)
          this.topList = res.list;
        })
      }
    }
  }
</script>

<style scoped>
.top-list-item h2 {
  font-size: .3rem;
  color: #333;
}
</style>
