<template>
  <div id="app" class="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style >
  *{
    box-sizing: border-box;
  }
  .app{
    background-color:#f0f5fa;
  }
  img{
    vertical-align: top;
  }
</style>
