<template>
  <div class="layout">
    <headerBox/>
    <div id="main">
      <bannel/>
      <panel/>
      <hotShaop/>
      <shopList />
    </div>
    <y-footer/>
  </div>
</template>

<script>
import Navbar from '@/views/components/Navbar'
import HeaderBox from '@/views/components/HeaderBox'
import Carousel from '@/views/components/Carousel'
import Bannel from '@/views/components/Bannel'
import Panel from '@/views/components/Panel'
import HotShaop from '@/views/components/HotShop'
import ShopList from '@/views/components/ShopList'
import YFooter from '@/components/common/footer'
export default {
  components: {
    Navbar,
    Carousel,
    Panel,
    HotShaop,
    ShopList,
    HeaderBox,
    Bannel,
    YFooter
  },
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar
    },
    device() {
      return this.$store.state.app.device
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.layout{
  background: #ededed;
  overflow: hidden;
  width: 100%;
}

#main{
  display: flex;
  display: -ms-flexbox;
  -ms-flex-direction: column;
  flex-direction: column;
  margin: 0 auto;
  width: 80%;
}
</style>
