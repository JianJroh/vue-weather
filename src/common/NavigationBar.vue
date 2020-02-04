<!--
 * @Author       : JianJroh
 * @Date         : 2020-01-29 17:13:54
 * @LastEditors  : JianJroh
 * @LastEditTime : 2020-01-31 14:38:50
 * @Description  : 顶部导航栏通用组件（带返回键和标题描述）
 * @FilePath     : \vue-weather\src\common\NavigationBar.vue
 -->

<template>
  <div class="container">
    <div @click="$router.back(-1)" class="back iconfont">&#xe612;</div>
    <span>{{title}}</span>
  </div>
</template>

<script>
export default {
  props:{
    title:{
      type:String,
    }
  },
  name:'NavigationBar'
}
</script>

<style lang="stylus" scoped>
  .container
    height .86rem
    padding-top .2rem 
    padding-left .28rem
    display flex
    align-items center
    font-size .35rem
    .back
      margin-right .32rem
      margin-top .04rem

</style>