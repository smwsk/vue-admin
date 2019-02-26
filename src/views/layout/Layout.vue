<template>
  <div class="layout">
    <navbar/>
    <div id="main">
      <carousel/>
      <panel/>
    </div>
  </div>
</template>

<script>
import Navbar from '@/views/components/Navbar'
import Carousel from '@/views/components/Carousel'
import Panel from '@/views/components/Panel'

export default {
  components: {
    Navbar,
    Carousel,
    Panel
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
