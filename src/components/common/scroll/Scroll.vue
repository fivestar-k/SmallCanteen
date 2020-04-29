<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "Scroll",
    data() {
      return {
        scroll: null
      }
    },
    props: {
      //让父组件传过来probeType。
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        //为了这里不写死，让父组件来决定这里的参数具体是多少，所以要添加一个props
        probeType: this.probeType,
        //pullUpLoad为true时，监听下拉加载更多才会生效
        pullUpLoad:this.pullUpLoad
      })

      //监听滑动位置，x,y
      this.scroll.on('scroll', position => {
        this.$emit('scroll', position)
      })
      //监听下拉加载更多时间，并且把该事件发送出去
      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp')
      })



    },
    methods: {
      refresh() {
        this.scroll  &&  this.scroll.refresh()
      }
    }
  }
</script>

<style scoped>

</style>
