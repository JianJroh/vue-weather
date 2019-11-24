<template>
  <div>
    <HomeHeader :city='city'/>
    <HomeTemperature :weatherInfo='livesWeather'/>
    <HomeForecast/>
    <HomeList :weatherInfo='forecastsWeather'/>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeTemperature from './components/Temperature'
import HomeForecast from './components/Forecast'
import HomeList from './components/List'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeTemperature,
    HomeForecast,
    HomeList
  },
  data(){
    return {
      city: '',
      livesWeather:{},
      forecastsWeather:{},
    }
  },
  methods: {
    async getCityWeather(){
      const res = await axios.get('https://restapi.amap.com/v3/ip', {
        params: {
          key: '31b990789f61b2d0c7f47c51498ed405',
        }
      });
      if(res.data.status == 1){
        this.city = res.data.city;
        this.getWeather(res.data.adcode);
        console.log(this.city);
      }
    },
    async getWeather(city_adcode){
      const res1 = await axios.get('https://restapi.amap.com/v3/weather/weatherInfo', {
        params: {
          key: '31b990789f61b2d0c7f47c51498ed405',
          city:city_adcode,
          extensions: 'base',
        }
      });
      if(res1.data.status == 1){
        this.livesWeather = res1.data.lives[0];
        console.log(res1.data.lives[0])
      }
      const res2 = await axios.get('https://restapi.amap.com/v3/weather/weatherInfo', {
        params: {
          key: '31b990789f61b2d0c7f47c51498ed405',
          city:city_adcode,
          extensions: 'all',
        }
      });
      if(res2.data.status == 1){
        this.forecastsWeather = res2.data.forecasts[0];
        console.log(res2.data.forecasts[0])
      }
    },
    
    
  },
  mounted() {
    this.getCityWeather();
  }
}
</script>

<style lang="stylus">
  body
    background #639ef73d
</style>