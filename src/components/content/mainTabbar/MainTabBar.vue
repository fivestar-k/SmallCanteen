<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="red">
      <img slot="item-icon" src="../../../assets/img/commonbar/home.svg" alt="">
      <img slot="item-icon-active" src="../../../assets/img/commonbar/home_active.svg" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="red">
      <img slot="item-icon" src="../../../assets/img/commonbar/category.svg" alt="">
      <img slot="item-icon-active" src="../../../assets/img/commonbar/category_active.svg" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/love" activeColor="red">
      <img slot="item-icon" src="../../../assets/img/commonbar/love.png" alt="">
      <img slot="item-icon-active" src="../../../assets/img/commonbar/love_active.png" alt="">
      <div slot="item-text">最爱</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="red">
      <img slot="item-icon" src="../../../assets/img/commonbar/profile.svg" alt="">
      <img slot="item-icon-active" src="../../../assets/img/commonbar/profile_active.svg" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>

  import TabBar from "../../common/tabbar/TabBar";
  import TabBarItem from "../../common/tabbar/TabBarItem";

  export default {
    name: "IndexTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
