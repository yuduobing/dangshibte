<template>
  <div style="width: 100%;">
    <div class="head">
      <div class="logo">
        <img :src="img.logo" alt="欢迎访问砀石官网">
      </div>
      <div class="head_right">
        <div class="phone">
          <div style="width: 40px;height: 40px;float: left;margin-top: 5px;">
            <img :src="img.phone">
          </div>
          <div style="height: 50px;float: right">
            <div class="">
              <span class="phone_num">123-0126948</span><br/>
              <span style="font-size:14px;color:rgba(51,51,51,1);font-weight:500;
  color:rgba(51,51,51,1);">全国服务热线</span>
            </div>
          </div>
        </div>
        <div class="seach">
          <!--<input type="text" placeholder="中央空调维保"/>-->
          <Input placeholder="请输入内容...">
            <i slot="suffix" class="el-input__icon el-icon-search"></i>
          </Input>
        </div>
      </div>
    </div>
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
  import logo from '../../assets/img/logo.png'
  import phone from '../../assets/img/phone.png'


  import { Input } from  'element-ui'
  export default {
    name: 'head',
    components: { Input },
    data () {
      return {
        img: {
          logo, phone
        }
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
    min-width: 1200px;
    width: 100%;
    height: 45px;
    background-color: #003871;
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
      .list:hover{
        background-color: #003871 - 20;
      }
    }
  }

  .head{
    width: 1200px;
    height: 120px;
    margin: 0 auto;
    /*background-color: aqua;*/
    .logo{
      float: left;
      width: 327px;
      height: 56px;
      margin-top: 30px;
      img{
        width: 327px;
        height: 56px;

      }
    }
    .head_right{
      width: 330px;
      height: 90px;
      float: right;
      margin-top: 15px;
      .phone{
        float: right;
        width: 190px;
        height: 50px;

        img{
          width: 40px;
          height: 40px;
        }
        .phone_num{
          font-size:24px;
          font-weight:bold;
          color:rgba(0,57,113,1);
          line-height:28px;
        }
      }
      .seach{
        clear: both;
        padding-top: 5px;
        /*input{*/
          /*width: 330px;*/
          /*height: 40px;*/
        /*}*/
      }
    }
  }
</style>
