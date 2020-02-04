<template>
  <div class="container">
    <div class="row" v-for="(item,index) of cities" :key="index">
      <div class="icon">
        <img src="~images/t1.png" alt="">
      </div>
      <div class="city">
        <div class="name">
          <span>{{item.name}}</span>
          <img v-if="index==0" src="~images/location.png" alt="">
        </div>
        <div class="desc">
          <span>{{item.weather}}</span>
          <span>{{item.temperature}}°</span>
        </div>
      </div>
      <div class="ctrl iconfont">
        <div v-if="index==0"></div>
        <span @click="deleteCity(item.name)" v-else>&#xe606;</span>
      </div>
    </div>
    <router-link tag="div" class="btn" to="/city/search">添加城市</router-link>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { getCityInfo } from 'request/amap'
export default {
  name:'CityList',
  data(){
    return {

    }
  },
  computed:{
    ...mapState('city',['cities']),
  },
  methods: {
    ...mapActions('city',['setCities','deleteCity']),
    async updateCityList(){
      // 请求一次改变一次
      let newCities = JSON.parse(JSON.stringify(this.cities));
      this.cities.forEach(async(city,index) => {
        city = await getCityInfo(city).catch(err=>null) || city;
        newCities[index] = city;
        this.setCities([...newCities]);
      });
      // Promise.all()方法 请求多次改变一次
      // const citiesPromiseArr = await this.cities.map(
      //   async (city) => await this.getCityInfo(city.name)
      // )
      // console.log(citiesPromiseArr)
      // Promise.all(citiesPromiseArr).then(newCities=>{
      //   console.log(newCities);
      //   if(newCities.length != 0){
      //     this.setCities(newCities);
      //   }
      // }).catch(err=>{
      //   console.log(err)
      // })
    },
  },
  mounted(){
    this.updateCityList()
  }
}
</script>

<style lang="stylus" scoped>
  .container
    margin-top .4rem
    .row
      height 1.14rem
      padding 0 .43rem 0 .84rem
      margin-bottom .4rem
      display flex
      justify-content space-between
      align-items center
      .icon
        margin-right .32rem
        img 
          width .6rem
      .city
        flex 1
        .name
          display flex
          align-items center
          font-size .32rem
          margin-bottom .2rem
          img 
            width .3rem
            margin-left .16rem
        .desc
          font-size .25rem
          color #7f7f7f
      .ctrl
        font-size .42rem
    .btn
      margin 0 auto
      width 5rem
      height .8rem
      line-height .8rem
      text-align center
      border-radius .64rem
      background-color #198ded
      color #ffffff
      font-size .36rem

</style>