<template>
  <div class="container">
    <div class="list-wrap">
      <div class="title">热门城市</div>
      <div class="list">
        <div class="item-wrap" v-for="(item,index) of hotCityList" :key="index">
          <div @click="handleClickCity(item)" class="item" :class="{active:isActiveCity(item)}">{{item}}</div>
        </div>
      </div>
    </div>
    <div class="list-wrap">
      <div class="title">热门景点</div>
      <div class="list">
        <div class="item-wrap" v-for="(item,index) of hotViewList" :key="index">
          <div @click="handleClickCity(item)" class="item" :class="{active:isActiveCity(item)}">{{item}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState,mapActions } from 'vuex'
export default {
  name:'CityList',
  data(){
    return {
      hotCityList:['上海市','北京市','杭州市','南京市','苏州市','深圳市','成都市','重庆市','天津市','武汉市','西安市','广州市'],
      hotViewList:['长城','龙庆峡','松山','龙潭','陶然亭','青龙湖','圣莲山','周口店'],
    }
  },
  computed:{
    ...mapState('city',['cities']), 
  },
  methods:{
    ...mapActions('city',['addCity','deleteCity']),
    isActiveCity(cityName){
      let activeCityArr = this.cities.map(city => city.name);
      return activeCityArr.includes(cityName)
    },
    handleClickCity(cityName){
      if(this.isActiveCity(cityName)){
        this.deleteCity(cityName)
      }else{
        this.addCity({name:cityName});
      }
      // console.log(cityName)
    }
  },
}
</script>

<style lang="stylus" scoped>
  .container
    padding .4rem .32rem 0
    .list-wrap
      padding-bottom .48rem
      .title
        padding-left .08rem
        color #999
      .list 
        padding-top .16rem
        display flex
        flex-wrap wrap
        .item-wrap
          min-width 25%
          display flex
          justify-content center
          .item
            margin-bottom .25rem
            font-weight 500
            box-sizing border-box
            text-align center
            padding .06rem .28rem
            border  1px solid #e5e5e5
            border-radius .2rem
            &.active
              color #fff
              background-color #198ded
              border  1px solid #198ded
              
</style>