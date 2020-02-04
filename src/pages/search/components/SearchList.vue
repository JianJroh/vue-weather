<template>
  <div class="container">
    <div class="list">
      <div v-for="(item, index) in list" 
          :key="index" 
          @click="handleClickTip(item)" 
          class="item border-bottom">
        {{item | formatAddress}}
      </div>
    </div>
  </div>
</template>

<script>
import { keywords2Tips } from 'request/amap'
import { mapState, mapActions } from 'vuex'
export default {
  name:'SearchList',
  props:{
    keywords:{
      type:String,
    }
  },
  data(){
    return {
      list:[]
    }
  },
  computed:{
   ...mapState('city',['cities']), 
  },
  watch:{
    keywords(val){
      this.handleSearch(val)
    },
  },
  filters:{
    formatAddress({name,district} = {}){
      console.log(name,district)
      if(!name || !district) return '';
      let districtArr = district.match(/([^省市区县州]+)[省市区县州]/g).reverse();
      console.log(districtArr);
      if(district.includes(name)){
        return districtArr.join('，');
      }else{
        return [name,...districtArr].join(',')
      }
    }
  },
  methods: {
    ...mapActions('city',['addCity']),
    handleSearch(keywords){
      console.log(keywords);
      keywords2Tips(keywords).then(res=>{
        console.log(res);
        this.list = res;
      }).catch(err=>{

      })
    },
    handleClickTip({name,adcode}={}){
      // name = '广州市'
      console.log(name,adcode);
      let hasCity = this.cities.some(city=>{
        return name === city.name;
      });
      if(!hasCity){
        console.log('add it');
        this.addCity({name,adcode});
        this.$router.push({path:'/city'});
      }

    }
  },
}
</script>

<style lang="stylus" scoped>
  .container
    .list
      
      .item
        padding-left .43rem
        height 1.17rem
        font-size .35rem
        line-height 1.17rem
</style>