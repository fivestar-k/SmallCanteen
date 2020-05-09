<template>
  <div class="detail" v-if="Object.keys(img).length !==0 ">
    <nav-bar class="nav-bar">
      <div slot="left" class="left" @click="backClick"><</div>
      <div slot="center" class="center">{{title}}</div>
    </nav-bar>
    <scroll class="scroll" ref="scroll">
      <detail-title
              :img="img"
              :tag="tag"/>
      <detail-content :title="title"
                      :content="content"
                      :material="material"/>
      <detail-step
              :title="title"
              :process="process"
              @imgLoad="imgLoad"/>
    </scroll>
  </div>
</template>

<script>
  import { getId } from "../../network/detail";
  import NavBar from "../../components/content/navbar/NavBar";
  import DetailTitle from "./child/DetailTitle";
  import DetailContent from "./child/DetailContent";
  import Scroll from "../../../../surpermall/src/components/common/scroll/Scroll";
  import DetailStep from "./child/DetailStep";


  export default {
    name: "Detail",
    components: {DetailStep, Scroll, DetailContent, DetailTitle, NavBar},
    data() {
      return {
        id: null,
        title: '',
        img: '',
        content: '',
        tag: [],
        material: [],
        process: []
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
          this.content = res.result.result.content
          this.tag = res.result.result.tag.split(",")
          this.material = res.result.result.material
          this.process = res.result.result.process
        })
      },

      backClick() {
        this.$router.back()
      },

      imgLoad() {
        this.$refs.scroll.refresh()
      }
    }
  }
</script>

<style scoped>
  .detail {
    height: 100vh;
    /*width: 100vh;*/
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

  /*.title {*/
  /*  margin-top: -62%;*/
  /*  margin-left: 62%;*/
  /*}*/

  .scroll {
    height: calc(100% - 50px - 52px);
  }

</style>