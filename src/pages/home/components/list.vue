<template>
  <div class="container">
    <div class="row" v-for="(item,index) of list" :key="index">
      <div class="date">
        <span>{{ }}</span>
        <span>{{ dayFormat(item.week) }}</span>
      </div>
      <div class="weather">
        <img src="~images/t2.png" alt="">
        <span>{{ item.dayweather}}</span>
      </div>
      <div class="temp">
        <span>{{ item.nighttemp}}°</span>
        <span>{{ item.daytemp}}°</span>
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
      list: [],
      reportWeek: '',
      reportTime: '',
    }
  },
  watch: {
    weatherInfo: function(newVal,oldVal){
      this.list = newVal.casts;
      this.reportWeek = newVal.casts[0].week;
      this.reportTime = newVal.reporttime;
    }
  },
  filters:{
    dateFormat(val){
      return val.slice(5,7)+'/'+val.slice(8)
    },
  },
  methods: {
    dayFormat(week){
      week = Number(week);
      let day = '';
      const dayArr = ['一','二','三','四','五','六','日'];
      let flag = week - this.reportWeek;
      if(flag == 0){
        day = '今天'
      }else if( flag == 1 || flag == -6){
        day = '明天'
      }else{
        day = '周' + dayArr[week - 1];
      }
      return day;
    }
  },
  mounted(){

  }
}
</script>

<style lang="stylus" scoped>
  .container
    padding-top .5rem
    padding-left .3rem
    padding-right .6rem
    .row
      height .65rem
      padding-bottom .28rem
      display flex
      justify-content space-between
      align-items center
      font-size .32rem
      .date,.weather,.temp
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