<!--
 * @Author       : JianJroh
 * @Date         : 2020-01-30 14:51:13
 * @LastEditors  : JianJroh
 * @LastEditTime : 2020-02-03 15:09:09
 * @Description  : 顶部导航栏通用组件（带返回键和搜索框）
 * @FilePath     : \vue-weather\src\common\SearchBar.vue
 -->

<template>
  <div class="wrap">
    <div class="container">
      <div @click="$router.back(-1)" class="back iconfont">&#xe612;</div>
      <div class="input-wrap">
        <span class="search iconfont">&#xe67a;</span>
        <input @input="sendKeywords" placeholder="搜索城市" type="text">
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  name:'SearchBar',
  methods: {
    sendKeywords(e){
      // console.log(e.target.value)
      this.$emit('change',e.target.value)
    }
  },
}
</script>

<style lang="stylus" scoped>
  .wrap
    padding-top 1.35rem
    .container
      position fixed
      top 0
      width 100%
      height 1.35rem
      display flex
      align-items center
      box-sizing border-box
      padding-left .28rem 
      padding-right .37rem
      .back
        font-size .35rem
        margin-right .28rem
        margin-top .04rem
      .input-wrap
        flex  1
        width 100%
        height .7rem
        // 解决fastclick.js插件需长按或双击才能获焦；定位元素的事件穿透
        position relative
        z-index 9
        touch-action none 
        .search
          position absolute
          top 50%
          left .2rem
          transform translateY(-50%)
          font-size .32rem
          color #9e9e9e
        input 
          box-sizing border-box
          width 100%
          height 100%
          background-color #f7f7f7
          border-radius .2rem
          padding-left .65rem

</style>