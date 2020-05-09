<template>
  <div>
    <van-sidebar v-model="activeKey" @change="onChange" >
      <van-sidebar-item :title="item.name" v-for="(item, index) in result" :key="index"/>
    </van-sidebar>
  </div>
</template>

<script>
  import { Notify } from 'vant';

  export default {
    name: "CategoryLeft",
    props: {
      result: {
        type: Array
      }
    },
    data() {
      return {
        activeKey: 0
      }
    },
    methods: {
      onChange(index) {
        // Notify({ type: 'primary', message: index });
        this.$emit('getIndex', index)
      },
    },
  }
</script>

<style scoped>

</style>