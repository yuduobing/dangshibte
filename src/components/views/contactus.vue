<template>
  <div style="width: 1200px;margin: 0 auto;overflow: hidden">

    <div class="left">
      <div class="list">
        <div class="title">联系我们</div>
        <div @click="changelist(item.index)" v-for="(item,index) in list " :key="index">
          <div class="content">{{item.content}}</div>
        </div>
        <information></information>
      </div>

    </div>

    <div class="right">
      <!--标题-->
      <div class="rhead">
        <div style="float: left; font-size: 25px;margin-top: 15px; color:cornflowerblue ">联系我们</div>
        <div style="float: right;margin-top: 20px;">首页>联系我们></div>
      </div>
      <!--设置宽度为800-->
      <div class="contact">
        <br><br>
        <h3>上海砀石环境科技有限公司</h3>
        <br><br>
        <p>全国服务热线：021-5480 3480</p>
        <br>
        <p>传真：010-123131233</p>
        <br>
        <p> 邮编：200439</p>
        <br>
        <p> 地址：上海市宝山区吉浦路545-551号2398室</p>
        <br>
        <div style="width:100%;height:550px;border:#ccc solid 1px;font-size:12px" id="map"></div>
      </div>
    </div>
  </div>

</template>

<script>
import BMap from 'BMap'
import information from '../base/information'
import img from '../../assets/img/img1.png'

export default {
  name: 'contactus',
  components: {information},
  data () {
    return {

      news: [
    ],
      // 左边导航栏所有科目
      list: [{
        index: 1, content: '联系我们'
      }
      ]
    }
  },
  mounted () {
    // 创建和初始化地图函数：

    this.initMap()
  },

  methods: {
    changelist (e) {
      // 点击左侧导航栏对应的事件
      console.log(e)
    },
    initMap () {
      var map = new BMap.Map('map')
      var point = new BMap.Point(121.49738, 31.322468)
      map.centerAndZoom(point, 15)
      var marker = new BMap.Marker(point) // 创建标注
      map.addOverlay(marker)

      map.enableScrollWheelZoom(true)
    }
  }
}
</script>

<style scoped lang="less">
  @import '../../assets/left.css';

  .contact {
    width: 100%;
  }
</style>
