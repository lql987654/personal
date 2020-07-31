<template>
  <div class="page-header">
    <h2><em @click="returnBack"></em>{{ headerText }}</h2>
  </div>
</template>

<script>
  export default {
    name: "PageHeader",
    props: {
      headerText:{
        type: String,
        redirect: true,
        default: () => '',
      }
    },
    methods: {
      returnBack() {
        this.$router.go(-1)
      },
    }
  }

</script>

<style scoped>
  .page-header h2 {
    position: relative;
    height: .8rem;
    line-height: .8rem;
    font-size: .32rem;
    color: #000;
    margin-bottom: .2rem;
    text-align: center;
  }

  .page-header h2 em {
    position: absolute;
    top: 0;
    left: -.2rem;
    width: .8rem;
    height: .8rem;
    display: inline-block;
    background: url("../../assets/play-music/arrow_back_black.png") center no-repeat;
    background-size: .4rem .4rem;
  }
</style>
