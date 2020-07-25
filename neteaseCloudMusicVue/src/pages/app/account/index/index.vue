<template>
  <div class="about-container">
    <h2>这页实在是没接口可用 有接口也没数据 就类似个静态页 就不做了 写点别的</h2>
    <h2>看看把我全民K歌的作品和吉他的视频放到这里 做个合集得了 找时间的</h2>
    <buttonNav></buttonNav>
  </div>
</template>

<script>
  import buttonNav from "@/components/bottom-nav/ButtonNav";

  export default {
    components: {buttonNav},
    name: "accountIndex",
  }
</script>

<style scoped>
  .about-container h2 {
    font-size: .3rem;
    color: #333;
    padding: .3rem 0;
  }
</style>
