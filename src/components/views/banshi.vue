<!--板式换热器-->
<template>
  <div>
  <div class="faces_img">
    <img src="../../assets/img/head3.png" />
  </div>
  <div style="width: 1200px;margin: 0 auto;overflow: hidden;padding-bottom: 60px">

    <div class="left">
      <div class="list">
        <div class="title">板式换热器维保</div>
        <div @click="changelist(item.index)" v-for="(item,index) in list " :key="index">
          <div class="content">{{item.content}}</div>
        </div>
        <information></information>
      </div>

    </div>

    <div   v-if="show" class="right">
      <!--标题-->
      <div class="rhead">
        <div style="float: left; font-size: 25px;margin-top: 15px; color:cornflowerblue ">板式换热器维保</div>
        <div style="float: right;margin-top: 20px;">首页>板式换热器维保</div>
      </div>
      <!--新闻列表-->
      <div @click="change(item.title)" v-for="(item,index) in news" :key="index">
        <div class="new">

          <div class="img_border">
            <img :src="item.img" class="new-img"/></div>
          <div class="new-content">

            <div class="title">{{item.title}}</div>
            <br>
            <!--//限制字数文字-->
            <div  class="news-text"> {{item.content}} </div>
            <br><br>
            <p style="color: #00b0ff;"> 查看详情  </p>
          </div>
        </div>
      </div>

    </div>
    <div   v-if="!show"  class="right"  >
      <detail :index="detailColumn" index></detail>
  </div>
  </div>  </div>
</template>

<script>
  import information from '../base/information'
  import img from '../../assets/img/img1.png'
  import detail from '../base/detail'
  export default {
    name: 'zhongyang',
    components: {information,detail},
    data () {
      return {
        detail_id:1,
        // 显示新闻列表
        show: true,
        news: [
          {
            title: '超级多联3Max/4Max系列',
            img: img,
            content:
              '可根据个性化需求进行组合满足不同需求多种室内形式能够与家居装潢完美配合拥有先进的静音技术，室内机转音...'
          },
          {
            title: '超级多联3Max/4Max系列',
            img: img,
            content:
              '可根据个性化需求进行组合满足不同需求多种室内形式能够与家居装潢完美配合拥有先进的静音技术，室内机转音...'
          } ],
        // 第二系列
        news1: [
          {
            title: '超级多联3Max/4Max系列',
            img: img,
            content:
              '可根据个性化需求进行组合满足不同需求多种室内形式能够与家居装潢完美配合拥有先进的静音技术，室内机转音...'
          },
          {
            title: '超级多联3Max/4Max系列',
            img: img,
            content:
              '可根据个性化需求进行组合满足不同需求多种室内形式能够与家居装潢完美配合拥有先进的静音技术，室内机转音...'
          } ],
        list: [{
          index: 1, content: '第一系列'
        },
          {
            index: 2, content: '第二系列'
          }
        ]
      }
    },
    methods: {
      // 点击左侧导航栏对应时间
      changelist (e) {
        this.show=true
        // 点击左侧导航栏对应的事件

        //发送ajax请求把数据保存到news



        if(e===1){
          console.log("进来了")
          this.news = this.news1.slice(0)
          console.log(this.news)
        }
        else if(e===2){
          console.log("进来了")
          this.news = this.news2.slice(0)
          console.log(this.news)
        }
        else if(e===3){
          this.news = this.news3.slice(0)
        }
        else if(e===4){
          this.news = this.news4.slice(0)
        }
      },
      // 点击详情页对应事件
      change (e) {

        this.detail_id=e;

        this.show=!this.show;

      }

    }
  }
</script>

<style scoped lang="less">
  @import '../../assets/left.css';

</style>
