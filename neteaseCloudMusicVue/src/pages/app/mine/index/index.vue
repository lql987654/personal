<template>
  <div class="mine-container" v-if="userStatus">
    <div class="head">
      <img :src="userDetail.profile.backgroundUrl" class="background-bg">
      <div class="user-info">
        <img :src="userDetail.profile.avatarUrl">
        <p>
          <span>{{ userDetail.profile.nickname }}</span>
          <span>LV. {{ userDetail.level }}</span>
        </p>
      </div>
    </div>

    <div class="user-content-box">
      <div class="user-content">
        <h2>创建歌单<span>{{ userDetail.profile.playlistCount -1 }}</span></h2>
        <div class="play-list-content" v-if="playListStatus">
          <div class="play-list-item" v-for="(item, index) in playListDetail.slice(1, 21)" @click="toPlayListPage(item.id)">
            <img :src="item.coverImgUrl">
            <p>
              <span>{{ item.name }}</span>
              <span>{{ item.trackCount }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <buttonNav></buttonNav>
  </div>
</template>

<script>
  import {
    getUserSubcount,
    getUserPlayList,
    getUserDetail
  } from '@/service'

  import buttonNav from "@/components/bottom-nav/ButtonNav";

  export default {
    components: {buttonNav},
    name: "mineIndex",
    data() {
      return {
        userStatus : false,
        userDetail : '',
        playListStatus: false,
        playListDetail : {}
      }
    },
    mounted() {
      this.getUserSubcountFunc();
      this.getUserPlayListFunc();
      this.getUserDetailFunc();
    },
    methods: {
      getUserSubcountFunc() {
        getUserSubcount().then(res => {
          console.log(res)
        })
      },
      getUserPlayListFunc() {
        let data = JSON.parse(localStorage.getItem("user"));
        getUserPlayList({ uid: data.id}).then( res=> {
          this.playListDetail = res.playlist
          this.playListStatus = true
        })
      },
      getUserDetailFunc() {
        let data = JSON.parse(localStorage.getItem("user"));
        getUserDetail({ uid: data.id}).then( res=> {
          this.userDetail = res
          this.userStatus = true
        })
      },
      toPlayListPage(id) {
        this.$router.push({ path: `/playlist/${id}` });
      }
    }
  }
</script>

<style scoped>
  .mine-container {

  }
  .head {
    position: relative;
    width: 7.5rem;
    height: 4rem;
  }
  .head .background-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  .head:before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000000;
    opacity: .4;
    z-index: 2;
    content: '';
  }
  .user-info {
    position: absolute;
    top: .2rem;
    left: .2rem;
    z-index: 3;
  }
  .user-info img {
    width: .8rem;
    height: .8rem;
    display: inline-block;
    border-radius: 50%;
    vertical-align: middle;
  }
  .user-info p {
    height: .8rem;
    display: inline-block;
    vertical-align: middle;
  }
  .user-info p span {
    display: block;
  }
  .user-info p span:first-child {
    font-size: .3rem;
    color: #000;
    font-weight: bold;
  }
  .user-info p span:last-child {
    font-size: .22rem;
    color: #ccc;
  }
  .user-content-box {
    position: relative;
    background: #fff;
    margin-top: -.4rem;
    padding-top: .3rem;
    border-radius: .3rem;
    z-index: 4;
  }
  .user-content {
    width: 6.9rem;
    margin: 0 auto;
  }
  .user-content h2 {
    position: relative;
    font-size: .3rem;
    margin-bottom: .3rem;
    color: #000;
    font-weight: bold;
  }
  .user-content h2 span {
    position: absolute;
    top: -.2rem;
    left: 1.2rem;
    font-size: .24rem;
    color: #ccc;
  }
  .play-list-content {
    width: 100%;
  }
  .play-list-item {
    width: 3.4rem;
    font-size: 0;
    display: inline-block;
    float: left;
    margin-bottom: .3rem;
  }
  .play-list-item:nth-child(2n) {
    float: right;
  }
  .play-list-item img {
    width: 1rem;
    height: 1rem;
    display: inline-block;
    vertical-align: middle;
    border-radius: .1rem;
  }
  .play-list-item p {
    display: inline-block;
    margin-left: .2rem;
    vertical-align: middle;
  }
  .play-list-item span:first-child {
    width: 2rem;
    color: #555;
    font-size: .24rem;
    white-space:normal;
    word-break:keep-all;
    word-wrap: break-word;
    display: block;
  }
  .play-list-item span:last-child {
    color: #ccc;
    font-size: .22rem;
  }
</style>
