<template>
  <div class="music-play-bg">
    <audio :src="src" ref="au" autoplay loop></audio>

    <div class="lyric" v-if="flag">
      <scroll class="lyric-wrapper" ref="lyricList" :data="currentLyric && currentLyric.lines">
        <div>
          <div class="lyric-content">
            <p v-for="(line,index) in currentLyric.lines" ref="lyricLine"
               :class="{'current':currentLineNum===index}"
               class="text">{{line.txt}}</p>
          </div>
        </div>
      </scroll>
    </div>
  </div>
</template>

<script>
  import Scroll from "@/components/scroll/Scroll"
  import {
    getSongUrl,
    getSonglylic,
    getSongComment
  } from '@/service'

  import Lyric from 'lyric-parser'
  export default {
    name: "musicIndex",
    components: {
      Scroll
    },
    data() {
      return {
        flag: false, //维护组件渲染 防止接口请求成功前组件提前渲染
        src: '',     // 音乐文件
        currentLyric: null,  // 设置一个歌词维护属性
        currentLineNum: 0,
        lyric: '',
        playingLyric: '',
        playing: true
      }
    },
    mounted() {
      this.getSongUrlFunc();
      this.getSonglylicFunc();
      this.getSongCommentFunc();
    },
    methods: {
      getSongUrlFunc() {
        getSongUrl({id: this.$route.params.musicId}).then(res => {
          this.src = res.data[0].url
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
          console.log(res)
        })
      },
      handleLyric({lineNum, txt}) {
        this.currentLineNum = lineNum
        if (lineNum > 5) {
          let lineEl = this.$refs.lyricLine[lineNum - 5]
          console.log(this.$refs)
          this.$refs.lyricList.scrollToElement(lineEl, 1000)// 滚动到元素
          console.log(lineEl)
        } else {
          this.$refs.lyricList.scrollTo(0, 0, 1000)// 滚动到顶部
        }
        this.playingLyric = txt;
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
  .music-play-bg {
    height: 100%;
    background: #161824;
  }
  .lyric {
    height: 5rem;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .lyric-content {
    height: 100%;
    font-size: .28rem;
    color: #cdcdcd;
    text-align: center;
  }
</style>
