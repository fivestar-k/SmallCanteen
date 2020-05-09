<template>
  <div>
    <div class="content">
      <span>{{title}}</span>
      <div>{{content}}</div>
    </div>
    <div class="Ingredients">
      <span>用料</span>
      <div class="Ingredients-item" v-for="(item, index) in material" :key="index">
        <span>{{item.mname}}</span>
        <span>{{item.type === 0 ? "辅料" : "主料"}}</span>
        <span>{{item.amount}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailContent",
    props: {
      title: {
        type: String,
        default: ''
      },
      content: {
        type: String,
        default: ''
      },
      material: {
        type: Array,
        default: []
      }
    },
  }
</script>

<style scoped>
  .content{
    text-align: center;
    border-bottom: 5px solid #F6F6F6;
  }

  .content span {
    font-size: 24px;
    font-weight: 800;
  }

  .content div {
    font-size: 14px;
    line-height: 17px;
    color: #959595;
    text-indent: 2em;
    margin-top: 10px;
    margin-bottom: 20px;
  }

  .Ingredients {
    text-align: center;
    margin-top: 20px;
    padding-bottom: 20px;
    border-bottom: 5px solid #f6f6f6;
  }

  .Ingredients>span {
    font-size: 24px;
    font-weight: 800;
  }

  .Ingredients-item {
    display: flex;
    justify-content: space-between;

    border-bottom: 2px solid #f6f6f6;

    padding: 15px 10px 10px 10px;
  }

  .Ingredients-item span {
    font-size: 16px;
  }
</style>