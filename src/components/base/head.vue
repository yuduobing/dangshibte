<template>
  <div style="background-color: powderblue;height: 100px;width: 100%;">
    <h1>头部</h1>
    <div class="navigation">
      <div class="nav_main">
        <div class="list" @click="changeBody('home')">首页</div>
        <div class="list" @click="changeBody('zhongyang')">中央空调维修</div>
        <div class="list" @click="changeBody('banshi')">板式换热器维保</div>
        <div class="list" @click="changeBody('duolianji')">多联机机组维保</div>
        <div class="list" @click="changeBody('chanpin')">产品中心</div>
        <div class="list" @click="changeBody('case')">工程案例</div>
        <div class="list" @click="changeBody('news')">新闻资讯</div>
        <div class="list" @click="changeBody('aboutus')">关于我们</div>
        <div class="list" @click="changeBody('contactus')">联系我们</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'head',
  data () {
    return {

    }
  },
  methods: {
    changeBody (v) {
      this.$emit('change', v)
    }
  }
}
</script>

<style scoped lang="less">
.navigation{
  width: 100%;
  height: 45px;
  background-color: #000080;
  color: white;
  .nav_main{
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    .list{
      cursor:pointer;
      text-align: center;

      -webkit-box-flex: 1;
      -webkit-flex: 1;
      -ms-flex: 1;
      flex: 1;

      line-height: 45px;
    }
  }
}
</style>
