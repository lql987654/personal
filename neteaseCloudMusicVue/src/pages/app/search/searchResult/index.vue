<template>
  <div class="search-result-container">

    <template v-if="searchResultStatus">
      <h2><em @click="returnBack"></em>搜索结果</h2>
      <div class="result-music-content">
        <div class="result-music-item" v-for="(item, index) in searchResultList" :key="index" @click="toPlayMusic(item.id)">
          <h3>{{ item.name }}</h3>
          <h4>{{ item.artists[0].name }} - {{item.album.name}}</h4>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
  import {
    getSearch,
  } from '@/service'
  export default {
    name: "searchResult",
    data() {
      return {
        searchResultStatus: false,
        searchResultList: ''
      }
    },
    mounted() {
      this.getSearchFunc()
    },
    methods: {
      getSearchFunc() {
        getSearch({keywords: this.$route.params.keyword}).then( res=> {
          console.log(res)
          this.searchResultList = res.result.songs
          this.searchResultStatus = true
        })
      },
      returnBack() {
        this.$router.go(-1)
      },
      toPlayMusic(id) {
        this.$router.push({ path: `/music/index/${id}` });
      }
    }
  }
</script>

<style scoped>
  .search-result-container {
    width: 6.9rem;
    margin: 0 auto;
  }
  .search-result-container h2 {
    position: relative;
    height: .8rem;
    line-height: .8rem;
    font-size: .32rem;
    color: #000;
    margin-bottom: .2rem;
    text-align: center;
  }
  .search-result-container h2 em {
    position: absolute;
    top: 0;
    left: -.2rem;
    width: .8rem;
    height: .8rem;
    display: inline-block;
    background: url("../../../../assets/play-music/arrow_back_black.png") center no-repeat;
    background-size: .4rem .4rem;
  }
  .result-music-item {
    margin-bottom: .2rem;
  }
  .result-music-item h3 {
    font-size: .3rem;
    color: #333;
    margin-bottom: .12rem;
  }
  .result-music-item h4 {
    color: #ccc;
    font-size: .22rem;
  }
</style>
