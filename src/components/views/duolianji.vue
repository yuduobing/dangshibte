<template>
  <div>
    <div class="faces_img">
      <img src="../../assets/img/zy.png" />
    </div>
    <div style="width: 1200px;margin: 0 auto;overflow: hidden;padding-bottom: 60px">

      <div class="left">
        <div class="list">
          <div class="title">多联机机组维护</div>
          <div @click="changelist(item.index)" v-for="(item,index) in list " :key="index">
            <div class="content">{{item.content}}</div>
          </div>
          <information></information>
        </div>

      </div>

      <div class="right">
        <!--标题-->
        <div class="rhead">
          <div style="float: left; font-size: 25px;margin-top: 15px; color:cornflowerblue ">产品列表</div>
          <div style="float: right;margin-top: 20px;">首页>多联机机组维护</div>
        </div>
        <!--新闻列表-->
        <div @click="change(item.title)" v-for="(item,index) in news" :key="index">
          <div class="new">

            <div style="padding-left: 3px;padding-right: 3px;border:1px solid #f5f5f5;display: inline-block ">
              <img :src="item.img" class="new-img"/></div>
            <div class="new-content">

              <h1>{{item.title}}</h1>
              <div  class="news-text"> {{item.content}} </div>

            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
  import information from '../base/information'
  import img from '../../assets/img/img1.png'

  export default {
    name: 'zhongyang',
    components: {information},
    data () {
      return {

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
          }],
        news1: [
          {
            title: '阿法拉伐钎焊接换热器油冷却CB200',
            img: img,
            content:
              '可根据个性化需求进行组合满足不同需求多种室内形式能够与家居装潢完美配合拥有先进的静音技术，室内机转音...'
          },
          {
            title: '阿法拉伐钎焊接换热器油冷却CB200',
            img: img,
            content:
              '可根据个性化需求进行组合满足不同需求多种室内形式能够与家居装潢完美配合拥有先进的静音技术，室内机转音...'
          }],
        news2: [
          {
            title: '德国GEA板式换热器',
            img: img,
            content:
              '可根据个性化需求进行组合满足不同需求多种室内形式能够与家居装潢完美配合拥有先进的静音技术，室内机转音...'
          },
          {
            title: '德国GEA板式换热器/4Max系列',
            img: img,
            content:
              '可根据个性化需求进行组合满足不同需求多种室内形式能够与家居装潢完美配合拥有先进的静音技术，室内机转音...'
          }],
        news3: [
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
          }],
        news4: [
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
          }
        ],
        list: [{
          index: 1, content: '产品列表01'
        },
          {
            index: 2, content: '产品列表02'
          }
          ,
          {
            index: 3, content: '产品列表03'
          },
          {
            index: 4, content: '产品列表04'
          }
          ,
          {
            index: 5, content: '产品列表05'
          },
          {
            index: 6, content: '产品列表06'
          }


        ]
      }
    },
    methods: {
      changelist (e) {
        // 点击左侧导航栏对应的事件
        console.log(e)
        if(e===2){
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

      }

    }
  }
</script>

<style scoped lang="less">
  @import '../../assets/left.css';
  .face_img{
    margin: 0 auto;
    width:1920px;
    height:500px;
    img{
      width:1920px;
      height:500px;
    }
  }
</style>
