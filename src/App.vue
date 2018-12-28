<template>
  <div id="app">

    <Head v-on:change="getBodyName"></Head>

    <!--<router-view/>-->
    <!--网页最小高度600,，最小宽度1200-->
    <div style="min-width: 1200px;min-height: 600px;">
      <component :is=" comp "></component>
    </div>

    <Foot></Foot>
  </div>
</template>

<script>
import Head from './components/base/head'
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

export default {
  name: 'App',
  components: {Head,
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
*{
  padding: 0;
  margin: 0;
}
</style>
