<template>
  <div class="clock">
    <CardClockItem :time-string="timeList[0]" />
    <CardClockItem :time-string="timeList[1]" />
    <em class="divider">:</em>
    <CardClockItem :time-string="timeList[2]" />
    <CardClockItem :time-string="timeList[3]" />
    <em class="divider">:</em>
    <CardClockItem :time-string="timeList[4]" />
    <CardClockItem :time-string="timeList[5]" />
  </div>
</template>

<script>
import CardClockItem from './CardClockItem'
export default {
  name: '',
  components: { CardClockItem },
  data() {
    return {
      timeList: ''
    }
  },
  mounted() {
    setInterval(() => {
      this.init()
    }, 1000)
  },
  methods: {
    init() {
      const now = new Date()
      const nowTimeStr = this.getTimeFromDate(new Date(now.getTime() - 1000))
      this.timeList = nowTimeStr
    },

    getTimeFromDate(date) {
      return date
        .toTimeString()
        .slice(0, 8)
        .split(':')
        .join('')
    }
  }
}
</script>

<style lang="scss">
.clock {
  display: flex;

  .divider {
    font-size: 66px;
    line-height: 102px;
    font-style: normal;
  }

  .flip {
    position: relative;
    width: 60px;
    height: 100px;
    margin: 2px;
    font-size: 66px;
    line-height: 100px;
    text-align: center;
    background: white;
    border: 1px solid black;
    border-radius: 10px;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.5);
    -webkit-box-reflect: below 1px
      linear-gradient(transparent, rgba(0, 0, 0, 0.4));

    // basic
    .digital {
      &::before,
      &::after {
        position: absolute;
        content: attr(data-number);
        left: 0;
        right: 0;
        color: white;
        background: black;
        overflow: hidden;
        perspective: 160px;
      }

      &::before {
        top: 0;
        bottom: 50%;
        border-bottom: 1px solid #666;
        border-radius: 10px 10px 0 0;
      }

      &::after {
        top: 50%;
        bottom: 0;
        line-height: 0;
        border-radius: 0 0 10px 10px;
      }
    }

    // stack
    .back::before,
    .front::after {
      z-index: 1;
    }

    .back::after {
      z-index: 2;
    }

    .front::before {
      z-index: 3;
    }

    // animation
    .back::after {
      transform-origin: center top;
      transform: rotateX(0.5turn);
    }

    &.running {
      .front::before {
        transform-origin: center bottom;
        animation: frontFlipDown 0.6s ease-in-out;
        box-shadow: 0 -2px 6px rgba(255, 255, 255, 0.3);
        backface-visibility: hidden;
      }
      .back::after {
        animation: backFlipDown 0.6s ease-in-out;
      }
    }
  }
}

@keyframes frontFlipDown {
  to {
    transform: rotateX(0.5turn);
  }
}

@keyframes backFlipDown {
  to {
    transform: rotateX(0);
  }
}
</style>
