<template>
  <div class="button-nav" id="buttonNav">
    <div class="button-bav-item" @click="toRouterContainer(0)">
      <img>
      <p>发现</p>
    </div>
    <div class="button-bav-item" @click="toRouterContainer(1)">
      <img>
      <p>视频</p>
    </div>
    <div class="button-bav-item" @click="toRouterContainer(2)">
      <img>
      <p>我的</p>
    </div>
    <div class="button-bav-item" @click="toRouterContainer(3)">
      <img>
      <p>云村</p>
    </div>
    <div class="button-bav-item" @click="toRouterContainer(4)">
      <img>
      <p>账号</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "buttonNav",
    methods: {
      toRouterContainer: function (index) {
        switch (index) {
          case 0 :
            this.$router.push({ path: '/' });
            break;
          case 1 :
            this.$router.push({ path: '/video/index' });
            break;
          case 2 :
            this.$router.push({ path: '/mine/index' });
            break;
          case 3 :
            this.$router.push({ path: '/community/index' });
            break;
          case 4 :
            this.$router.push({ path: '/account/index' });
            break;
          default:
            console.log('无传值')
        }
      }
    }
  }
</script>

<style scoped>
  .button-nav {
    position: fixed;
    left: 50%;
    bottom: 0;
    width: 7.5rem;
    height: 1rem;
    margin-left: -3.75rem;
    background: #fff;
    border-top: 1px solid #cdcdcd;
    display: flex;
    z-index: 9;
  }

  .button-nav .button-bav-item {
    margin: auto;
    font-size: .24rem;
    text-align: center;
  }
</style>
