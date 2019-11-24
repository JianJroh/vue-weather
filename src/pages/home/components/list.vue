<template>
  <div class="container">
    <div class="row" v-for="(item,index) of Array(5)" :key="index">
      <div class="date">
        <span>今天</span>
        <span>11/19</span>
      </div>
      <div class="weather">
        <img src="~images/t2.png" alt="">
        <span>晴</span>
      </div>
      <div class="temp">
        <span>15°</span>
        <span>23°</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeList',
  props: {
    weatherInfo: Object
  },
  data(){
    return {
      list: this.weatherInfo,
      num: undefined,
    }
  },
  watch: {
    weatherInfo: function(newVal,oldVal){
      this.list = newVal
    }
  },
  mounted(){
    // this.list = this.weatherInfo.casts;
    // console.log(this.list)
    console.log(this.weatherInfo)
  }
}
</script>

<style lang="stylus" scoped>
  .container
    padding-top .5rem
    padding-left .56rem
    padding-right .6rem
    background #f2f9ff
    .row
      height .65rem
      padding-bottom .28rem
      display flex
      justify-content space-between
      align-items center
      font-size .32rem
      .date,.temp,.weather
        span
          &:nth-child(1)
            font-weight bold
            opacity .9
          &:nth-child(2)
            color #aeb4bd
            padding-left .2rem
      .weather
        img 
          width .6rem
        span 
          font-size .3rem



</style>