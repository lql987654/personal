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
  import store from "@/store/index"
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
        let userId = this.$store.state.publicStatus.user;
        console.log(userId)
        getUserPlayList(userId).then( res=> {
          console.log(res)
        })
      }
    }
  }
</script>

<style scoped>

</style>
