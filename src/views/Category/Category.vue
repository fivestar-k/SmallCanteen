<template>
  <div class="category">
    <nav-bar class="nav-bar">
      <div slot="center">菜谱分类</div>
    </nav-bar>
    <div class="category-item">
      <CategoryLeft :result="result"
                    class="left"
                    @getIndex="getIndex"></CategoryLeft>
      <CategoryRight class="right" :list="list"></CategoryRight>
    </div>
  </div>
</template>

<script>
  import CategoryLeft from "../../views/Category/child/CategoryLeft";
  import { getCategory } from "../../network/Category";
  import NavBar from "../../components/content/navbar/NavBar"
  import CategoryRight from "../../views/Category/child/CategoryRight";

  export default {
    name: "Category",
    components: {
      CategoryRight,
      NavBar,
      CategoryLeft
    },
    data() {
      return {
        result: [],
        currentIndex: 0,
        list: []
      }
    },
    created() {
      this.getCategory()
    },
    methods: {
      getCategory() {
        getCategory('b8de49052a358fb86dd912692922cf89').then(res => {
          console.log(res);
          this.result = res.result.result
          this.list = []
          this.list = res.result.result[this.currentIndex].list
        })
      },

      getIndex(index) {
        this.currentIndex = index
        this.getCategory()
      }
    }
  }
</script>

<style scoped>
  .category-item {
    display: flex;
  }

  .nav-bar {
    background-color: #FF8198;
    color: #fff;
  }

  .left {
    flex: 1;
  }

  .right {
    flex: 3;
  }
</style>