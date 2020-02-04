import store from '@/storage/store.js'
import axios from 'axios'
axios.defaults.baseURL = 'https://restapi.amap.com/v3';

const state = {
  cities:[],
};

const getters = {
  // cities: state => state.cities,
  city: state => state.cities[0],
}

const actions = {
  async getCities({ dispatch, commit }) {
    let cities = store.get('cities');
    const ipInfo = await axios.get('/ip?key=31b990789f61b2d0c7f47c51498ed405');
    // console.log(ipInfo)
    if(ipInfo.data.status === '1'){
      let name = ipInfo.data.city;
      let adcode = ipInfo.data.adcode;
      // 更新定位城市于cities数组首位
      if(!cities || cities[0].adcode != adcode){
        cities = cities || [];
        await dispatch('setCities', [{name,adcode},...cities])
      }else{
        // 正常提交状态
        commit('setCities', cities)
      }
    }
  },
  async setCities({ commit },cities){
    await store.set('cities', cities);
    commit('setCities', cities)
  },
  async addCity({ commit },city){
    await store.add('cities',city);
    commit('newCity',city)
  },
  async deleteCity({ dispatch, commit },cityName){
    let cities = await store.get('cities');
    cities = cities.filter(city => city.name !== cityName);
    await dispatch('setCities', cities)
  },
}

const mutations = {
  setCities: (state, cities) => (state.cities = cities),
  newCity: (state,city) => state.cities.push(city),
  removeCity: (state, cityName) =>
    (state.cities = state.cities.filter(city => city.name !== cityName)),
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}