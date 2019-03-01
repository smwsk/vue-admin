<template>
  <div class="header-box">
    <div>
      <header class="w">
        <div class="w-box">
          <div class="nav-log">
            <h1>
              <a href class="router-link-active" title="商城官网"></a>
            </h1>
          </div>
          <div class="right-box">
            <div class="nav-list"></div>
            <div class="nav-aside"></div>
          </div>
        </div>
      </header>

      <div :class="{fixed:st}" class="nav-sub">
        <div class="nav-sub-bg"></div>
        <div :class="{fixed:st}" class="nav-sub-wrapper">
          <div class="w">
            <ul class="nav-list2">
              <li v-for="item in navList" :key="item.id">
                <a href class="router-link-active">
                  <a href class="active">{{ item.name }}</a>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      st: false,
      positionL: 0,
      positionT: 0,
      navList: [
        {
          id: '1',
          name: '首页'
        },
        {
          id: '2',
          name: '全部'
        }
      ]
    }
  },
  computed: {

  },
  mounted() {
    this.navFixed()
    window.addEventListener('scroll', this.navFixed)
    window.addEventListener('resize', this.navFixed)
  },
  methods: {
    // 控制顶部
    navFixed() {
      var st = document.documentElement.scrollTop || document.body.scrollTop
      st >= 100 ? (this.st = true) : (this.st = false)
    }
  }
}
</script>

<style lang="scss">
@import "../../../assets/style/theme";
@import "../../../assets/style/mixin";
@import "../../../styles/header.scss";
</style>
