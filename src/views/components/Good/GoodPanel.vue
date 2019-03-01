// 4块图片列表
<template>
  <div id="panel">
    <ul class="box">
      <li v-for="item in paneList" :key="item.id" class="content">
        <img :src="item.imgUrl" alt="" class="i"/>
        <a class="cover-link"></a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return ({
      paneList: [
        {
          id: '1',
          imgUrl: 'https://resource.smartisan.com/resource/6/610400xinpinpeijian.jpg'
        },
        {
          id: '2',
          imgUrl: 'https://resource.smartisan.com/resource/6/610400yijiuhuanxin.jpg'
        },
        {
          id: '3',
          imgUrl: 'https://resource.smartisan.com/resource/4/489673079577637073.png'
        },
        {
          id: '4',
          imgUrl: 'https://resource.smartisan.com/resource/fe6ab43348a43152b4001b4454d206ac.jpg'
        }]
    })
  }
}
</script>

<style scoped>
  #panel{
    display: block;
  }
  .box{
    display: flex;
    overflow: hidden;
    position: relative;
    z-index: 0;
    margin-top: 25px;
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, 0.14);
    border-radius: 8px;
    background: #fff;
    box-shadow: 0 3px 8px -6px rgba(0, 0, 0, 0.1);
  }
  .content{
    float: left;
    position: relative;
    box-sizing: border-box;
    width: 25%;
    height: 200px;
    text-align: center;
  }

  .content ::before {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      box-sizing: border-box;
      border-left: 1px solid #f2f2f2;
      border-left: 1px solid rgba(0, 0, 0, 0.1);
      width: 100%;
      height: 100%;
      content: "";
      pointer-events: none;
  }

  .cover-link{
    cursor: pointer;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 4;
    background: url(data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEHAAEALAAAAAABAAEAAAICTAEAOw==) repeat;
  }
  .i {
      width: 305px;
      height: 200px;
  }

  a:hover {
      box-shadow: inset 0 0 38px rgba(0, 0, 0, 0.08);
      transition: all .15s ease;
  }
</style>

