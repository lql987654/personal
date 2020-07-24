<template>
  <div class="music-play-bg">
    <audio :src="src" ref="au" autoplay loop></audio>
    <!--   顶部信息   -->
    <template v-if="musicDetailStatus">
      <MusicPlayTitle :musicDetail="musicDetail" ></MusicPlayTitle>
    </template>
    <!-- 播放动画部分   -->
    <div class="play-icon" v-show="!lyricShowStatus"></div>
    <div class="music-play-box" @click="showLyricFunc" v-show="!lyricShowStatus">
      <img :src="musicDetail.al.picUrl" v-if="musicDetailStatus">
    </div>
    <!-- 歌词部分 默认隐藏  -->
    <div class="lyric" v-if="flag" v-show="lyricShowStatus">
      <scroll class="lyric-wrapper" ref="lyricList" :data="currentLyric && currentLyric.lines" >
        <div @click="hideLyricFunc">
          <div class="lyric-content">
            <p v-for="(line,index) in currentLyric.lines" ref="lyricLine"
               :class="{'current':currentLineNum===index}"
               class="text">{{line.txt}}</p>
          </div>
        </div>
      </scroll>
    </div>
    <!-- 个人功能部分   -->
    <div class="personal-function-box" v-show="!lyricShowStatus">
      <div :class="likeData.changeLike" @click="getSongLikeStatusFunc('change')"></div>
      <div class="item-comment" @click="showCommentList"></div>
    </div>

    <!-- 评论弹窗   -->
    <template v-if="commentDetailStatus">
      <MusicComment
        :commentsList="commentDetail.commentsList"
        :hotCommentsList="commentDetail.hotCommentsList"
        :commentDetailALL="commentDetail.commentDetailALL"
        @hideFatherFunc="hideCommentList"
        v-show="showCommentListStatus"
      >
      </MusicComment>
    </template>
  </div>
</template>

<script>
  import Scroll from "@/components/scroll/Scroll"
  import MusicPlayTitle from "@/components/music-play-title/MusicPlayTitle"
  import MusicComment from "@/components/music-comment/MusicComment"

  import {
    getSongUrl,
    getSonglylic,
    getSongComment,
    getSongDetail,
    getSongLikeStatus
  } from '@/service'

  import Lyric from 'lyric-parser'
  export default {
    name: "musicIndex",
    components: {
      Scroll,
      MusicPlayTitle,
      MusicComment
    },
    data() {
      return {
        flag: false, //维护组件渲染 防止接口请求成功前组件提前渲染,
        lyricShowStatus: false,
        musicDetail: '', // 播放的音乐详细信息
        musicDetailStatus: false,
        src: '',     // 音乐文件
        currentLyric: null,  // 设置一个歌词维护属性
        currentLineNum: 0,
        lyric: '',
        playingLyric: '',
        playing: true,
        likeData: {
          changeLike: 'item-dislike',
          likeStatus: false
        },
        commentDetailStatus: false,
        showCommentListStatus: false,
        commentDetail: {
          commentsList: [],
          hotCommentsList: [],
          commentDetailALL: {}
        }
      }
    },
    mounted() {
      this.getSongUrlFunc();
      this.getSonglylicFunc();
      this.getSongCommentFunc();
      this.getSongDetailFunc();
      this.getSongLikeStatusFunc();
    },
    methods: {
      getSongUrlFunc() {
        getSongUrl({id: this.$route.params.musicId}).then(res => {
          this.src = res.data[0].url
        })
      },
      getSongDetailFunc() {
        getSongDetail({ids: this.$route.params.musicId}).then(res => {
          this.musicDetail = res.songs[0];
          this.musicDetailStatus = true
        })
      },
      getSongLikeStatusFunc(status) {
        let data = {
          id: this.$route.params.musicId,
        };
        if(status === 'change') {
          data = {
            id: this.$route.params.musicId,
            like: !this.likeData.likeStatus
          }
        }
        getSongLikeStatus(data).then(res => {
          if(res.code === 200) {
            this.likeData.changeLike = 'item-dislike item-like'
            this.likeData.likeStatus = true
          } else {
            this.likeData.changeLike = 'item-dislike'
            this.likeData.likeStatus = false
          }
        })
      },
      getSonglylicFunc() {
        getSonglylic({id: this.$route.params.musicId}).then(res => {
          this.lyric = res.lrc.lyric;

          this.currentLyric = new Lyric(res.lrc.lyric, this.handleLyric);
          this.flag = true;

          if(this.playing) {
            this.currentLyric.play();
          }
        })
      },
      getSongCommentFunc() {
        getSongComment({id: this.$route.params.musicId}).then(res => {
          let comments = res.comments;
          comments.map(item => {
            let date = new Date(item.time)
            let year = date.getFullYear()
            let month = date.getMonth() + 1
            let day = date.getDay() + 1
            item.time = year + '年' + month + '月' + day + '日'
          })

          this.commentDetail.commentsList = comments;
          this.commentDetail.hotCommentsList = res.hotComments;
          this.commentDetail.commentDetailALL = res
          this.commentDetailStatus = true
        })
      },
      handleLyric({lineNum, txt}) {
        this.currentLineNum = lineNum
        if (lineNum > 5) {
          let lineEl = this.$refs.lyricLine[lineNum - 5]
          this.$refs.lyricList.scrollToElement(lineEl, 1000)// 滚动到元素
        } else {
          this.$refs.lyricList.scrollTo(0, 0, 1000)// 滚动到顶部
        }
        this.playingLyric = txt;
      },
      audio: () => {
        this.$nextTick(() => {
          this.$refs.au.play()
        })
      },
      showLyricFunc() {
        this.lyricShowStatus = true
      },
      hideLyricFunc() {
        this.lyricShowStatus = false
      },
      showCommentList() {
        this.showCommentListStatus = true
      },
      hideCommentList() {
        console.log(1)
        this.showCommentListStatus = false
      }
    }
  }
