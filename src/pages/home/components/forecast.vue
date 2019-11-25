<template>
  <swiper class="container" :options="swiperOption">
    <swiper-slide class="tips">
      <div class="row">短时预报</div>
      <div class="row iconfont">&#xe601;</div>
      <div class="row">无雨</div>
      <div class="row">放心出行</div>
    </swiper-slide>
    <swiper-slide 
    class="item"
    v-for="(item,index) of Array(12).fill(list[0])" 
    :key="index"
    >
      <div class="row">{{item.temp}}</div>
      <div class="row">
        <!-- <img :src=item.iconUrl alt=""> -->
        <img src="~images/t1.png" alt="">
      </div>
      <div class="row">{{item.desc}}</div>
      <div class="row">{{+reportTime.slice(-8,-6)+index+':00'}}</div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper"
import 'swiper/dist/css/swiper.css'

export default {
  name: 'HomeForecast',
  components: {
    swiper,
    swiperSlide
  },
  props: {
    weatherInfo: Object
  },
  watch: {
    weatherInfo: function(newVal,oldVal){
      this.reportTime = newVal.reporttime;
    }
  },
  filters:{
    time2hour(time){
      return time.slice(-8,-6)
    },
  },
  data(){
    return {
      reportTime: '',
      list:[
        {
          temp:'19°',
          iconUrl: '',
          desc: '晴',
          time: '23:00'
        },
      ],
      swiperOption: {
        slidesPerView: 5.5,
        spaceBetween: 0,
        freeMode: true,
        preventClicksPropagation: true,
        freeModeMomentumBounceRatio: .5,
        freeModeMomentumRatio: 0.8
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container
    height 2rem
    padding-left: 0.36rem;
    display flex
    .tips,.item
      box-sizing border-box
      height 100%
      display flex
      flex-wrap wrap
      align-content space-between
    .tips
      width .65rem
      padding .2rem 0
      .row
        width 100%
        text-align center
        font-size .24rem
        &:nth-child(1)
          color #7697bd
        &:nth-child(2)
          color #96c1e7
          font-size .48rem
        &:nth-child(3),&:nth-child(4)
          color #a3b0bb
    .item
      width 1.45rem
      height 100%
      padding .14rem 0
      .row
        width 100%
        text-align center
        font-size .24rem
        &:nth-child(1)
          font-size .3rem
          color #7697bd
        &:nth-child(2)
          height .65rem
          // background url('~images/t1.png') no-repeat center
          // background-size:.65rem;
          img
            height 100%
        &:nth-child(3),&:nth-child(4)
          color #a3b0bb
</style>