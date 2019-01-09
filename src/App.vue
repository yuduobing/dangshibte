<template>
  <div id="app">

    <Header v-on:change="getBodyName"></Header>

    <!--<router-view/>-->
    <!--网页最小高度600,，最小宽度1200-->
    <div style="min-width: 1200px;min-height: 600px;background-color: #F5F5F5">
      <component :is=" comp "></component>
    </div>

    <Foot></Foot>
  </div>
</template>

<script>
import Header from './components/base/header'
import Foot from './components/base/foot'

import Home from './components/views/home'
import Zhongyang from './components/views/zhongyang'
import Banshi from './components/views/banshi'
import Duolianji from './components/views/duolianji'
import Chanpin from './components/views/chanpin'
import Case from './components/views/case'
import News from './components/views/news'

import Aboutus from './components/views/aboutus'
import Contactus from './components/views/contactus'
import 'babel-polyfill'
//element 样式
import 'element-ui/lib/theme-chalk/index.css'

export default {
  name: 'App',
  components: {Header,
    Foot,
    Home,
    Zhongyang,
    Banshi,
    Duolianji,
    Chanpin,
    Case,
    News,
    Aboutus,
    Contactus
  },
  data () {
    return {
      comp: 'Home'
    }
  },
  methods: {
    getBodyName (v) {
      this.comp = v
    }
  }
}
</script>

<style>
#app {
  /*min-width: 1200px;*/
}
*{
  padding: 0;
  margin: 0;
  font-family: PingFang-SC-Medium,'Avenir', Helvetica, Arial, sans-serif;
}
</style>
