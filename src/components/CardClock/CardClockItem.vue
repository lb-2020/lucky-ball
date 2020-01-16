<template>
  <div ref="flip" class="flip" :class="{'running': isFlipping}">
    <div class="digital front" :data-number="frontNumber" />
    <div class="digital back" :data-number="backNumber" />
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    timeString: {
      type: String,
      default: '0'
    }
  },
  data() {
    return {
      isFlipping: false,
      frontNumber: 0,
      backNumber: 1,
      duration: 600
    }
  },
  watch: {
    timeString: {
      immediate: true,
      handler(val, oldVal) {
        if (this.oldVal !== val) {
          this.flipDown(oldVal, val)
        }
      }
    }
  },
  mounted() {
    this.flipNode = this.$refs.flip
  },
  methods: {
    flipDown(prevTime, currentTime) {
      if (this.isFlipping) {
        return false
      }
      this.isFlipping = true
      this.frontNumber = prevTime
      this.backNumber = currentTime
      setTimeout(() => {
        this.isFlipping = false
        this.frontNumber = currentTime
      }, this.duration)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
