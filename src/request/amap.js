/*
 * @Author       : JianJroh
 * @Date         : 2020-02-01 21:06:21
 * @LastEditors  : JianJroh
 * @LastEditTime : 2020-02-03 16:36:55
 * @Description  : 高德api接口调用整合
 * @FilePath     : \vue-weather\src\request\amap.js
 */
import axios from 'axios'
axios.defaults.baseURL = 'https://restapi.amap.com/v3'
const key = '31b990789f61b2d0c7f47c51498ed405'
/**
 * @description: 获取标准城市数据信息对象
 * @param {Object} {name:地址名称，adcode,...} 优先使用adcode获取天气信息
 * @return: {Object} {地址名称(不变),天气描述，温度}
 */
async function getCityInfo({name:address,adcode}={}) {
  // console.log(address);
  let weather, temperature;
  if (!address && !adcode) {
    // console.log(1)
    const ipInfo = await axios.get(`/ip?key=${key}`);
    name = ipInfo.data.city;
    adcode = ipInfo.data.adcode;
  }else if(address && !adcode){
    // console.log(2)
    const cityInfo = await axios.get(`/geocode/geo?key=${key}&address=${address}`)
    // console.log(cityInfo)
    if (cityInfo.data.count !== '0'){
      adcode = cityInfo.data.geocodes[0].adcode;
    }else{
      const res = await axios.get(`/assistant/inputtips?key=${key}&keywords=${address}`)
      adcode = res.data.tips[0].adcode;
    }
    // console.log(adcode)
  }
  const weatherInfo = await axios.get(`/weather/weatherInfo?key=${key}&city=${adcode}`);
  // console.log(weatherInfo)
  weather = weatherInfo.data.lives[0].weather;
  temperature = weatherInfo.data.lives[0].temperature;

  // weather不存在即数据异常
  // if (!weather) return null;
  return {
    name: address,
    adcode,
    weather,
    temperature
  }
}
// getCityInfo('长城').then(res => {
//   console.log('1111111111111111111')
//   console.log(res)
// })
// .catch(err=>{})
/**
 * @description: 基于地址关键字返回其输入提示数组
 * @param {String} 
 * @return: [name,adcode,district,address,...]
 */
async function keywords2Tips(address) {
  const res = await axios.get('/assistant/inputtips',{
    params: {
      key,
      keywords: address,
    }
  })
  if(res.data.status === '1' && res.data.count !== '0'){
    // let city = res.data.tips[0].district.match(/([^省市区]+)市/g);
    let tipsArr = res.data.tips
    // console.log(tipsArr);
    return tipsArr;
  }
  // console.log(res);
}
// keywords2Tips().then(res=>{
//   console.log(res);  
// })
export {
  getCityInfo,
  keywords2Tips,
}