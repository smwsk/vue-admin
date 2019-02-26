<template>
  <div id="hotshop">
    <section class="w mt30 clearfix">
      <div class="gray-box">
        <div class="title">
          <h2>热门商品</h2>
          <div></div>
        </div>
        <div class="hot">
          <div v-for="item in goodList" :key="item.id" class="good-item">
            <div class="good-img">
              <a>
                <img :src="item.goodImg" alt="item.goodTitle"/>
              </a>
            </div>
            <h6 class="good-title">{{ item.goodTitle }} </h6>
            <h3 class="sub-titile ellipsis">{{ item.subTitle }}</h3>
            <div class="good-price pr">
              <div class="ds pa">
                <a>
                  <input type="button" readonly="readonly" class="default-btn" value="查看详情" style="margin: 0px 5px;" />
                </a>
                <input type="button" readonly="readonly" class="main-btn" value="加入购物车" style="margin: 0px 5px;" />
              </div>
              <p>
                <span style="font-size: 14px;">￥</span>
                {{ item.price }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return ({
      goodList: [
        {
          id: '1',
          goodTitle: '支付测试商品 IPhone X 全面屏 全面绽放',
          goodImg: 'https://i.loli.net/2018/07/13/5b48a7f468bf2.png',
          subTitle: '此仅为支付测试商品 拍下不会发货',
          price: '1.00'
        },
        {
          id: '2',
          goodTitle: '捐赠商品',
          goodImg: 'https://i.loli.net/2018/07/13/5b48a7f46be51.png',
          subTitle: '您的捐赠将用于本站维护 给您带来更好的体验',
          price: '2.00'
        }
      ]
    })
  }
}
</script>

<style scoped>
  .mt30{
    margin-top: 30px
  }

  .hot {
    display: -ms-flexbox;
    display: flex;
  }
  .hot > div {
    -ms-flex: 1;
    flex: 1;
    width: 25%;
  }

  .gray-box{
    position: relative;
    margin-bottom: 30px;
    overflow: hidden;
    background: #fff;
    border-radius: 8px;
    border: 1px solid #dcdcdc;
    border-color: rgba(0, 0, 0, 0.14);
    box-shadow: 0 3px 8px -6px rgba(0, 0, 0, 0.1);
  }
  .gray-box .title{
    padding-left: 30px;
    position: relative;
    z-index: 10;
    height: 60px;
    padding: 0 10px 0 24px;
    border-bottom: 1px solid #d4d4d4;
    border-radius: 8px 8px 0 0;
    box-shadow: rgba(0, 0, 0, 0.06) 0 1px 7px;
    background: #f3f3f3;
    background: linear-gradient(#fbfbfb, #ececec);
    line-height: 60px;
    font-size: 18px;
    color: #333;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-align: center;
    align-items: center;
  }
  .gray-box .title h2 {
    font-size: 18px;
    font-weight: 400;
    color: #626262;
    display: inline-block;
  }

  .good-item .ds{
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
  .good-item {
    background: #fff;
    width: 25%;
    transition: all .5s;
    height: 430px;
  }
  .good-item:hover {
    transform: translateY(-3px);
    box-shadow: 1px 1px 20px #999;
  }
  .good-item:hover .good-price p {
    display: none;
  }
  .good-item:hover .ds {
    display: -ms-flexbox;
    display: flex;
  }
  .good-item .ds {
    width: 100%;
    display: none;
  }
  .good-item .good-img img {
    margin: 50px auto 10px;
    width: 206px;
    height: 206px;
    display: block;
  }
  .good-item .good-price{
    margin: 15px 0;
    height: 30px;
    text-align: center;
    line-height: 30px;
    color: #d44d44;
    font-family: Arial;
    font-size: 18px;
    font-weight: 700;
  }
  .good-item .good-title {
    line-height: 1.2;
    font-size: 16px;
    color: #424242;
    margin: 0 auto;
    padding: 0 14px;
    text-align: center;
    overflow: hidden;
  }
  .good-item h3 {
    text-align: center;
    line-height: 1.2;
    font-size: 12px;
    color: #d0d0d0;
     padding: 10px;
  }
  .default-btn {
    width: 100px;
    height: 30px;
    line-height: 28px;
    vertical-align: middle;
    border: 1px solid #e1e1e1;
    border-radius: 4px;
    font-size: 12px;
    color: #646464;
    background-color: #f9f9f9;
    background-image: linear-gradient(180deg, #fff, #f9f9f9);
  }
  .default-btn:hover {
    width: 100px;
    height: 30px;
    line-height: 28px;
    vertical-align: middle;
    background-color: #eee;
    background-image: linear-gradient(180deg, #f5f5f5, #eee);
  }

  .main-btn{
    width: 100px;
    height: 30px;
    line-height: 28px;
    vertical-align: middle;
    border: 1px solid #5c81e3;
    border-radius: 4px;
    font-size: 12px;
    color: #fff;
    background-color: #678ee7;
    background-image: linear-gradient(180deg, #678ee7, #5078df);
  }
  .main-btn:hover {
    width: 100px;
    height: 30px;
    line-height: 28px;
    vertical-align: middle;
    background-color: #6c8cd4;
    background-image: linear-gradient(180deg, #6c8cd4, #4769c2);
  }
</style>
