<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
  import Home from "./views/Home/Home";
  import MainTabBar from "./components/content/mainTabbar/MainTabBar"


  export default {
    name: 'App',
    components: {
      Home,
      MainTabBar
    }
  }
</script>

<style>
  @import "assets/css/base.css";

</style>
