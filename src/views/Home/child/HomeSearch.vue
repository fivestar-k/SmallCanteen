<template>
  <div>
    <form action="/" class="search">
      <van-search
              v-model="value"
              show-action
              placeholder="请输入搜索关键词"
              @search="onSearch"
              @cancel="onCancel"
              action-text="清空"
      />
    </form>
  </div>
</template>

<script>
  import { Toast } from 'vant'
  import { getSearch } from "../../../network/home";

  export default {
    name: "Search",
    data() {
      return {
        value: '',
      };
    },
    methods: {
      onSearch(val) {
        // this.getSearch(val, 20)
        this.$router.push('/search')
        this.$store.commit('changeSearchTitle', val)
        this.$bus.$emit('Search')
        Toast('已经为您搜索到关于' + val + '的菜谱');
      },
      onCancel() {
        Toast('已为您清空了搜索内容');
      },


    },
  }
</script>

<style scoped>
  .search {
    margin-left: 8px;
    width: 95%;
  }
</style>