</script>

<style scoped>
  .music-play-bg {
    width: 7.5rem;
    max-width: 7.5rem;
    height: 100%;
    background: #161824;
    overflow: hidden;
  }
  .music-play-box {
    position: absolute;
    top: 45%;
    left: 50%;
    width: 6rem;
    height: 6rem;
    margin-top: -3rem;
    margin-left: -3rem;
    overflow: hidden;
  }
  .music-play-box:before {
    position: absolute;
    top: 0;
    left: 0;
    width: 6rem;
    height: 6rem;
    background: url("../../../../assets/play-music/music-bg.png") center no-repeat;
    background-size: 100%;
    animation: rotate 6s linear infinite;
    z-index: 1;
    content: '';
  }
  @keyframes rotate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .music-play-box:after {
    position: absolute;
    top: -.26rem;
    left: -.26rem;
    width: 6.5rem;
    height: 6.5rem;
    background: url("../../../../assets/play-music/music-bg-light.png") center no-repeat;
    background-size: 100%;
    content: '';
  }
  .music-play-box img {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 4rem;
    height: 4rem;
    margin-left: -2rem;
    margin-top: -2rem;
    border-radius: 50%;
    animation: rotate 6s linear infinite;
  }
  .play-icon {
    position: absolute;
    top: 1rem;
    left: 50%;
    width: 2.88rem;
    height: 3.2rem;
    margin-left: -1.44rem;
    background: url("../../../../assets/play-music/music-play-icon.png") center no-repeat;
    background-size: 100% 3.2rem;
    z-index: 2;
  }
  .lyric {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    margin-top: -3.2rem;
    overflow-x: hidden;
    overflow-y: auto;
    text-align: center;
  }
  .lyric-wrapper {
    width: 100%;
    height: 7rem;
    overflow: hidden;
  }
  .lyric-content {
    height: 100%;
    font-size: .28rem;
    color: #cdcdcd;
    text-align: center;
  }
  .personal-function-box {
    position: absolute;
    left: 50%;
    bottom: 3rem;
    width: 6rem;
    display: flex;
    margin-left: -3rem;
  }
  .personal-function-box div {
    margin: auto;
  }
  .item-dislike {
    width: .32rem;
    height: .32rem;
    background: url("../../../../assets/play-music/heart.png") center no-repeat;
    background-size: 100%;
  }
  .item-dislike.item-like {
    background: url("../../../../assets/play-music/heart-checked.png") center no-repeat;
    background-size: 100%;
  }
  .item-comment {
    width: .32rem;
    height: .32rem;
    background: url("../../../../assets/play-music/comment.png") center no-repeat;
    background-size: 100%;
  }
</style>
