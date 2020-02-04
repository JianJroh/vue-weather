<template>
  <div class="container">
    <div class="column1">
      {{ weatherInfo.temperature}}
    </div>
    <div class="column2">
      <!-- col -->
      <div class="row1">°</div>
      <div class="row2 iconfont">
        {{ weatherInfo.weather}}<span>&#xe600;</span>{{ weatherInfo.winddirection}}风
        <span>&#xe670;</span>
      </div>
      <div class="row3">空气湿度&nbsp;{{ weatherInfo.humidity}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeTemperature',
  props: {
    weatherInfo: {
      type:Object,
      default(){
        return {
          temperature: '11',
          weather: '晴',
          winddirection: '东',
          humidity: '66'
        }
      }
    },
  },
  methods: {
    descWindPower(windPower){
      let desc;
      if(windPower > 8){
        desc = '狂风'
      }else if(windPower > 5){
        desc = '强风'
      }else if(windPower > 3){
        desc = '中风'
      }else{
        desc = '弱风'
      }
      return desc;
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container
    display flex
    justify-content: flex-start
    align-items center
    margin-top 5.8rem
    padding-left: 0.36rem;
    height 2.25rem
    color #68a1eb
    .column1
      font-size 2.25rem
    .column2
      box-sizing border-box
      display flex
      flex-direction: column
      height 100%
      padding-left .15rem
      padding-bottom 0.34rem
      .row1
        height .5rem
        flex 1
        font-size 1.2rem
        font-weight bold
      .row2
        padding-bottom .2rem
        text-indent .04rem
        font-size .34rem
        font-weight 600
        opacity .8
        span
          padding 0 .06rem
      .row3
        text-indent .04rem
        // font-weight 100
        opacity 0.6
        
</style>