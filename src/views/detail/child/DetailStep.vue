<template>
  <div >
    <div class="title">
      {{title}}的做法
    </div>
    <div class="step-item" v-for="(item, index) in process" :key="index">
      <span class="index">第{{index + 1}}步：</span>
      <span class="pcontent">{{item.pcontent}}</span>
      <img :src="item.pic" alt="" @load="imgLoad">
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailStep",
    props: {
      title: {
        type: String,
        default: ''
      },
      process: {
        type: Array,
        default: []
      }
    },
    data() {
      return {
        counter: 0,
        imagesLength: 0
      }
    },
    methods: {
      imgLoad() {
        this.imagesLength = this.process.length
        if (++this.counter === this.imagesLength) {
          this.$emit('imgLoad')
        }
      }
    }
  }
</script>

<style scoped>
  .step-item {
    padding: 10px;
  }

  .title {
    text-align: center;
  }

  .pcontent {
    text-align: center;
  }

  .index {
    color: red;
  }

  .step-item img {
    display: block;
  }
</style>