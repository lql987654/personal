<template>
  <div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'homeIndex'
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  html,
  body {
    width: 100%;
    height: 100%;
    padding-top: .0001rem;
  }
  .wrap {
    width: 7.5rem;
    margin-left: auto;
    margin-right: auto;
  }
  .clx {
    zoom: 1;
  }
  .clx:after {
    clear: both;
    content: ".";
    display: block;
    height: 0;
    visibility: hidden;
    overflow: hidden;
  }
</style>
