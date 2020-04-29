<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="left" class="left" @click="backClick"><</div>
      <div slot="center" class="center">{{title}}</div>
    </nav-bar>
    <div class="top-img">
      <img :src="img" alt="">
      <span>{{title}}</span>
    </div>
  </div>
</template>

<script>
  import { getId } from "../../network/detail";
  import NavBar from "../../components/content/navbar/NavBar";


  export default {
    name: "Detail",
    components: {NavBar},
    data() {
      return {
        id: null,
        title: '',
        img: ''
      }
    },
    created() {
      this.id = this.$route.params.id
      this.getId(this.id)
    },
    methods: {
      getId(id) {
        getId(id, 'b8de49052a358fb86dd912692922cf89').then(res => {
          console.log(res);
          this.title = res.result.result.name
          this.img = res.result.result.pic
        })
      },

      backClick() {
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
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

  /*.title {*/
  /*  margin-top: -62%;*/
  /*  margin-left: 62%;*/
  /*}*/

  .top-img {
    /*vertical-align: text-top;*/
    /*width: 65%;*/
    display: flex;
  }

  .top-img img {
    vertical-align: text-top;
    flex: 2;
  }

  .top-img span {
    padding-left: 10%;
    flex: 1;
  }
</style>