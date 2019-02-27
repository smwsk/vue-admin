<template>
  <div class="carousel">
    <el-carousel height="32rem" indicator-position="none" class="home-box">
      <el-carousel-item v-for="item in imgList" :key="item.name">
        <img :src = "item.url"/>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return ({
      imgList: [
        {
          name: '图片1',
          url: 'https://i.loli.net/2018/11/04/5bdebbd45a0b0.png'
        },
        {
          name: '图片2',
          url: 'https://i.loli.net/2018/11/04/5bdebb109a29a.png'
        },
        {
          name: '图片3',
          url: 'https://i.loli.net/2018/11/04/5bdebb41e11f4.png'
        }]
    })
  }
}
</script>

<style>
  .carousel{
    width: 100%;
  }
  .home-box{
    overflow: hidden;
    z-index: 0;
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, .14);
    border-radius: 8px;
    background: #fff;
    box-shadow: 0 3px 8px -6px rgba(0, 0, 0, .1)
  }
  img{
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
</style>
