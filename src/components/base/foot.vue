<template>
    <div class="boot">
      <div class="list">
        <div class="list_cen">
            <div class="left">
              <div class="list_1">
                <ul>
                  <li class="leader" @click="changeBody('')">关于我们</li>
                  <li @click="changeBody('')">关于我们</li>
                  <li @click="changeBody('')">企业文化</li>
                  <li @click="changeBody('')">联系我们</li>
                </ul>
              </div>
              <div class="list_2">
                <ul>
                  <li class="leader" @click="changeBody('')">服务项目</li>
                  <li @click="changeBody('')">中央空调维保</li>
                  <li @click="changeBody('')">中央空调维保</li>
                  <li @click="changeBody('')">中央空调维保</li>
                  <li @click="changeBody('')">中央空调维保</li>
                  <li @click="changeBody('')">中央空调维保</li>
                </ul>
              </div>
              <div class="list_3">
                <ul>
                  <li class="leader" @click="changeBody('')">产品中心</li>
                  <li @click="changeBody('')">大金中央空调</li>
                  <li @click="changeBody('')">麦克中央空调</li>
                  <li @click="changeBody('')">美的中央空调</li>
                  <li @click="changeBody('')">美的中央空调</li>
                  <li @click="changeBody('')">美的中央空调</li>
                </ul>
              </div>
              <div class="list_4">
                <ul>
                  <li class="leader" @click="changeBody('')">服务支持</li>
                  <li @click="changeBody('')">售前服务</li>
                  <li @click="changeBody('')">施工流程</li>
                  <li @click="changeBody('')">售后服务</li>
                  <li @click="changeBody('')">在线报价</li>
                </ul>
              </div>
            </div>
            <div class="right">
              <div class="erweima">
                <div style="float: right;">
                  <img :src="erweimaImg" />
                  <div style="margin-top: 5px;font-size: 15px;text-align: center">关注砀石微信公众号&nbsp;&nbsp;&nbsp;</div>
                </div>

              </div>
              <div class="contact">
                <div class="leader" style="line-height: 50px;">联系我们</div>
                <div style="margin-top: 10px;line-height: 1.6">
                  全国服务热线：<span style="color: #55abe6;font-size: 25px;">400-123-321</span>
                  <br/>
                  传真：010123123321<br/>
                  邮编：471300<br/>
                  地址：北京市经济开发区果园路1号
                </div>
              </div>
            </div>
        </div>
      </div>
      <div class="beian">
        <div class="beian_cen">
          上海砀石环境科技有限公司 &nbsp;&nbsp;电话: 021-5480 3480 &nbsp;&nbsp; 传真: 021-56977520&nbsp;&nbsp; 版权所有 沪ICP备16047932号
        </div>
      </div>
    </div>
</template>

<script>
import erweima from '../../assets/img/erweima.jpg'
export default {
  name: 'foot',
  data () {
    return {
      erweimaImg: erweima
    }
  }
}
</script>

<style scoped lang="less">
  .boot{
    width: 100%;
    color: white;

  }
  .list{
    height: 300px;
    width: 100%;
    background-color: #2c2f34;
    .list_cen{
      width: 1200px;
      height: 100%;
      margin: 0 auto;

      .left{
        width: 600px;
        height: 100%;
        float: left;

        .list_1{
          float: left;
          width: 150px;
          height: 100%;
        }
        .list_2{
          float: left;
          width: 150px;
          height: 100%;
        }
        .list_3{
          float: left;
          width: 150px;
          height: 100%;
        }
        .list_4{
          float: left;
          width: 150px;
          height: 100%;
        }

      }
      .right{
        width: 600px;
        height: 100%;
        /*background-color:deepskyblue;*/
        float: right;

        .erweima{
          height: 100%;
          width: 220px;
          float: left;
          img{
            text-align: center;
            margin-top: 38px;
            width: 150px;
            height: 150px;
            margin-right: 10px;
          }
        }
        .contact{
          height: 100%;
          width: 350px;
          float: right;
          padding-left: 10px;
        }
      }
      ul{
        list-style: none;
        li{
          line-height: 2.5;
          font-size: 14px;
          cursor:pointer;
          text-align: center;
        }
      }
      .leader{
        font-size: 20px;
        font-weight: bold;
        margin-top:25px;
      }
    }
  }
  .beian{
    font-size: 14px;
    background-color: #272a2f;
    height: 35px;
    color: #7e8283;
    .beian_cen{
      text-align: center;
      line-height: 35px;
      width: 1200px;
      margin: 0 auto;
    }
  }
</style>
