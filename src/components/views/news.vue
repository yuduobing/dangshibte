<template>
  <div>
    <div class="faces_img">
      <img src="../../assets/img/news.png" />
    </div>
    <div style="width: 1200px;margin: 0 auto;overflow: hidden;min-height: 700px; padding-bottom: 30px">

    <div class="left">
      <div class="list">
        <div class="title">砀石新闻</div>
        <div @click="changelist(item.index)" v-for="(item,index) in list " :key="index">
          <div class="content">{{item.content}}</div>
        </div>
        <information></information>
      </div>

    </div>
    <transition name="slide-fade" >
    <div v-if="show" class="right"  v-cloak>
      <div class="rhead">
        <div style="float: left; font-size: 25px;margin-top: 15px; color:cornflowerblue ">新闻资讯</div>
        <div style="float: right;margin-top: 20px;">首页>关于我们</div>
      </div>
      <div @click="change(item.index)" v-for="(item,index) in news" :key="index">
        <div class="new">

          <div style="padding-left: 3px;padding-right: 3px;border:1px solid #f5f5f5;display: inline-block ">
            <img :src="item.img" class="new-img"/></div>
          <div class="new-content">

            <h1>{{item.title}}</h1>
            <br><br>
            <!--//限制字数文字-->
            <div  class="news-text"> {{item.content}} </div>
            <br><br>
            <p style="color: #00b0ff;"> 查看详情  </p>
          </div>
        </div>
      </div>
      <div style="width: 100%;text-align: center;padding-top: 25px;">
        <Pagination
          background
          :page-size="pageData.page_size"
          layout="prev, pager, next"
          @current-change="currentPage"
          :total="pageData.total">
        </Pagination>
      </div>
    </div>
    </transition>
      <div v-if="cshow" class="right"  >
        <!--标题-->
        <div class="rhead">
          <div style="float: left; font-size: 25px;margin-top: 15px; color:cornflowerblue " @click="change('back')">返回</div>
          <div style="float: right;margin-top: 20px;">首页>关于我们</div>
        </div>
        <!--设置宽度为800-->
        <div class="contact">
          <br><br>
          <h2 align="center">
            {{newsinformation.title}}</h2><br><br>
          <span align="center">发布时间:&nbsp;{{newsinformation.time}} </span>
          <div class="news-content"  v-html="newsinformation.content"></div>
        </div>
      </div>

  </div>
  </div>
</template>

<script>

  import information from '../base/information'
  import img from '../../assets/img/img1.png'


  import { Pagination } from 'element-ui'

  import ax from 'axios'

  export default {
    name: 'news',
    components: {information, Pagination},
    data () {
      return {
        pageData:{
          total: 10,
          page_size: 4,
          page: 0 //当前页面

        },
        // 显示新闻列表
        show: true,
// 显示详情
        cshow:false,
        // 新闻列表
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
          }
          ,
          {
            title: '超级多联3Max/4Max系列',
            img: img,
            content:
              '可根据个性化需求进行组合满足不同需求多种室内形式能够与家居装潢完美配合拥有先进的静音技术，室内机转音...可根据个性化需求进行组合满足不同需求多种室内形式能够与家居装潢完美配合拥有先进的静音技术，室内机转音...可根据个性化需求进行组合满足不同需求多种室内形式能够与家居装潢完美配合拥有先进的静音技术，室内机转音...可根据个性化需求进行组合满足不同需求多种室内形式能够与家居装潢完美配合拥有先进的静音技术，室内机转音...可根据个性化需求进行组合满足不同需求多种室内形式能够与家居装潢完美配合拥有先进的静音技术，室内机转音...'
          }
          ,
          {
            title: '超级多联3Max/4Max系列',
            img: img,
            content:
              '可根据个性化需求进行组合满足不同需求多种室内形式能够与家居装潢完美配合拥有先进的静音技术，室内机转音...'
          }],
       newsinformation:{title:"家用中央空调安装需要注意哪些问题?",time:"2018-10-10",content:"  在卧室里面我们进行制冷的话，- -般用到挂壁式的空调就可以了，因为挂壁式空调的功率大小是能够在卧室里面我们进行制冷的话，- 般用到挂壁式的空调就可以了，因为挂壁\n" +
           "\n" +
           "      家用中央空调室外机安装注意事项: 1. 室外机排出的热气应对邻居无影响; 2、位置周围如有强热源和其他设备排气口，蒸气与可燃烧气体时，应及时联系予以调整; 3、室外机应安装在通风良好的位置，若有气流短路的情况，安装时应采取措施解决; 4、尽量杜绝侧送侧回，回风管严禁穿过卫生间、厨房间;5.设计时尽量考虑厨房间，但厨房间不能单独放设空调(考虑厨房油烟对设备的腐蚀等); 6、尽量避免选择高静压机器。设计时风管尽量短，回风管宽度不宜太小。\n" +
           "\n"},
        // 左边导航栏所有科目
        list: [{
          index: 1, content: '新闻咨询'
        }
        ]
      }
    },
    mounted () {
      // 创建和初始化地图函数：

      this.initMap()
    },

    methods: {
      currentPage (v) {
        this.pageData.page = v
        alert(v)
        this.$http({
          url: 'http://www.chinazishun.com/home/case/getCaseList',
          methods: 'get',
          params: {

          }
        }).then(res =>{
          alert(res)
        })
      },
      changelist (e) {
        // 点击左侧导航栏对应的事件
        console.log(e)
      },
      change (e) {
         console.log(e)
        if (e === 'back') {
          this.show=!this.show;
          this.cshow=!this.cshow;


        }
        else {
          // ajax请求复制到newsinforamtion
          this.show=!this.show
          // 延迟显示过度动画
          setTimeout(() => {
            this.cshow=!this.cshow;


            console.log("启动了")
          },300)
          }
      }
      }
    }
</script>

<style scoped lang="less">
  @import '../../assets/left.css';

  .slide-fade-enter-active {

    transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-leave-active {
    transition: all .2s ease;
  }

  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(300px);
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

  }

  .contact2 {
    width: 100%;
    padding: 20px;
    padding-bottom: 250px;
  }

  .new-img {
    width: 268px;
    height: 178px;
    background: rgba(216, 216, 216, 1);
    border-radius: 5px;
  }

  .new-img:hover {
    transform: scale(1.2);
  }

  .font1 {
    margin-right: 91px;
  }

  .font2 {
    margin-right: 91px;
  }
  .news-content{
    padding-top: 30px;
    padding-bottom: 30px;
    margin-bottom: 40px;
    border-top:1px solid #f5f5f5 ;
    border-bottom:1px solid #f5f5f5 ;
  }
</style>
