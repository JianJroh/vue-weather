import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import HomeIndex from '@/pages/home/Index'
import City from '@/pages/city/City'
import CitySearch from '@/pages/search/Search'
import Set from '@/pages/set/Set'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: HomeIndex,
      // props:{default: true,}
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
