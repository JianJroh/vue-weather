<template>
  <div>
    <NavigationBar :title="'设置'"></NavigationBar>
    <SetList></SetList>
  </div>
</template>

<script>
import NavigationBar from 'common/NavigationBar'
import SetList from './components/List'
export default {
  name:'City',
  components:{
    NavigationBar,
    SetList,
  }
}
</script>

<style scoped>

</style>