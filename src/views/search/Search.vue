<template>
  <div class="search" v-if="Object.keys(foods).length !== 0">
    <nav-bar class="nav-bar">
      <div slot="left" class="left" @click="leftClick"><</div>
      <div slot="center" class="center">关于{{this.$store.state.searchTitle}}的菜谱</div>
    </nav-bar>
    <scroll class="scroll" ref="scroll">
      <goods-list-item :goods="foods" @homeImgLoad="homeImgLoad"/>
    </scroll>
  </div>
</template>

<script>

  import NavBar from "../../components/content/navbar/NavBar"
  // import SearchGoodsList from "./child/SearchGoodsList";
  import Scroll from "../../components/common/scroll/Scroll";
  import { getSearch } from "../../network/home";
  import GoodsListItem from "../../views/Home/child/GoodsListItem";

  export default {
    name: "Search",
    components: {
      GoodsListItem,
      Scroll,
      NavBar
    },
    data() {
      return {
        foods: []
      }
    },
    mounted() {
      // this.title = this.$store.state.searchTitle
      this.getSearch(this.$store.state.searchTitle, 20)
    },
    computed: {
      // getTitle() {
      //   this.title = this.$store.state.searchTitle
      // }
    },
    methods: {
      getSearch(keyword, num) {
        getSearch(keyword, num, 'b8de49052a358fb86dd912692922cf89').then(res => {
          console.log(res);
          this.foods = []
          this.foods = res.result.result.list
        })
      },

      leftClick() {
        this.$router.back()
      },

      homeImgLoad() {
        this.$refs.scroll.refresh()
      }
    },
  }
</script>

<style scoped>
  .search {
    height: 100vh;
  }

  .scroll {
    height: calc(100% - 50px - 52px);
  }

  .nav-bar {
    background-color: #FF8198;
    color: #ffffff;
  }

  .center {
    letter-spacing: 5px;
  }

  .left {
    font-size: 26px;
    margin-left: 25px;
  }
</style>