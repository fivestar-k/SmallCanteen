<template>
  <div class="goods-list-item">
<!--    <nav-bar/>-->
    <div v-for="(item, index) in goods" class="item" :key="index" @click="detailClick(index)">
      <img :src="item.pic" alt="">
      <span>{{item.name}}</span>
      <div class="content">{{item.content}}</div>
      <i>{{item.cookingtime}}</i>
      <i>{{item.peoplenum}}餐</i>
      <p>适宜人群：{{item.tag}}</p>
    </div>
  </div>
</template>

<script>
  import NavBar from "../../../components/content/navbar/NavBar";
  export default {
    name: "GoodsListItem",
    components: {NavBar},
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      detailClick(index) {
        this.$router.push('detail/' + this.goods[index].id)
      }
    }
  }
</script>

<style scoped>
  .goods-list-item {
    /*display: flex;*/
    /* 根据宽度来决定一行里到底显示几个元素*/
    flex-wrap: wrap;
    /* 均等分 只均等分两个元素中间的距离 */
    justify-content: space-around;
    /*padding-left: 6px;*/
    /*margin-left: 6px;*/
    /*margin-top: 10px;*/
    background-color: #f6f6f6;
  }

  .item {
    /*flex: 1;*/
    /*border: 1px solid #f6f6f6;*/
    display: inline-block;
    width: 40%;
    margin-left: 7%;
    margin-top: 10px;
    border-radius: 20px;
    background-color: #ffffff;
    overflow: hidden;
  }

  .item span {
    display: block;
    text-align: center;
    color: #000;
    font-weight: 1000;
  }

  
  .content {
    /*height: 35px;*/
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:3;
    font-size: 12px;
    color: #959595;
    padding: 0 3px;
    margin-top: 10px;
    text-indent: 2em;
    letter-spacing: 1.5px;
  }

  .item img {
    /*width: 100px;*/
    /*height: 100px;*/
    /*padding-top: 10px;*/
    width: 100%;
    border-radius: 20px;
    /*height: 250px;*/
  }

  .item i {
    display: inline-block;
    /*width: 50px;*/
    /*height: 20px;*/
    font-size: 12px;
    color: red;
    padding: 5px;
    border-radius: 10px;
    background-color: #FEF2F2;
    margin-left: 5px;
    margin-top: 10px;
  }

  .item p {
    font-size: 12px;
    margin: 10px;
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:3;
  }
</style>