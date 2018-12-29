<template>
  <div class="font">
    <div class="icon">
      <img src="../../../static/image/tel.png" class="face_img"   />
      全国服务热线<br>123-0126948
    </div>

      <p align="left"  class="address">传真：010-123131233</p>
      <p align="left" class="address">邮编：200439</p>
      <p align="left" class="address">地址：上海市宝山区吉浦路545-551号2398室</p>

  </div>
</template>

<script>
export default {
  name: 'information'

}
</script>
<style scoped  lang="less">
  .font{
    margin-top: 30px;
    width: 300px;
    margin-left: 10px;
    .icon{
      border: 1px dashed lightgrey;

      padding:20px ;
      padding-top: 30px;
      padding-bottom: 30px;
      font-size: 20px;
      .face_img{
        float: left;
        margin-left: 30px;
        width: 60px;height: 60px
      }

    }
    .address{
  margin-top: 15px;
    }}
</style>
