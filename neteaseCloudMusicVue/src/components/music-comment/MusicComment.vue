<template>
  <div class="comment-box">
    <div class="comment-box-head">
      <em></em>
    </div>
    <h2>评论区</h2>
      <div class="comment-content" v-for="(item, index) in commentsList" :key="index">
        <div class="comment-item">
          <div class="item-head">
            <img :src="item.user.avatarUrl">
            <div class="personal-info">
              <p>{{ item.user.nickname }}</p>
              <p>{{ item.time }}</p>
            </div>
          </div>
          <p class="item-personal-comment">{{ item.content }}</p>
        </div>
      </div>

  </div>
</template>

<script>
  export default {
    name: "MusicComment",
    props: {
      commentsList: {
        type: Array,
        redirect: true,
        default: () => [],
      },
      hotCommentsList: {
        type: Array,
        redirect: true,
        default: () => [],
      }
    },
    data() {
      return{
        comments: []
      }

    },
    mounted() {

    }
  }
</script>

<style scoped>
  .comment-box {
    position: absolute;
    top: 0;
    left: 0;
    width: 7.5rem;
    height: 100%;
    background: #fff;
    z-index: 10;
  }
  .comment-box-head {

  }
  .comment-box h2 {
    font-size: .3rem;
    color: #161824;
    margin-left: .3rem;
  }
  .comment-item {
    width: 6.9rem;
    padding-top: .2rem;
    margin: 0 auto;
    font-size: 0;
  }
  .item-head img {
    width: .8rem;
    height: .8rem;
    vertical-align: middle;
    border-radius: 50%;
  }
  .personal-info {
    display: inline-block;
    vertical-align: middle;
    margin-left: .3rem;
  }
  .personal-info p:first-child {
    font-size: .28rem;
    padding-top: .04rem;
    margin-bottom: .1rem;
  }
  .personal-info p:last-child {
    font-size: .2rem;
    color: #908e8e;
  }
  .item-personal-comment {
    line-height: .46rem;
    font-size: .26rem;
    margin-left: 1.1rem;
    margin-top: .12rem;
    border-bottom: 1px solid #cdcdcd;
    padding-bottom: .2rem;
  }
</style>
