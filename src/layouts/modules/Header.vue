<template>
  <div class="page-header">
    <div class="menu">
      <div class="layout-width">
        <logo />
        <page-menu />
      </div>
    </div>

  </div>
</template>

<script>
import Logo from './Logo'
import PageMenu from './Menu'
export default {
  name: 'Menu',
  components: {
    PageMenu,
    Logo
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.page-header {
  position: relative;
  font-size: 0px;
  background: $primaryColor;
  height: $navHeight;
  overflow: hidden;
  display: flex;
  align-items: center;
  .menu{
    background-color: #fff;
    width: 100%;
    box-shadow: 0px 2px 9px 0px #b5b9be;
    .layout-width{
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .page-logo {
      float: left;
      }
      .page-menu {
        float: right;
      }
    }
  }

}
</style>
