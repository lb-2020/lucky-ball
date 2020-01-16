<template>
  <router-link :to="{name:'home'}" class="page-logo" tag="div">
    <img src="~@/assets/images/1LB_home_03.jpg" />
  </router-link>
</template>

<script>
export default {
  name: 'Logo'
}
</script>

<style lang="scss" scoped>
.page-logo {

  img {
    margin-left: 40px;
    width: 73px;
    height: 71px;
  }
}
</style>
