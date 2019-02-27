<template>
  <div class="good-item">
    <div>
      <div class="good-img">
        <a>
          <img :src="goodItem.goodImg" alt="goodItem.title"/>
        </a>
      </div>
      <h6 class="good-title">{{ goodItem.title }}</h6>
      <h3 class="sub-title ellipsis">{{ goodItem.subTitle }}</h3>
      <div class="good-price pr">
        <div class="ds pa">
          <a>
            <input type="button" readonly="readonly" class="default-btn" value="查看详情" style="margin: 0px 5px;" />
          </a>
          <input type="button" readonly="readonly" class="main-btn" value="加入购物车" style="margin: 0px 5px;" />
        </div>
        <p>
          <span style="font-size: 14px;">￥</span>
          {{ goodItem.price }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodItem: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
  .good-item .ds{
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
  .good-item{
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
  .good-item .good-price {
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
