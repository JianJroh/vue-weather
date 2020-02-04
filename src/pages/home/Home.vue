<template>
  <div class="home">
    <HomeHeader v-if="city" :city='city.name'/>
    <HomeTemperature :weatherInfo='livesWeather'/>
    <HomeForecast :weatherInfo='livesWeather'/>
    <HomeList :weatherInfo='forecastsWeather'/>
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
      livesWeather:{},  
      forecastsWeather:{}, 
    }
  },
  computed:{        
    ...mapState('city',['cities']),    
    ...mapGetters('city',['city']),
  },    
  watch:{
    city(city,oldCity){
      this.getWeatherInfo(city.adcode,'base');
      this.getWeatherInfo(city.adcode,'all');
    }
  },
  methods: {
    ...mapActions('city',['getCities','addCity','setCities']), 
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
    }
    
  },
  mounted() {
    // console.log('mounted')
    this.getCities();
  }
}
</script>

<style lang="stylus" scoped>
  .home
    background-image: linear-gradient(135deg, #c0d7f4ad 10%, #fcfffe 100%);
</style>