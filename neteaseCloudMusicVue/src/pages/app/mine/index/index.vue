<template>
  <div>
    我的
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

</style>
