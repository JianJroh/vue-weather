<template>
  <div class="container">
    <div class="city">{{ city }}</div>
    <div class="left">
      <router-link class="add iconfont" tag="span" to="/city">&#xe604;</router-link>
      <router-link class="setting iconfont" tag="span" to="/set">&#xe60c;</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: {
      type: String,
      default:'广州11'
    },
  }
}
</script>

<style lang="stylus" scoped>
  .container
    display flex
    justify-content space-between
    padding-right .42rem
    padding-left: 0.3rem;
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