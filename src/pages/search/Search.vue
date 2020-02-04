<template>
  <div>
    <search-bar @change="getKeywords"></search-bar>
    <!-- <city-list></city-list> -->
    <!-- <search-list></search-list> -->
    <keep-alive>
      <component :is="currentListComponent" :keywords=keywords></component>
    </keep-alive>
  </div>
</template>

<script>
import SearchBar from "common/SearchBar"
import CityList from './components/CityList'
import SearchList from './components/SearchList'
export default {
  name: "Search",
  components: {
    SearchBar,
    CityList,
    SearchList
  },
  data(){
    return {
      currentListComponent:CityList,
      keywords:'',
    }
  },
  methods: {
    getKeywords(val){
      // nextTick解决组件切换时传值失败
      if(val.length === 0){
        // 解决传最后一个值即""传递失败,避免下次传第一个值时与历史值相同watch触发失败
        this.keywords = val;
        this.$nextTick(()=>{
          this.currentListComponent = CityList;
        })
      }else{
        // 解决第一个值传递失败
        this.currentListComponent = SearchList;
        this.$nextTick(()=>{
          this.keywords = val;
        })
      }
    },
  },
};
</script>

<style>
</style>