<template>
  <div>
    <NavigationBar :title="'城市管理'"></NavigationBar>
    <CityList></CityList>
  </div>
</template>

<script>
import NavigationBar from 'common/NavigationBar'
import CityList from './components/List'
export default {
  name:'City',
  components:{
    NavigationBar,
    CityList,
  }
}
</script>

<style scoped>

</style>