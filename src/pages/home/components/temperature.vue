<template>
  <div class="container">
    <div class="column1">
      19
    </div>
    <div class="column2">
      <!-- col -->
      <div class="row1">°</div>
      <div class="row2">晴|良 53 ></div>
      <div class="row3">比昨天低1°C</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'temperature'
}
</script>

<style lang="stylus" scoped>
  .container
    display flex
    justify-content: flex-start
    align-items center
    margin-top 6.8rem
    height 2.25rem
    background #639ef73d
    color #68a1eb
    .column1
      font-size 2.2rem
    .column2
      display flex
      flex-direction: column
      height 100%
      padding-left .15rem
      .row1
        height 1.2rem
        font-size 1.2rem
        font-weight bold
      .row2
        text-indent .04rem
        font-size .34rem
      .row3
        text-indent .04rem
        
</style>