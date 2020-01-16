<template>
  <el-menu
    class="page-menu"
    :default-active="activeMenu"
    mode="horizontal"
    @select="handleMenuSelect"
  >
    <el-menu-item index="home">HOME</el-menu-item>
    <el-menu-item index="product">PRODUCT</el-menu-item>

    <el-submenu index="notice1">
      <div slot="title" class="notice">
        NOTICE
        <div v-if="ac==1" class="noactive">
          NOTICE
          <i class="iconfont icon-lower-triangle" />
        </div>
        <i class="iconfont icon-lower-triangle" />
      </div>
      <el-menu-item v-for="(item,index) in productList" :key="index" ref="notice" :index="'notice,'+index" @click="handelItem(index)">{{ item.name }}</el-menu-item>
    </el-submenu>
    <el-submenu index="analysis1">
      <div slot="title" class="notice">
        ANALYSIS
        <div v-if="ac==2" class="noactive">
          ANALYSIS
          <i class="iconfont icon-lower-triangle" />
        </div>
        <i class="iconfont icon-lower-triangle" />
      </div>

      <el-menu-item v-for="(item,index) in productList" :key="index" :index="'analysis,'+index">{{ item.name }}</el-menu-item>
    </el-submenu>

    <el-menu-item index="news">NEWS</el-menu-item>
    <el-menu-item index="contact">CONTACT US</el-menu-item>
    <el-menu-item index="about">ABOUT US</el-menu-item>
  </el-menu>

</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      ac: null,
      activeMenu: 'notice',
      productList: [{ id: 1, name: 'PRODUCT1' },
        { id: 2, name: 'PRODUCT2' },
        { id: 3, name: 'PRODUCT3' },
        { id: 4, name: 'PRODUCT4' },
        { id: 5, name: 'PRODUCT5' },
        { id: 6, name: 'PRODUCT6' }],
      menus: [
        {
          index: 'HOME',
          title: 'HOME'
        },
        {
          index: 'PRODUCT',
          title: 'PRODUCT'
        },
        {
          index: 'NOTICE',
          title: 'NOTICE'
        },
        {
          index: 'ANALYSIS',
          title: 'ANALYSIS'
        },
        {
          index: 'NEWS',
          title: 'NEWS'
        },
        {
          index: 'CONTACT',
          title: 'CONTACT US'
        },
        {
          index: 'ABOUT',
          title: 'ABOUT US'
        }

      ]
    }
  },
  watch: {
    $route: {
      // immediate: true,
      handler(val, oldVal) {
        this.handleQuery(val, oldVal)
      },
      deep: true
    }
  },
  mounted() {
    this.activeMenu = this.$route.name
    console.log(this.$route.name)
    if (this.$route.name === 'notice') {
      this.ac = 1
    } else if (this.$route.name === 'analysis') {
      this.ac = 2
    }
  },
  methods: {
    handelItem(index) {
      console.log(index)
    },
    handleMenuSelect(menuIndex, keypath) {
      console.log(menuIndex, keypath)

      if (menuIndex.split(',')[0] === 'notice') {
        this.ac = 1
        var id = keypath[1].split(',')[1]
        this.$router.push({ name: menuIndex.split(',')[0], query: { noticeId: id }})
      } else if (menuIndex.split(',')[0] === 'analysis') {
        this.ac = 2
        var id1 = keypath[1].split(',')[1]
        this.$router.push({ name: menuIndex.split(',')[0], query: { anaId: id1 }})
      } else {
        this.ac = null
        this.$router.push({ name: menuIndex.toLowerCase() })
      }
    },
    handleQuery(val, oldVal) {
      console.log(val, oldVal)
      const { name } = this.$route
      console.log(name)
      if (this.$route.name === 'notice') {
        this.ac = 1
      } else if (this.$route.name === 'analysis') {
        this.ac = 2
      } else {
        this.ac = ''
      }
      if (name) {
        this.activeMenu = name
      } else {
        console.warn('路由需要定义name属性')
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.page-menu {

  background: #fff;
  line-height: $menuHeight;
  overflow: visible;
  .el-dropdown-link{
    display: flex;
    align-items: center;
    color: #000;
    font-size: 16px;
    margin-bottom: 3px;
    top: -5px;
    i{
      color: #000;
      margin-bottom: 2px;
    }
  }
  .dropdown{
    width: 120px;
  }

  &.el-menu::v-deep {
    border-bottom: none;

    .el-menu-item {
      margin-left: 24px;
      height: $menuHeight;
      line-height: $menuHeight;
      font-size: 18px;
      text-align: center;
      border-bottom-color: transparent !important;
      transition: background-color 0.3s, color 0.3s;
      color: #000;
    }
    .el-submenu__title{
      margin-left: 24px;
      line-height: $menuHeight !important;
      color: #000;
      .el-menu--horizontal  {
        width: 100px;
      }
    }

    .is-active.el-menu-item,
    .is-active.el-menu-item:focus,
    .is-active.el-menu-item:hover {
      background: #f1f1f1;
      color: #000;
    }
    .el-submenu__title{
      //  width: 120px;
      position: relative;
       height: $menuHeight;

     }
     .is-active .el-submenu__title{
       border-bottom: 2px solid #f1f1f1;
       background: #f1f1f1;
       height: $menuHeight;
     }
  }
  .notice{
    font-size: 18px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    z-index: 10;
    //  width: 120px;
    // padding: 0 20px;
    overflow: visible;
    i{
      color: #000;
    }
      .noactive{
        display: flex;
        justify-content: center;
        position: absolute;
        left: -20px;
        right: -20px;
        top: 0;
        bottom: -2px;
        background-color: #f1f1f1;
        z-index: 9;
    }
  }

}
</style>
