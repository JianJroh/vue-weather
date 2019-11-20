<template>
  <div>
    <HomeHeader/>
    <Temperature/>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import Temperature from './components/Temperature'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    Temperature
  },
  methods: {
    getCity(){
      axios.get('https://restapi.amap.com/v3/ip', {
        params: {
          key: '31b990789f61b2d0c7f47c51498ed405',
        }
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log('error')
        console.log(error);
      });
    }
  },
  mounted() {
    // this.getCity();
  }
}
</script>