<template>
  <div class="layout">
    <div id="main">
      <bannel/>
      <panel/>
      <goodHot/>
      <shopList />
    </div>
  </div>
</template>

<script>
import Bannel from '@/views/components/Bannel/Bannel'
import Panel from '@/views/components/Good/GoodPanel'
import GoodHot from '@/views/components/Good/GoodHot'
import GoodList from '@/views/components/Good/GoodList'
export default {
  components: {
    Panel,
    GoodHot,
    GoodList,
    Bannel
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
