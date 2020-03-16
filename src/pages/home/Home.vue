<template>
  <div>
    <!-- <HomeHeader :city='cityName'/> -->
    <pull-to 
      :top-load-method="refresh"
      :top-block-height="-30"
      :distance-index="3.5"
      :top-config="topConfig"
      :is-bottom-bounce="false"
    >
      <template v-slot:top-block=loadProps >
        <div class="load-container">
          <div class="load-img" v-show="loadProps.state" 
          :class="{'fast-spin':['trigger','loading'].includes(loadProps.state)}"></div>
          <div class="load-text">{{loadProps.stateText}}</div>
        </div>
      </template>
      <HomeTemperature :weatherInfo='livesWeather'/>
      <HomeForecast :weatherInfo='livesWeather'/>
      <HomeList :weatherInfo='forecastsWeather'/>
    </pull-to>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeTemperature from './components/Temperature'
import HomeForecast from './components/Forecast'
import HomeList from './components/List'
import axios from 'axios'
axios.defaults.baseURL = 'https://restapi.amap.com/v3';
import store from '@/storage/store.js'
import { mapState, mapGetters, mapActions } from 'vuex'
import PullTo from "vue-pull-to";
const TOP_DEFAULT_CONFIG = {
  pullText: '下拉刷新', // 下拉时显示的文字
  triggerText: '释放刷新', // 下拉到触发距离时显示的文字
  loadingText: '正在加载', // 加载中的文字
  doneText: '加载完成', // 加载完成的文字
  failText: '加载失败', // 加载失败的文字
  loadedStayTime: 400, // 加载完后停留的时间ms
  stayDistance: 50, // 触发刷新后停留的距离
  triggerDistance: 70 // 下拉刷新触发的距离
}

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeTemperature,
    HomeForecast,
    HomeList,
    PullTo
  },
  props:{
    city:{
      type: Object,
    }
  },
  data(){
    return {
      livesWeather:{},  
      forecastsWeather:{}, 
      cityName:'',
      topConfig:TOP_DEFAULT_CONFIG
    }
  },
  methods: {
    getWeatherInfo(adcode,extensions='base'){
      return axios({
        url:'/weather/weatherInfo',
        params:{
          key: '31b990789f61b2d0c7f47c51498ed405',
          city:adcode,
          extensions
        },
      }).then(res=>{
        // console.log(res)
        if(res.data.status === '1'){
          if(extensions == 'base'){
            this.livesWeather = res.data.lives[0]
          }else{
            this.forecastsWeather = res.data.forecasts[0]
          }
          return true
        }else{
          return false
        }
      })
    },
    refresh(loaded) {
      console.log('refresh');
      this.getWeatherInfo(this.city.adcode).then(res=>{
        res?loaded("done"):loaded("fail")
      })
      // setTimeout(() => {
      //   // this.dataList.reverse();
      //   loaded("done");
      // }, 2000);
    }
  },
  mounted() {
    // console.log('mounted')
    console.log(this.city.name);
    this.getWeatherInfo(this.city.adcode,'base');
    this.getWeatherInfo(this.city.adcode,'all');
  }
}
</script>

<style lang="stylus">
  .load-container
    display flex
    flex-direction column
    align-items center
    .load-img
      background url('~images/loading.png')
      width .83rem
      height .83rem
      background-size cover
      animation: spin 1.7s linear infinite;
      @keyframes spin
      {
          from {transform: rotate(0deg);}
          to {transform: rotate(360deg);}
      }
      &.fast-spin
        animation-duration 1s
    .load-text
      text-align center
      padding-top .1rem
      color #b5b7bc
</style>
