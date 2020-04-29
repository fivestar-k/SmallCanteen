<template>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item class="swipe-item">
        <img src="../../../assets/img/swiper/swiper1.png" alt="">
      </van-swipe-item>
      <van-swipe-item class="swipe-item">
        <img src="../../../assets/img/swiper/swiper2.png" alt="">
      </van-swipe-item>
      <van-swipe-item class="swipe-item">
        <img src="../../../assets/img/swiper/swiper3.png" alt="">
      </van-swipe-item>
      <van-swipe-item class="swipe-item">
        <img src="../../../assets/img/swiper/swiper4.png" alt="">
      </van-swipe-item>
      <van-swipe-item class="swipe-item">
        <img src="../../../assets/img/swiper/swiper5.png" alt="">
      </van-swipe-item>
      <van-swipe-item class="swipe-item">
        <img src="../../../assets/img/swiper/swiper6.png" alt="">
      </van-swipe-item>
    </van-swipe>
</template>

<script>
  export default {
    name: "Swiper"
  }
</script>

<style scoped>

  .my-swipe {
    width: 90%;
    margin-top: 10px;
    margin-left: 20px;
    border-radius: 20px;
  }

  .my-swipe img {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
    width: 100%;
  }


</style>