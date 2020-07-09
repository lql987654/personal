<template>
  <div>
    <audio :src="src" ref="au" autoplay></audio>
  </div>
</template>

<script>
  import {
    getSongUrl
  } from '@/service'
  export default {
    name: "musicIndex",
    data() {
      return {
        src: ''
      }
    },
    mounted() {
      this.getSongUrlFunc();
    },
    methods: {
      getSongUrlFunc() {
        getSongUrl({id: this.$route.params.musicId}).then(res => {
          console.log(res)
          this.src = res.data[0].url
        })
      },
      audio: () => {
        this.$nextTick(() => {
          this.$refs.au.play()
        })
      }
    }
  }
</script>

<style scoped>

</style>
