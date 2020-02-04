import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import CitySearch from '@/pages/search/Search'
import Set from '@/pages/set/Set'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/city',
      name: 'City',
      component: City
    }, {
      path: '/city/search',
      name: 'CitySearch',
      component: CitySearch
    }, {
      path: '/set',
      name: 'Set',
      component: Set
    },
  ]
})
