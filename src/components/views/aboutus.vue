<template>
  <div style="width: 1200px;margin: 0 auto;overflow: hidden">

    <div class="left">
      <div class="list">
        <div class="title">关于我们</div>
        <div @click="changelist(item.index)" v-for="(item,index) in list " :key="index">
          <div class="content">{{item.content}}</div>
        </div>
        <information></information>
      </div>

    </div>

    <div   v-if="show" class="right"  >

      <!--标题-->
      <div class="rhead">
        <div style="float: left; font-size: 25px;margin-top: 15px; color:cornflowerblue ">关于我们</div>
        <div style="float: right;margin-top: 20px;">首页>关于我们</div>
      </div>
      <!--设置宽度为800-->
      <div class="contact2">
        <h2 align="center">
          上海砀石环境科技有限公司</h2><br><br><br>
       &nbsp;&nbsp;&nbsp;上海砀石环境科技有限公司于2016年12月30日成立。法定代表人袁娟,公司经营范围包括：从事环境科技领域内的技术开发、技术转让、技术咨询、技术服务；普通机械设备工程；机电设备及零配件的设计、安装、维修、销售；五金交电、液压设备、自动化设备、仪器仪表、工业冷却系统的设计；水处理工程；合同能源管理等
      </div>
    </div>
    <transition name="bounce">
    <div   v-if="!show" class="right"  >
      <!--标题-->
      <div class="rhead">
        <div style="float: left; font-size: 25px;margin-top: 15px; color:cornflowerblue ">关于我们</div>
        <div style="float: right;margin-top: 20px;">首页>关于我们</div>
      </div>
      <!--设置宽度为800-->
      <div class="contact" >
        <h3>砀石—售后服务流程</h3>
        <br><br><br>
        <img :src="img.s1" class="new-img"/><br>

        <span style="margin-left: 20px;" class="font1">故障报修</span>
        <span class="font1">预约上门</span>

        <span class="font1"> 检修报价</span>
        <span> 专业维修</span>
        <br><br>
        <img :src="img.s2 " class="new-img"/><br>
        <span style="margin-left: 48px;" class="font2">运行试用</span>
        <span  class="font2"> 客户验收</span>
        <span  class="font2"> 填写保单</span>
        <span  class="font2">一年质保
        </span>
      </div>
    </div>
    </transition>
  </div>

</template>

<script>
import s1 from '../../assets/img/s1.png'
import s2 from '../../assets/img/s2.png'
import information from '../base/information'

export default {
  name: 'aboutus',
  components: {information},
  data () {
    return {
      show: true,
      img: {
        s1,
        s2
      },
      news: [],
      // 左边导航栏所有科目
      list: [{
        index: 1, content: '公司介绍'
      },
      {
        index: 2, content: '售后服务'
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
      if (e === 2) {
        this.show = false
      } if (e === 1) {
        this.show = true
      }
    }

  }
}
</script>

<style scoped lang="less">
  @import '../../assets/left.css';
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
  .contact {
    width: 100%;
    padding: 40px;
  }
  .contact2{
  width: 100%;
  padding: 20px;
    padding-bottom: 250px;
}
  .new-img {
    width: 622px;
    height: 83px;

  }
  .new-img:hover{
    transform: scale(1.2);
  }
  .font1{
    margin-right: 91px;
  }
  .font2{
    margin-right: 91px;
  }
</style>
