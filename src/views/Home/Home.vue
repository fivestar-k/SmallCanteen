<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <div slot="center">
        <img src="../../assets/img/top/title.jpg" alt="">
      </div>
    </nav-bar>
    <scroll class="scroll"
            ref="scroll"
            :probeType="3">
      <search/>
      <swiper/>
      <class-icon-item/>
      <goods-list/>
    </scroll>
  </div>
</template>

<script>
  import { getClass, getSearch } from "../../network/home";
  import NavBar from "../../components/content/navbar/NavBar"
  import Swiper from "./child/Swiper";
  import Search from "./child/HomeSearch";
  import ClassIconItem from "./child/ClassIconItem";
  import Scroll from "../../components/common/scroll/Scroll";
  import GoodsList from "./child/GoodsList";



  export default {
    name: 'Home',
    components: {
      GoodsList,
      Scroll,
      ClassIconItem,
      Search,
      Swiper,
      NavBar

    },
    data() {
      return {
        saveY: 0
      }
    },
    created() {
      // this.getClass()p
      // this.getSearch()
    },
    deactivated() {
      this.saveY = this.$refs.scroll.scroll.y
    },
    activated() {
      this.$refs.scroll.scroll.scrollTo(0, this.saveY, 500)
    },
    mounted() {
      this.$bus.$on('homeImgLoad', () => {
        this.$refs.scroll.refresh()
      })
    },
    methods: {
      getClass() {
        getClass("b8de49052a358fb86dd912692922cf89").then(res => {
          console.log(res);
        })
      },

      getSearch() {
        getSearch('黄瓜', 10, 'b8de49052a358fb86dd912692922cf89').then(res => {
          console.log(res);
        })
      },

      // homeScroll(position) {
      //   this.saveY = position.y
      // }
    }
  }
</script>

<style>
  #home {
    height: 100vh;
    /*position: relative;*/
  }

  .nav-bar img{
    height: 50px;
  }

  .scroll {
    height: calc(100% - 50px - 50px);
    overflow: hidden;
    /*position: absolute;*/
    /*top: 44px;*/
    /*bottom: 49px;*/
    /*left: 0;*/
    /*right: 0;*/
  }
</style>