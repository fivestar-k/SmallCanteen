<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="center" class="text">{{title}}</div>
    </nav-bar>
    <goods-list-item :goods="foods"/>
  </div>
</template>

<script>
  import GoodsListItem from "./GoodsListItem";
  import { getSearch } from "../../../network/home";
  import NavBar from "../../../components/content/navbar/NavBar";

  export default {
    name: "GoodsList",
    components: {
      NavBar,
      GoodsListItem
    },
    data() {
      return {
        foods: [],
        title: '特色推荐'
      }
    },
    mounted() {
      this.getSearch()

      this.$bus.$on('imgClick', () => {
        this.title = this.keyWord
        this.getClassIcon(this.keyWord)
      })
    },
    computed: {
      keyWord() {
        return this.$store.state.keyword
      }
    },
    methods: {
      getSearch() {
        getSearch(this.keyWord, 20, 'b8de49052a358fb86dd912692922cf89').then(res => {
          // console.log(res);
          this.foods = []
          this.foods = res.result.result.list
        })
      },
      getClassIcon(key) {
        getSearch(key, 20, 'b8de49052a358fb86dd912692922cf89').then(res => {
          this.foods = []
          this.foods = res.result.result.list
        })
      }
    },
  }
</script>

<style scoped>
  .text {
    line-height: 50px;
    text-indent: 10px;
    letter-spacing: 5px;
    color: #ffffff;
  }

  .nav-bar {
    background-color: #ff8198;
  }
</style>