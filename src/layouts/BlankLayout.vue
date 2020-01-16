<template>
  <div>
    <transition name="fade" made="in-out">
      <router-view />

    </transition>
  </div>
</template>

<script>
export default {
  name: 'BlankLayout'
}
</script>
<style >
.fade-enter {
 opacity:0;
}
.fade-leave{
 opacity:1;
}
.fade-enter-active{
 transition:opacity .5s;
}
.fade-leave-active{
 opacity:0;
 transition:opacity .5s;
}
</style>
