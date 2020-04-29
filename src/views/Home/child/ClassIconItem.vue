<template>
  <div class="class-icon">
    <div v-for="(item, index) in imgUrl"
         :key="index"
         class="icon-item"
         @click="imgClick(index)"
         :class="{ active: currentIndex === index}">
      <img :src="item.src" alt="">
      <span>{{item.title}}</span>
    </div>
  </div>
</template>

<script>


  export default {
    name: "ClassIconItem",
    data() {
      return {
        imgUrl: [
          {
            src: require('../../../assets/img/icon/barvecue.jpg'),
            "title": '烧烤'
          },
          {
            src: require('../../../assets/img/icon/cake.png'),
            "title": '蛋糕'
          },
          {
            src: require('../../../assets/img/icon/dessert.png'),
            "title": '甜点'
          },
          {
            src: require('../../../assets/img/icon/hamburger.png'),
            "title": '汉堡'
          },
          {
            src: require('../../../assets/img/icon/hotpot.png'),
            "title": '火锅'
          },
          {
            src: require('../../../assets/img/icon/icecream.png'),
            "title": '冰淇淋'
          },
          {
            src: require('../../../assets/img/icon/noodle.png'),
            "title": '汤面'
          },
          {
            src: require('../../../assets/img/icon/salad.png'),
            "title": '沙拉'
          }
        ],
        currentIndex: -1,
      }
    },
    methods: {
      imgClick(index) {
        this.currentIndex = index
        let key = this.imgUrl[index].title
        this.$store.commit('changeKeyword', key)
        this.$bus.$emit('imgClick')
        // console.log(key);
      },
    }
  }
</script>

<style scoped>
  .class-icon {
    /*margin-left: 15px;*/
    padding-left: 15px;
    padding-bottom: 20px;
    padding-top: 10px;
    margin-top: 10px;
    border-top: 5px solid #f6f6f6;
    border-bottom: 5px solid #f6f6f6;

  }

 .icon-item {
   display: inline-block;
   padding-top: 10px;
   text-align: center;
   width: 16%;
   margin-left: 20px;
   font-size: 14px;

 }

  .icon-item img {
    /*width: 50px;*/
    height: 50px;
  }

  .active {
    color: red;
    font-weight: 800;
  }
</style>