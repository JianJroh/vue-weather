<template>
  <div class="container">
    <div class="row">
      <div class="title">预警管理</div>
      <div class="right iconfont">&#xe61c;</div>
    </div>
    <div class="row">
      <div class="title">本地资讯</div>
      <div class="right iconfont">&#xe61c;</div>
    </div>
    <div class="row">
      <div class="title">精选内容推送</div>
      <div class="right iconfont">&#xe61c;</div>
    </div>
  </div>
</template>

<script>
export default {
  name:'SetList',
  
}
</script>

<style lang="stylus" scoped>
  .container
    margin-top .7rem
    .row
      display flex
      justify-content space-between
      align-items center
      padding-left .35rem
      margin-bottom .8rem
      .title 
        font-size .30rem
      .right
        font-size .52rem
        margin-right .34rem
        color #bcbcbc
        font-weight bold
</style>