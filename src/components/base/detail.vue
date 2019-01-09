
<template>
  <div>
<div v-if="cshow" class="right"  >
  <!--标题-->
  <div class="rhead">
    <div style="float: left; font-size: 25px;margin-top: 15px; color:cornflowerblue " @click="change('back')">返回</div>
    <div style="float: right;margin-top: 20px;">首页>关于我们</div>
  </div>
  <!--设置宽度为800-->
  <div class="contact">
    {{column}}{{}}
    <br><br>
    <h2 align="center">
      {{newsinformation.title}}</h2><br><br>
    <span align="center">发布时间:&nbsp;{{newsinformation.time}} </span>
    <div class="news-content"  v-html="newsinformation.content"></div>
  </div>
</div>      </div>
</template>
<script>
  export default {
    props: [

      // 列数
      'detailColumn',
      //个数
      'detailId'   ],

    mouted:function(){
      this.detailPage();
    },
    data () {
      return {
        newsinformation: {
          title: "家用中央空调安装需要注意哪些问题?",
          time: "2018-10-10",
          content: "  在卧室里面我们进行制冷的话，- -般用到挂壁式的空调就可以了，因为挂壁式空调的功率大小是能够在卧室里面我们进行制冷的话，- 般用到挂壁式的空调就可以了，因为挂壁\n" +
            "\n" +
            "      家用中央空调室外机安装注意事项: 1. 室外机排出的热气应对邻居无影响; 2、位置周围如有强热源和其他设备排气口，蒸气与可燃烧气体时，应及时联系予以调整; 3、室外机应安装在通风良好的位置，若有气流短路的情况，安装时应采取措施解决; 4、尽量杜绝侧送侧回，回风管严禁穿过卫生间、厨房间;5.设计时尽量考虑厨房间，但厨房间不能单独放设空调(考虑厨房油烟对设备的腐蚀等); 6、尽量避免选择高静压机器。设计时风管尽量短，回风管宽度不宜太小。\n" +
            "\n"
        },
        detailColumn: 1,
        detailId: 1
      }
      },
    methods: {
        detailPage () {

        this.$http({
          url: 'http://www.chinazishun.com/home/case/getCaseList',
          methods: 'get',
          params: {


          }
        }).then(res =>{
          alert(res)
        })
      },

    }







  }
</script>
<style scoped lang="less">
  @import '../../assets/left.css';
</style>
