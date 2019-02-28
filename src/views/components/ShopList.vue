<template>
  <div id="shopList">
    <section class="w mt30 clearfix">
      <div class="gray-box">
        <div class="title">
          <h2>官方精选</h2>
        </div>
        <div>
          <div class="floors">
            <imgBanner :imgUrl="imgBannerUrl"/>
            <goodItem v-for="item in goodList" :key="item.id" :goodItem="item"/>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ImgBanner from "@/views/components/ImgBanner"
import GoodItem from "@/views/components/GoodItem"
import YShelf from "@/components/shelf"
export default {
  components: {
    GoodItem,
    ImgBanner,
    YShelf
  },
  data() {
    return {
      imgBannerUrl:
        "https://resource.smartisan.com/resource/1/1220858shoujilouceng.jpg",
      goodList: [
        {
          id: "1",
          title: "坚果 3 前屏钢化玻璃保护膜",
          subTitle: "超强透光率、耐刮花、防指纹",
          goodImg:
            "https://resource.smartisan.com/resource/3a7522290397a9444d7355298248f197.jpg",
          price: "49.00"
        },
        {
          id: "2",
          title: "坚果 3 绒布国旗保护套",
          subTitle: "质感精良、完美贴合、周到防护",
          goodImg:
            "https://resource.smartisan.com/resource/63ea40e5c64db1c6b1d480c48fe01272.jpg",
          price: "79.00"
        },
        {
          id: "3",
          title: "坚果 3 TPU 软胶透明保护套",
          subTitle: "轻薄透明、完美贴合、TPU 环保材质",
          goodImg:
            "https://resource.smartisan.com/resource/5e4b1feddb13639550849f12f6b2e202.jpg",
          price: "29.00"
        },
        {
          id: "4",
          title: "Smartisan 半入耳式耳机",
          subTitle: "经典配色、专业调音、高品质麦克风",
          goodImg:
            "https://resource.smartisan.com/resource/10525c4b21f039fc8ccb42cd1586f5cd.jpg",
          price: "39.00"
        },
        {
          id: "5",
          title: "坚果 3 TPU 软胶保护套",
          subTitle: "TPU 环保材质、完美贴合、周到防护",
          goodImg:
            "https://resource.smartisan.com/resource/b899d9b82c4bc2710492a26af021d484.jpg",
          price: "19.00"
        },
        {
          id: "6",
          title: '坚果 3 "足迹"背贴 乐高创始人出生',
          subTitle: "1891 年 4 月 7 日",
          goodImg:
            "https://resource.smartisan.com/resource/abb6986430536cd9365352b434f3c568.jpg",
          price: "119.00"
        }
      ]
    }
  }
}
</script>

<style>
.floors {
  width: 100%;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-flex-align: center;
  align-items: center;
}

.gray-box {
  position: relative;
  margin-bottom: 30px;
  overflow: hidden;
  background: #fff;
  border-radius: 8px;
  border: 1px solid #dcdcdc;
  border-color: rgba(0, 0, 0, 0.14);
  box-shadow: 0 3px 8px -6px rgba(0, 0, 0, 0.1);
}
.gray-box .title {
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
</style>
