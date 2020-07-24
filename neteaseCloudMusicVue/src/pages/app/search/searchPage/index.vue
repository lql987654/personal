<template>
  <div class="search-container">
    <div class="search-box">
      <input type="text" :placeholder="defaultValue" @click="showSuggestBox" @keyup.enter="toSearchPage(searchContent, 1)" v-model="searchContent">
      <span @click="toHomePage">取消</span>
    </div>

    <div class="hot-search-box" v-if="hotListStatus">
      <h2>热搜榜</h2>
      <div class="hot-list-content">
        <div class="hot-list-item" v-for="( item, index ) in hotList" :key="index" @click="toSearchPage(item.searchWord)">
          <template v-if="index < 5">
            <i class="top-search">{{ index + 1 }}</i>
          </template>
          <template v-else>
            <i>{{ index + 1 }}</i>
          </template>
          <span>{{ item.searchWord }}</span>
          <p>{{ item.content.substring(0, 12) }}...</p>
          <template v-if="item.iconType == 5">
            <img :src="item.iconUrl" v-if="item.iconUrl" class="icon-up">
          </template>
          <template v-else-if="item.iconType == 1">
            <img :src="item.iconUrl" v-if="item.iconUrl">
          </template>
          <template v-else>
            <img :src="item.iconUrl" v-if="item.iconUrl">
          </template>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import {
    getSearchDefault,
    getSearchHot,
    getSearchHotDetail,
  } from '@/service'

  export default {
    name: "searchPage",
    data() {
      return{
        searchContent: '',
        defaultValue: '',
        hotListStatus: false,
        hotList: {},
      }
    },
    mounted() {
      this.getSearchDefaultFunc()
      this.getSearchHotFunc()
      this.getSearchHotDetailFunc()
    },
    methods: {
      getSearchDefaultFunc() {
        getSearchDefault().then( res => {
          this.searchContent = res.data.realkeyword
          this.defaultValue = res.data.showKeyword
        })
      },
      getSearchHotFunc() {
        getSearchHot().then( res => {
          // console.log(res)
        })
      },
      getSearchHotDetailFunc() {
        getSearchHotDetail().then( res => {
          console.log(res)
          this.hotList = res.data
          this.hotListStatus = true
        })
      },
      toSearchPage(keyword, type) {
        if(type == 1) {
          this.$router.push({ path: `/search/${this.searchContent}` });
        } else {
          this.$router.push({ path: `/search/${keyword}` });
        }
      },
      toHomePage() {
        this.$router.go(-1)
      },
      showSuggestBox() {

      }
    }
  }
</script>

<style scoped>
  .search-box {
    width: 6.9rem;
    margin: 0 auto;
    font-size: 0;
    padding-top: .2rem;
  }
  .search-box input {
    width: 5.6rem;
    height: .6rem;
    line-height: .6rem;
    padding-left: .2rem;
    margin-left: .1rem;
    margin-right: .2rem;
    border-radius: .3rem;
    border: 1px solid #ccc;
    outline: none;
  }
  .search-box span {
    color: #333;
    font-size: .3rem;
    display: inline-block;
  }
  .hot-search-box {
    width: 6.9rem;
    margin: .4rem auto 0;
    font-size: 0;
  }
  .hot-search-box h2 {
    color: #333;
    font-size: .34rem;
    margin-bottom: .2rem;
  }
  .hot-list-content {
    position: relative;
  }
  .hot-list-item {
    position: relative;
    width: 3.45rem;
    font-size: 0;
    display: inline-block;
    margin-bottom: .2rem;
  }
  .hot-list-item i {
    font-style: normal;
    font-size: .3rem;
    vertical-align: middle;
  }
  .hot-list-item i.top-search {
    color: red;
    font-weight: bold;
  }
  .hot-list-item span {
    font-size: .32rem;
    font-weight: bold;
    margin-left: .2rem;
    vertical-align: middle;
  }
  .hot-list-item p {
    color: #ccc;
    font-size: .24rem;
    margin-top: .12rem;
  }
  .hot-list-item img {
    position: absolute;
    top: 0;
    right: .2rem;
    width: .81rem;
    height: .42rem;
  }
  .hot-list-item img.icon-up {
    width: .36rem;
    height: .42rem;
  }
</style>
