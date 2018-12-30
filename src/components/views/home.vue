<template>
  <div class="main">
    <div class="face_img">
      <img :src="img.homeFace" />
    </div>
    <div class="service">
      <div class="up">
        <div class="up_title">砀石环境为您服务</div>
        <span>品质保证，诚信服务，砀石环境为您提供一流的服务</span>
      </div>
      <div class="down">
        <div class="down_1">
          <div class="list">
            <img :src="img.fw1" />
            <span>中央空调维保</span>
          </div>
          <div class="list">
            <img :src="img.fw2" />
            <span>板式换热器维保</span>
          </div>
          <div class="list">
            <img :src="img.fw3" />
            <span>多联机机组维保</span>
          </div>
          <div class="list">
            <img :src="img.fw4" />
            <span>中央空调改造</span>
          </div>
        </div>
        <div class="down_1">
          <div class="list">
            <img :src="img.fw5" />
            <span>中央空调清洗</span>
          </div>
          <div class="list">
            <img :src="img.fw6" />
            <span>中央空调托管</span>
          </div>
          <div class="list">
            <img :src="img.fw7" />
            <span>中央空调安装</span>
          </div>
          <div class="list">
            <img :src="img.fw8" />
            <span>中央空调水处理</span>
          </div>
        </div>
      </div>
    </div>
    <div class="advantage">
      <div class="up">
        <div class="up_title">我们的优势</div>
        <span>专业的销售、设计团队，丰富的施工安装经验，只为提供更专业的服务</span>
      </div>
      <div class="down">
        <div class="list">
          <div class="list_img">
            <img :src="img.advantage_team" />
          </div>
          <div class="list_subject">
            销售团队
          </div>
          <div class="list_detail">
            近千人的销售团队，是大金、约克、美的、格力等品牌中央空调的特约经销商和售后服务单位。
          </div>
        </div>
        <div class="list">
          <div class="list_img">
            <img :src="img.advantage_design" />
          </div>
          <div class="list_subject">
            专业设计
          </div>
          <div class="list_detail">
            拥有工程设计人员、高级设计师、高级工程师等多方面专业人员。
          </div>
        </div>
        <div class="list">
          <div class="list_img">
            <img :src="img.advantage_install" />
          </div>
          <div class="list_subject">
            施工安装
          </div>
          <div class="list_detail">
            国际认证协会“AAA信用等级认证”，连续6年被授予“光荣册”先进单位。
          </div>
        </div>
        <div class="list">
          <div class="list_img">
            <img :src="img.advantage_service" />
          </div>
          <div class="list_subject">
            专业服务
          </div>
          <div class="list_detail">
            近百人服务团队，及时解决售后问题。售后服务2小时响应，48小时解决问题。
          </div>
        </div>
      </div>
    </div>
    <div class="system">
      <div style="width: 1200px;height: 100px;margin: 0 auto;">
        <div class="system_title">完善的体系</div>
        <div class="system_detail">严谨的管理制度，完善的服务流程，一站式体系，让你全程无忧</div>
        <div class="system_process">
          <img :src="img.process" />
        </div>
      </div>
    </div>
    <div class="experience">

    </div>
    <div class="news"></div>
  </div>
</template>

<script>
  import homeFace from '../../assets/img/home_face.png'
  import fw1 from '../../assets/img/fw1.jpg'
  import fw2 from '../../assets/img/fw2.jpg'
  import fw3 from '../../assets/img/fw3.jpg'
  import fw4 from '../../assets/img/fw4.jpg'
  import fw5 from '../../assets/img/fw5.jpg'
  import fw6 from '../../assets/img/fw6.jpg'
  import fw7 from '../../assets/img/fw7.jpg'
  import fw8 from '../../assets/img/fw8.jpg'

  import process from '../../assets/img/process.png'

  import advantage_team from '../../assets/img/advantage_team.png'
  import advantage_design from '../../assets/img/advantage_design.png'
  import advantage_install from '../../assets/img/advantage_install.png'
  import advantage_service from '../../assets/img/advantage_service.png'
  export default {
    name: 'home',
    data () {
      return {
        img: {
          homeFace, fw1, fw2, fw3, fw4, fw5, fw6, fw7, fw8,
          advantage_team, advantage_design, advantage_install, advantage_service, process
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .main{
    font-size: 16px;
    .face_img{
      margin: 0 auto;
      width:1920px;
      height:820px;
      img{
        width:1920px;
        height:820px;
      }
    }
    .service{
      width: 1224px;
      margin: 0 auto;
      text-align: center;
      .up{
        margin-top: 70px;
        span{
          font-size:24px;
          font-weight:500;
          color:rgba(51,51,51,1);
          line-height:35px;
        }
        .up_title{
          font-size:52px;
          font-weight:500;
          color:rgba(51,51,51,1);
          line-height:73px;
        }
      }
      .down{
        margin-top: 50px;
        .down_1{
          margin-top: 25px;
          height: 250px;
          width: 100%;
          .list{
            float: left;
            width: 282px;
            height: 202px;
            margin-left: 12px;
            margin-right: 12px;
            background-color: yellow;
            border-radius: 5px;
            img{
              width: 282px;
              height: 202px;
              border-radius: 5px;
            }
            span{
              font-size:24px;
              font-weight:500;
              color:rgba(51,51,51,1);
              line-height:33px;
            }
          }
        }
      }
    }
    .advantage{
      width: 1224px;
      margin: 0 auto;
      text-align: center;
      .up{
        margin-top: 70px;
        span{
          font-size:24px;
          font-weight:500;
          color:rgba(51,51,51,1);
          line-height:35px;
        }
        .up_title{
          font-size:52px;
          font-weight:500;
          color:rgba(51,51,51,1);
          line-height:73px;
        }
      }
      .down{
        margin-top: 58px;
        height: 329px;
        width: 100%;
        .list{
          width: 282px;
          height: 100%;
          margin-left: 12px;
          margin-right: 12px;
          /*background-color: darkgray;*/
          float: left;
          .list_img{
            width: 150px;
            height: 150px;
            margin: 0 auto;
            img{
              width: 150px;
              height: 150px;
            }
          }
          .list_subject{
            font-size:28px;
            font-weight:600;
            line-height:40px;
          }
          .list_detail{
            font-size:20px;
            font-weight:500;
            color: #666666;
            line-height:28px;
          }
        }
      }
    }
    .system{
      text-align: center;
      width: 100%;
      height: 460px;
      margin-top: 60px;
      background-color: #56ADE6;
      .system_title{
        /*background-color: red;*/
        font-size:52px;
        font-weight:500;
        color:rgba(255,255,255,1);
        line-height:190px;
        height: 140px;
      }
      .system_detail{
        font-size:24px;
        font-weight:500;
        color:rgba(255,255,255,1);
        line-height:33px;
      }
      .system_process{
        margin-top: 60px;
        width: 100%;
        height: 126px;
        img{
          width: 100%;
          height: 126px;
        }
      }
    }
    .experience{

    }
    .news{

    }
  }
</style>
