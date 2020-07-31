<template>
  <div class="search-result-container">
    <PageHeader :headerText="headerText"></PageHeader>
    <template v-if="searchResultStatus">
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

  import PageHeader from "@/components/page-header/PageHeader"

  export default {
    name: "searchResult",
    components: {
      PageHeader
    },
    data() {
      return {
        searchResultStatus: false,
        searchResultList: '',
        headerText: '搜索结果'
      }
    },
    mounted() {
      this.getSearchFunc()
    },
    methods: {
      getSearchFunc() {
        getSearch({keywords: this.$route.params.keyword}).then( res=> {
          this.searchResultList = res.result.songs
          this.searchResultStatus = true
        })
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
