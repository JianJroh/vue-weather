<template>
  <div class="header">
    <div class="city">中山市</div>
    <div class="left">
      <span class="add iconfont">&#xe604;</span>
      <span class="setting iconfont">&#xe60c;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
  .header
    display flex
    justify-content space-between
    padding-right .42rem
    padding-top .2rem
    line-height .86rem
    .city
      font-size .4rem
    .left
      .add
        font-size .48rem
        margin-right .42rem
      .setting 
        font-size .46rem
        font-weight bold
</style>