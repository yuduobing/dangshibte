<template>
  <div>
  <div class="faces_img">
    <img src="../../assets/img/contact.png" />
  </div>
    <div style="width: 1200px;margin: 0 auto;overflow: hidden;padding-bottom: 60px">

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
       &nbsp;&nbsp;&nbsp;上海砀石环境科技有限公司(以下简称砀石环境)成立于2016年，是一家 集产品 设 计 、 销 售 、 安 装 、 维修和售后服务于 一体的专业化技术公司。 致力于高品质的服务理念， 为客户提供最优性价比的服务。
        砀石环境拥有雄厚的技 术力量，具有很强 的抗风险能力；建立了多品牌合作的商业模式，在项目施工上拥有丰富的现场 经 验、 专业有 素 的施工队伍，在维护保养上拥有高新的作业设备和高 水 准 的 专 业 维 修保养 工程师。
        砀石环境是阿法拉伐、APV、GEA等板式换热器品牌的代理商； 在 板 式 热 交 换 器 的选型、优化、节能、系统升级、清洗保养及 售后服务方面有独 到之处，在重大项目中均受 到 了 用 户 的 一 致 好 评 。
        砀石环境是斯派莎克阀门的战略合作商伙伴， 在 蒸汽阀门、板式换热机组及蒸汽系统的改造上有独到的技术实力和施工实力。
        砀石环境是 大 金 、 东 芝 、开 利 、特 灵 、美 的等 空 调品牌 的合作商和售后服务商。在设备的供应和各大品牌机 组的设备保养和维修上 有丰富的经验，在 配件的供应上有绝 对的优势，并且在 一些维修和改造项 目 上 取 得 了 骄 人 的 业 绩 。
        砀石环境业务立足于华东市场， 并致力于全国各地 市场的开拓，自公 司成立以来已参与 了沪上多项大型工程的维保 和改造工程，并在商业维保、工业水系统和风管清洗作业上有独到的作业能力和训练有素的施工队伍。
        优选一流品牌，为用户提供最优性价比服务及方案是我们的宗旨，诚信经营使我们的理念。精诚所至，金石为开，构建你我美好未来！    </div>
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
