<template>
  <div>
    <div class="title">
      <div class="top-img">
        <img :src="img" alt="">
      </div>
      <div class="tag">
        <van-tag plain type="primary" v-for="(item, index) in tag">{{item}}</van-tag>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "DetailTitle",
    props: {

      img: {
        type: String,
        default: ''
      },

      tag: {
        type: Array,
        default: []
      }
    }
  }
</script>

<style scoped>
  .title {
    /*vertical-align: text-top;*/
    /*width: 65%;*/
    display: flex;
  }

  .top-img{
    vertical-align: text-top;
    flex: 2;
  }

</style>