<template>
    <div style="width: 1200px;margin: 0 auto">

    <div class="left">
      <div class="list">
        <div class="title">多联机机组维护</div>
        <div class="content">第一系列产品</div>
        <div class="content"> 第二系列产品</div>
        <information></information>
      </div>

    </div>

      <div class="right">
           <div class="rhead">
            <div  style="float: left; font-size: 25px; color:cornflowerblue " >产品列表</div>
             <div style="float: right;margin-top: 10px;">首页>中央空调</div>
           </div>
      </div>
      </div>

    </div>
</template>

<script>
import information from '../base/information'

export default {
  name: 'zhongyang',
  components: {information},
  data () {
    return {}
  }
}
</script>

<style scoped  lang="less">
  .left{
    background-color: white;
    float: left;
      width: 330px;
      text-align:center;
    .list{
    .title{
       background-color: #00b0ff;
      color: white;
      font-size: 25px;
  padding: 30px;
    }

      .content{
        padding: 40px;
        border-bottom:   2px solid #f5f5f5;
      }
    }

  }
.right{
  background-color: white;
    float: right;
    width: 840px;
   padding: 15px;
.rhead{

  padding-bottom: 40px;
  width: 100%;
    border-bottom: 2px solid cornflowerblue
}

}

</style>
