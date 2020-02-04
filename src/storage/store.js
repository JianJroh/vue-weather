function isJson(value) {
  if (typeof value == 'string') {
    try {
      JSON.parse(value);
      return true;
    } catch (e) {
      // console.log(e);
      return false;
    }
  }
  // console.error(value + ' it is not a string!')
  return false;
}

function getTime() {
  const date = new Date();
  let year = date.getFullYear();
  let month = ('00' + date.getMonth() + 1).slice(-2)
  let day = ('00' + date.getDate()).slice(-2)
  let hour = ('00' + date.getHours()).slice(-2)
  let minute = ('00' + date.getMinutes()).slice(-2)
  let second = ('00' + date.getSeconds()).slice(-2)
  return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second
}

const storage = window.localStorage;

const store = {
  set: function (key, value) {
    if (arguments.length < 2) return;
    this.remove('key');
    let type = Object.prototype.toString.call(value).slice(8, -1);
    let json = {
      type,
      data: value
    }
    storage.setItem(key, JSON.stringify(json));
  },
  add: function (key, value) {
    if (arguments.length < 2) return;
    let type = this.getType(key);
    let data = this.get(key);
    let arr = [];
    if (type === 'Array') {
      arr = [...data, value]
    } else if (!!type && !!data) {
      arr = [data, value]
    } else if (!data) {
      arr = [value]
    }
    this.set(key, arr)
  },
  get: function (key) {
    let value = storage.getItem(key);
    if (!isJson(value)) return value;
    let json = JSON.parse(value);
    if (json.expireTime && json.expireTime[1] < +new Date()) {
      this.remove(key);
      return null;
    }
    return json.data || value
  },
  getType: function (key) {
    let value = storage.getItem(key)
    if (!isJson(value)) return;
    return JSON.parse(value).type
  },
  remove: function (key) {
    storage.removeItem(key);
  },
  each: function (fn) {
    for (let i = 0, len = storage.length; i < len; i++) {
      fn(storage.key(i), this.get(storage.key(i)))
    }
  },
  setTime(key, timeHour) {
    timeHour = Number(timeHour);
    let data = this.get(key);
    if (arguments.length < 2 || !timeHour || !data) return;
    let createTime = getTime();
    let expireTime = timeHour + 'h';
    let expireTimeValue = +new Date() + timeHour * 60 * 60 * 1000;
    let json = {
      data,
      createTime,
      expireTime: [expireTime, expireTimeValue]
    }
    this.remove('key');
    storage.setItem(key, JSON.stringify(json));
  },
  clear: function () {
    storage.clear();
  },
  has: function (key) {
    return storage.hasOwnProperty(key);
  },
  length: storage.length,
}

export default store