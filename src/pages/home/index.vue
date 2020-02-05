<template>
  <div>
    <HomeHeader :city="cityName" />
    <div class="swiper-con">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="(item,index) of cities" :key="index">
          <keep-alive>
            <home :city="item"></home>
          </keep-alive>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <div class="first-bullet" :class="{active: swiperIndex == 0}">&#xe616;</div>
    </div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { mapState, mapActions } from "vuex";
import HomeHeader from "./components/Header";
import Home from "./Home";
import PullTo from "vue-pull-to";

export default {
  name: "HomeIndex",
  components: {
    HomeHeader,
    Home,
    PullTo
  },
  data() {
    let that = this;
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          currentClass: "icon"
        },
        on: {
          slideChangeTransitionEnd() {
            that.swiperIndex = this.activeIndex;
          }
        }
      },
      swiperIndex: 0
    };
  },
  computed: {
    ...mapState("city", ["cities", "currentCity"]),
    cityName() {
      try {
        return this.cities[this.swiperIndex].name;
      } catch (err) {}
    }
  },
  methods: {
    ...mapActions("city", ["getCities", "setCurrentCity"]),
    showCurrentCity(city) {
      console.log(city);
      let index = this.cities.findIndex(item => city.adcode === item.adcode);
      if (index === -1) index = 0;
      this.swiperIndex = index;
      this.$refs.mySwiper.swiper.slideTo(index, 0, false);
    },
    refresh(loaded) {
      setTimeout(() => {
        // this.dataList.reverse();
        loaded("done");
      }, 2000);
    }
  },
  mounted() {
    this.getCities();
    this.showCurrentCity(this.currentCity);
  },
  beforeDestroy() {
    this.setCurrentCity(this.cities[this.swiperIndex]);
  }
};
</script>

<style scoped>
/* swiper插件样式深度作用 */
.swiper-con {
  background-image: linear-gradient(135deg, #c0d7f4ad 10%, #fcfffe 100%);
}
.swiper-con >>> .swiper-pagination {
  position: fixed;
  top: 0.84rem;
  bottom: auto;
  width: 100%;
  box-sizing: border-box;
  padding-left: 0.3rem;
  text-align: left;
}
.swiper-con >>> .swiper-pagination-bullet {
  width: 0.08rem;
  height: 0.08rem;
  border-radius: 50%;
  margin: 0 0.08rem;
  background: #aea2a9;
  opacity: 1;
}
.swiper-con >>> .swiper-pagination-bullet-active {
  background-color: #74686d;
}
/* 代替第一个分页器 */
.swiper-con >>> .swiper-pagination-bullet:nth-child(1) {
  background: transparent;
}
.swiper-con .first-bullet {
  font-family: "iconfont" !important;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* content: "\e96c"; */
  position: fixed;
  top: 0.92rem;
  left: 0.28rem;
  color: #aea2a9;
  font-size: 0.18rem;
}
.swiper-con .first-bullet.active {
  color: #74686d;
}
</style>