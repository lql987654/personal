<template>
  <div class="comment-box">
    <div class="comment-box-head">
      <em @click="hideComment"></em>
      <p>评论（{{ commentDetailALL.total }}）</p>
    </div>
    <div class="hot-comments">
      <h2>热门评论</h2>
      <div class="comment-content" v-for="(item, index) in hotCommentsList" :key="index">
        <div class="comment-item">
          <div class="item-head">
            <img :src="item.user.avatarUrl">
            <div class="personal-info">
              <p>{{ item.user.nickname }}</p>
              <p>{{ item.time }}</p>
            </div>
            <div class="like-box">
              <span>
                {{ item.likedCount }}
              </span>
              <em v-if="!item.liked" class="dislike-icon"></em>
              <em v-else class="like-icon"></em>
            </div>
          </div>
          <p class="item-personal-comment">{{ item.content }}</p>
        </div>
      </div>
    </div>
    <div class="all-comments">
      <h2>全部评论</h2>
      <div class="comment-content" v-for="(item, index) in commentsList" :key="index">
        <div class="comment-item">
          <div class="item-head">
            <img :src="item.user.avatarUrl">
            <div class="personal-info">
              <p>{{ item.user.nickname }}</p>
              <p>{{ item.time }}</p>
            </div>
            <div class="like-box">
              <span>
                {{ item.likedCount }}
              </span>
              <em v-if="!item.liked" class="dislike-icon"></em>
              <em v-else class="like-icon"></em>
            </div>
          </div>
          <p class="item-personal-comment">{{ item.content }}</p>
        </div>
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
      },
      commentDetailALL: {
        type: Object,
        redirect: true,
        default: () => {},
      }
    },
    data() {
      return{
        comments: []
      }

    },
    mounted() {

    },
    methods: {
      hideComment() {
        this.$emit("hideFatherFunc", 1)
      }
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
    position: relative;
    width: 7.5rem;
    height: .8rem;
    font-size: 0;
    display: flex;
  }
  .comment-box-head em {
    position: absolute;
    width: .8rem;
    height: .8rem;
    display: inline-block;
    background: url("../../assets/play-music/arrow_back_black.png") center no-repeat;
    background-size: .53rem .53rem;

  }
  .comment-box-head p {
    position: relative;
    color: #333;
    display: inline-block;
    text-align: center;
    margin: auto;
    z-index: 3;
    font-size: .28rem;
  }
  .all-comments,
  .hot-comments {
    margin-top: .3rem;
  }
  .comment-box h2 {
    font-size: .3rem;
    color: #161824;
    margin-left: .3rem;
  }
  .comment-item {
    position: relative;
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
  .like-box {
    position: absolute;
    top: .2rem;
    right: 0;
    color: #333;
    font-size: .24rem;
    display: flex;
  }
  .like-box span {
    position: relative;
    top: .04rem;
    height: .3rem;
    line-height: .3rem;
    display: inline-block;
    vertical-align: middle;
    margin: auto;
  }
  .dislike-icon {
    width: .3rem;
    height: .3rem;
    display: inline-block;
    background: url("../../assets/icon/icon2.png") no-repeat;
    background-position: -3rem 0;
    vertical-align: middle;
    margin-left: .1rem;
  }
</style>
