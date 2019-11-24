<template>
  <div class="container">
    <div class="city">{{ city }}</div>
    <div class="left">
      <span class="add iconfont">&#xe604;</span>
      <span class="setting iconfont">&#xe60c;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String,
  }
}
</script>

<style lang="stylus" scoped>
  .container
    display flex
    justify-content space-between
    padding-right .42rem
    padding-left: 0.56rem;
    padding-top .2rem
    line-height .86rem
    font-weight bold
    .city
      font-size .48rem
      opacity .65
    .left
      .add
        font-size .48rem
        margin-right .42rem
        opacity .8
      .setting 
        font-size .46rem
</style>