
<template>
  <div>
<div  class="right"  >
  <!--标题-->
  <div class="rhead">
    <div style="float: left; font-size: 25px;margin-top: 15px; color:cornflowerblue " @click="change('back')">返回</div>
    <div style="float: right;margin-top: 20px;">首页>关于我们</div>
  </div>
  <!--设置宽度为800-->
  <div class="contact">

    <br><br>
    <h2 align="center">
      传递给后台測試數據{{detailColumn}}{{detailId}}
      <!--{{newsinformation.title}}-->
    </h2><br><br>
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
          content: "  在卧室里面我们进行"
        },

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
