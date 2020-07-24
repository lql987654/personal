<template>
  <div class="mine-container">
    <h2>这个页面实在是没什么接口可用 留着做别的了</h2>
    <buttonNav></buttonNav>
  </div>
</template>

<script>
  import {
    getUserSubcount,
    getUserPlayList
  } from '@/service'

  import buttonNav from "@/components/bottom-nav/ButtonNav";

  export default {
    components: {buttonNav},
    name: "mineIndex",
    data() {
      return {
        bannerList: '',
      }
    },
    mounted() {
      this.getUserSubcountFunc();
      this.getUserPlayListFunc();
    },
    methods: {
      getUserSubcountFunc() {
        getUserSubcount().then(res => {
          console.log(res)
        })
      },
      getUserPlayListFunc() {
        let data = JSON.parse(localStorage.getItem("user"));
        getUserPlayList({ uid: data.id}).then( res=> {
          console.log(res)
        })
      }
    }
  }
</script>

<style scoped>
  .mine-container {
    font-size: .3rem;
    color: #333;
  }
</style>
