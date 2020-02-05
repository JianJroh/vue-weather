<template>
  <div>
    <!-- <HomeHeader :city='cityName'/> -->
    <pull-to 
      :top-load-method="refresh"
      :top-block-height="15"
      :distance-index="3.5"
    >
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
    }
  },
  methods: {
    getWeatherInfo(adcode,extensions='base'){
      axios({
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
        }
      })
    },
    refresh(loaded) {
      setTimeout(() => {
        // this.dataList.reverse();
        loaded("done");
      }, 2000);
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
