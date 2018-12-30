<template>
  <div class="main">
    <div class="face_img">
      <!--<img :src="img.homeFace" />-->
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
      <div class="up">
        <div class="up_title">丰富的案例经验</div>
        <span>多行业、多领域的案例解决方案，让您值得信赖</span>
      </div>
      <div class="down">
        <div class="option">
          <div class="option_list" @click="changeImg('yiliao')">医疗机构</div>
          <div class="option_list" @click="changeImg('jiaoyu')">教育培训</div>
          <div class="option_list" @click="changeImg('zhengfu')">政府机关</div>
          <div class="option_list" @click="changeImg('gongchang')">工厂厂房</div>
          <div class="option_list" @click="changeImg('bangongshi')">办公室</div>
          <div class="option_list" @click="changeImg('zhineng')">智能家居</div>
          <div class="option_list" @click="changeImg('jiudian')">酒店餐饮</div>
        </div>
        <div class="img_list">
          <!--<div class="item"><img :src="showImg.experience1" /></div>-->
          <!--<div class="item"><img :src="showImg.experience2" /></div>-->
          <!--<div class="item"><img :src="showImg.experience3" /></div>-->
          <!--<div class="item"><img :src="showImg.experience4" /></div>-->
          <!--<div class="item"><img :src="showImg.experience5" /></div>-->
          <!--<div class="item"><img :src="showImg.experience6" /></div>-->
          <div class="item" v-for="i in showImg"><img :src="i" /></div>
        </div>
      </div>
    </div>
    <div class="news">
      <div class="up">
        <div class="up_title">新闻资讯</div>
      </div>
      <div class="down">
        <div class="news_list">
          <img :src="img.news1" />
          <div style="margin-top:25px;text-align: left;">
            <div class="title">中央空调维修</div>
            <div class="time">2018-10-10</div>
            <div class="detail">
              在卧室里面我们进行壁式的空是是是调就可以了，
              因为挂壁式空调的三ssss生三生三世三是是是世三生三世试试功率大小
            </div>
          </div>
        </div>
        <div class="news_list">
          <img :src="img.news2" />
          <div style="margin-top:25px;text-align: left;">
            <div class="title">中央空调维修</div>
            <div class="time">2018-10-10</div>
            <div class="detail">
              在卧室里面我们进行壁式的空是是是调就可以了，
              因为挂壁式空调的三ssss生三生三世三是是是世三生三世试试功率大小
            </div>
          </div>
        </div>
        <div class="news_list">
          <img :src="img.news3" />
          <div style="margin-top:25px;text-align: left;">
            <div class="title">中央空调维修</div>
            <div class="time">2018-10-10</div>
            <div class="detail">
              在卧室里面我们进行壁式的空是是是调就可以了，
              因为挂壁式空调的三ssss生三生三世三是是是世三生三世试试功率大小
            </div>
          </div>
        </div>
        <div class="news_list">
          <img :src="img.news4" />
          <div style="margin-top:25px;text-align: left;">
            <div class="title">中央空调维修</div>
            <div class="time">2018-10-10</div>
            <div class="detail">
              在卧室里面我们进行壁式的空是是是调就可以了，
              因为挂壁式空调的三ssss生三生三世三是是是世三生三世试试功率大小
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="height: 80px;"></div>
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

  import experience1 from '../../assets/img/experience_1.png'
  import experience2 from '../../assets/img/experience_2.png'
  import experience3 from '../../assets/img/experience_3.png'
  import experience4 from '../../assets/img/experience_4.png'
  import experience5 from '../../assets/img/experience_5.png'
  import experience6 from '../../assets/img/experience_6.png'

  import zhineng1 from '../../assets/img/zn1.jpg'
  import zhineng2 from '../../assets/img/zn2.jpg'
  import zhineng3 from '../../assets/img/zn3.jpg'
  import zhineng4 from '../../assets/img/zn4.jpg'
  import zhineng5 from '../../assets/img/zn5.jpg'
  import zhineng6 from '../../assets/img/zn6.jpg'

  import caseju1 from '../../assets/img/jy1.jpg'
  import caseju2 from '../../assets/img/jy2.jpg'
  import caseju3 from '../../assets/img/jy3.jpg'
  import caseju4 from '../../assets/img/jy4.jpg'
  import caseju5 from '../../assets/img/jy5.jpg'
  import caseju6 from '../../assets/img/jy6.jpg'

  import casecf1 from '../../assets/img/casecf1.jpg'
  import casecf2 from '../../assets/img/casecf2.jpg'
  import casecf3 from '../../assets/img/casecf3.jpg'
  import casecf4 from '../../assets/img/casecf4.jpg'
  import casecf5 from '../../assets/img/casecf5.jpg'
  import casecf6 from '../../assets/img/casecf6.jpg'

  import news1 from '../../assets/img/new_1.png'
  import news2 from '../../assets/img/new_2.png'
  import news3 from '../../assets/img/new_3.png'
  import news4 from '../../assets/img/new_4.png'
  export default {
    name: 'home',
    data () {
      return {
        img: {
          homeFace, fw1, fw2, fw3, fw4, fw5, fw6, fw7, fw8,
          advantage_team, advantage_design, advantage_install, advantage_service, process,
          news1, news2, news3, news4
        },
        yiliaoImg:{experience1, experience2, experience3, experience4, experience5, experience6},
        jiaoyuImg:{caseju1,caseju2,caseju3,caseju4,caseju5,caseju6,},
        zhengfuImg:{experience1, experience2, experience3, experience4, experience5, experience6},
        gongchangImg:{casecf1,casecf2,casecf3,casecf4,casecf5,casecf6},
        bangongshiImg:{experience1, experience2, experience3, experience4, experience5, experience6},
        zhinengImg:{zhineng1,zhineng2,zhineng3,zhineng4,zhineng5,zhineng6},
        jiudianImg:{experience1, experience2, experience3, experience4, experience5, experience6},
        showImg:{experience1, experience2, experience3, experience4, experience5, experience6}
      }
    },
    methods: {
      changeImg (value) {
        if( value === 'yiliao'){
          this.showImg = this.yiliaoImg
        }
        if(value === 'jiaoyu'){
          this.showImg = this.jiaoyuImg
        }
        if(value === 'zhengfu'){
          this.showImg = this.zhengfuImg
        }
        if(value === 'gongchang'){
          this.showImg = this.gongchangImg
        }
        if(value === 'bangongshi'){
          this.showImg = this.bangongshiImg
        }
        if(value === 'zhineng'){
          this.showImg = this.zhinengImg
        }if(value === 'jiudian'){
          this.showImg = this.jiudianImg
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .main{
    font-size: 16px;
    .face_img{
      background-repeat: no-repeat;
      overflow: hidden;
      display: block;
      outline: none;
      position: relative;
      background-size: 100% 100%;
      background-image: url("../../assets/img/home_face.png");
      /*margin: 0 auto;*/
      width:100%;
      min-width: 1200px;
      height:820px;
      max-height: 820px;
      /*img{*/
        /*width:100%;*/
        /*height:820px;*/
      /*}*/
    }
    .service{
      width: 1200px;
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
            margin-left: 9px;
            margin-right: 9px;
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
      width: 1200px;
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
          margin-left: 9px;
          margin-right: 9px;
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
      width: 1200px;
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
        .option{
          margin-top: 40px;
          width: 100%;
          height: 70px;
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
          .option_list{
            -webkit-box-flex: 1;
            -webkit-flex: 1;
            -ms-flex: 1;
            flex: 1;
            text-align: center;
            font-size:26px;
            font-weight:500;
            color:rgba(51,51,51,1);
            line-height:37px;
            line-height: 70px;
          }
          .option_list:hover{
            border-bottom: 5px solid #003971;
            cursor:pointer;
          }
          .option_list:visited{
            color: red;
          }
        }
        .img_list{
          width: 100%;
          height: 570px;
          .item{
            float: left;
            width: 360px;
            height: 237px;
            margin-left: 20px;
            margin-right: 20px;
            margin-top: 30px;
            img{
              width: 360px;
              height: 237px;
              border-radius: 8px;
            }
          }
        }
      }


    }
    .news{
      width: 1200px;
      margin: 0 auto;
      text-align: center;
      .up{
        margin-top: 70px;
        .up_title{
          font-size:52px;
          font-weight:500;
          color:rgba(51,51,51,1);
          line-height:73px;
        }
      }
      .down{
        width: 100%;
        height: 370px;
        margin-top: 49px;
        .news_list{
          width:276px;
          height: 370px;
          float: left;
          margin-left: 12px;
          margin-right: 12px;
          /*background-color: blanchedalmond;*/
          img{
            width:276px;
            height: 180px;
            border-radius: 8px;
          }
        }
        .title{
          font-size:22px;
          font-weight:800;
          color:rgba(51,51,51,1);
          line-height:30px;
        }
        .time{
          font-size:16px;
          line-height:30px;
          font-weight:500;
          color:rgba(51,51,51,1);
        }
        .detail{
          font-size:16px;
          font-weight:500;
          color:rgba(102,102,102,1);
          line-height:25px;
          max-height: 75px;
          width: 276px;

          text-align:justify;
          letter-spacing: 0;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          word-break: break-all;
        }
      }
    }
  }
</style>
