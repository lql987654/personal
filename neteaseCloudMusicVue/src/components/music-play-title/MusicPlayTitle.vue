<template>
  <div class="music-play-title">
    <em @click="returnBack"></em>
    <div class="music-info">
      <p>{{musicDetail.name }}</p>
      <p>{{musicDetail.ar[0].name }} - {{musicDetail.al.name }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MusicPlayTitle",
    props: {
      musicDetail:{
        type: Object,
        redirect: true,
        default: () => {},
      }
    },
    data() {
      return {

      }
    },
    methods: {
      returnBack() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
  .music-play-title {
    position: relative;
    width: 7.5rem;
    height: .8rem;
    font-size: 0;
    display: flex;
  }
  .music-play-title em {
    position: absolute;
    width: .8rem;
    height: .8rem;
    display: inline-block;
    background: url("../../assets/play-music/arrow-back.png") center no-repeat;
    background-size: .24rem .3rem;
    transform: rotate(180deg);

  }
  .music-info {
    position: relative;
    color: #fff;
    display: inline-block;
    text-align: center;
    margin: auto;
    z-index: 3;
  }
  .music-info p:first-child {
    font-size: .28rem;
  }
  .music-info p:last-child {
    font-size: .24rem;
  }
</style>
