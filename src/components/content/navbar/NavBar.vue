<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
  .nav-bar {
    display: flex;
    height: 52px;
    flex: 1;
    text-align: center;
    border-bottom: 2px solid #f6f6f6;
    /*line-height: 50px;*/
    /*background-color: #FF8198;*/
    font-size: 18px;
    line-height: 50px;
  }

  .left, .right {
    flex: 1;
  }

  .center {
    flex: 2;
  }
</style>