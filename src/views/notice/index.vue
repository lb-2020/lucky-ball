<template>
  <div class="notice layout-width">
    <div class="notice-head">
      <div class="nh-img">
        <img src="~@/assets/images/LB（banner2）.png" alt="" />
      </div>

      <div class="pro-info">
        <div class="name">
          <div class="text">
            LB1.5LOTTO 2019029-0849
          </div>

        </div>
        <div class="pro-num">
          <div v-for="(item,index) in 5" :key="index" class="pro-ball" @click="chooseVideo(index)">
            {{ index }}
          </div>
        </div>

      </div>
      <div class="time">
        <img ref="img" src="~@/assets/images/digits.png" alt="" class="imge" />
        <div id="holder" class="test digits" />

      </div>
    </div>

    <div class="video">
      <div class="display">
        <video src="https://player.alicdn.com/video/aliyunmedia.mp4" controls width="630" />
      </div>
      <div class="other-video">
        <div class="title">
          OTHER VIDEOS
        </div>
        <div class="video-list">
          <div v-for="(item,index) in 8" :key="index" class="video-item" @click="handelVideo(index)">
            <img src="~@/assets/images/LB（video-2）.png" alt="" />
          </div>
        </div>
      </div>

    </div>

    <div class="table">
      <div class="changeList">
        <div v-for="(item,index) in changeItem" :key="index" class="changeitem" :class="index==active?'active':''" @click="changeIssue(index)">
          {{ item }}
        </div>
      </div>
      <div class="tabel-content">
        <el-table

          :data="tableData"
          style="width: 100%"
          :row-class-name="tableRowClassName"
          :header-cell-class-name="headerRowClassName"
          :cell-mouse-enter="tableRowClassName"
        >
          <el-table-column
            align="center"
            prop="issue"
            label="ISSUE"
          >
            <template slot-scope="scope">
              <div class="issue">
                {{ scope.row.issue }}
              </div>

            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="time"
            label="TIME"
          >
            <template slot-scope="scope">
              <div class="time">
                {{ scope.row.time }}
              </div>

            </template>
          </el-table-column>
          <el-table-column

            align="center"
            prop="opennumberlist"
            label="OPEN NUMBER"
          >
            <template slot-scope="scope">

              <div class="num">

                <div v-for="(item,index) in scope.row.opennumberlist" :key="index" class="ball">
                  {{ item }}
                </div>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="box" />
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import jQuery from 'jquery'

// import CardClockItem from '@/components/CardClock/CardClockItem'
var elem = null
jQuery.fn.countdown = (userOptions) => {
  // Default options
  var options = {
    stepTime: 60,
    // startTime and format MUST follow the same format.
    // also you cannot specify a format unordered (e.g. hh:ss:mm is wrong)
    format: 'dd:hh:mm:ss',
    startTime: '01:12:32:55',
    digitImages: 6,
    digitWidth: 67,
    digitHeight: 90,
    timerEnd: function() {},
    image: 'digits.png'
  }
  var digits = []; var intervals = []

  // Draw digits in given container
  var createDigits = function(where) {
    var c = 0
    // Iterate each startTime digit, if it is not a digit
    // we'll asume that it's a separator
    for (var i = 0; i < options.startTime.length; i++) {
      if (parseInt(options.startTime[i]) >= 0) {
        elem = $('<div id="cnt_' + c + '" class="cntDigit" />').css({
          height: options.digitHeight,
          float: 'left',
          background: 'url(\'' + options.image + '\')',
          width: options.digitWidth
        })

        elem.current = parseInt(options.startTime[i])
        digits.push(elem)

        margin(c, -elem.current * options.digitHeight * options.digitImages)

        // Add max digits, for example, first digit of minutes (mm) has
        // a max of 5. Conditional max is used when the left digit has reach
        // the max. For example second "hours" digit has a conditional max of 4
        switch (options.format[i]) {
          case 'h':
            digits[c]._max = function(pos, isStart) {
              if (pos % 2 === 0) { return 2 } else { return (isStart) ? 3 : 9 }
            }
            break
          case 'd':
            digits[c]._max = function() { return 9 }
            break
          case 'm':
          case 's':
            digits[c]._max = function(pos) { return (pos % 2 === 0) ? 5 : 9 }
        }
        ++c
      } else {
        elem = $('<div class="cntSeparator"/>').css({ float: 'left' })
          .text(options.startTime[i])
      }

      where.append(elem)
    }
  }

  // Set or get element margin
  var margin = function(elem, val) {
    if (val !== undefined) {
      digits[elem].margin = val
      return digits[elem].css({ 'backgroundPosition': '0 ' + val + 'px' })
    }

    return digits[elem].margin || 0
  }

  var makeMovement = function(elem, steps, isForward) {
    // Stop any other movement over the same digit.
    if (intervals[elem]) { window.clearInterval(intervals[elem]) }

    // Move to the initial position (We force that because in chrome
    // there are some scenarios where digits lost sync)
    var initialPos = -(options.digitHeight * options.digitImages *
                       digits[elem].current)
    margin(elem, initialPos)
    digits[elem].current = digits[elem].current + ((isForward) ? steps : -steps)

    var x = 0
    intervals[elem] = setInterval(function() {
      if (x++ === options.digitImages * steps) {
        window.clearInterval(intervals[elem])
        delete intervals[elem]
        return
      }

      var diff = isForward ? -options.digitHeight : options.digitHeight
      margin(elem, initialPos + (x * diff))
    }, options.stepTime / steps)
  }

  // Makes the movement. This is done by "digitImages" steps.
  var moveDigit = function(elem) {
    if (digits[elem].current === 0) {
      // Is there still time left?
      if (elem > 0) {
        var isStart = (digits[elem - 1].current === 0)

        makeMovement(elem, digits[elem]._max(elem, isStart), true)
        moveDigit(elem - 1)
      } else { // That condition means that we reach the end! 00:00.
        for (var i = 0; i < digits.length; i++) {
          clearInterval(intervals[i])
          margin(i, 0)
        }
        options.timerEnd()
      }

      return
    }

    makeMovement(elem, 1)
  }

  $.extend(options, userOptions)
  createDigits($('.digits'))
  intervals.main = setInterval(function() { moveDigit(digits.length - 1) },
    1000)
}
console.log($('.digits').countdown)

export default {
  name: 'Home',
  components: {
    // CardClockItem
  },
  data() {
    return {
      timeList: '',
      ti: '24:50',
      top1: 0,
      top2: 0,
      top4: 0,
      top3: 0,
      timer1: null,
      timer2: null,
      timer3: null,
      timer: null,
      active: 0,
      changeItem: ['LAST 20 ISSUES', 'LAST 50 ISSUES', 'LAST 100 ISSUES'],
      productList: [{ name: 'fast there', time: '1.5 Minutes' },
        { name: 'fast there', time: '3 Minutes' },
        { name: 'fast there', time: '3 Minutes' },
        { name: 'shishical', time: '1.5 Minutes' },
        { name: 'fast there', time: '3 Minutes' },
        { name: 'fast there', time: '3 Minutes' },
        { name: 'shishical', time: '1.5 Minutes' },
        { name: 'shishical', time: '1.5 Minutes' }
      ],
      tableData: [{
        issue: '20190817-1149',
        time: '2019-08-17 21:09:00',
        opennumber: '12345',
        opennumberlist: []
      }, {
        issue: '20190817-1149',
        time: '2019-08-17 21:09:00',
        opennumber: '12345',
        opennumberlist: []
      }, {
        issue: '20190817-1149',
        time: '2019-08-17 21:09:00',
        opennumber: '12345',
        opennumberlist: []
      }, {
        issue: '20190817-1149',
        time: '2019-08-17 21:09:00',
        opennumber: '12345',
        opennumberlist: []
      }, {
        issue: '20190817-1149',
        time: '2019-08-17 21:09:00',
        opennumber: '12345',
        opennumberlist: []
      }, {
        issue: '20190817-1149',
        time: '2019-08-17 21:09:00',
        opennumber: '12345',
        opennumberlist: []
      },
      {
        issue: '20190817-1149',
        time: '2019-08-17 21:09:00',
        opennumber: '12345',
        opennumberlist: []
      }]
    }
  },
  watch: {
    $route: {
      handler: function(val, oldVal) {
        console.log(val.query.noticeId)
      },
      // 深度观察监听
      deep: true
    }
  },
  mounted() {
    // setInterval(() => {
    //   this.init()
    // }, 1000)
    console.log(this.$route.query.noticeId)
    console.log(this.tableData)
    for (var i in this.tableData) {
      var list = this.tableData[i].opennumber.split('')
      for (var j = 0; j < list.length; j++) {
        this.tableData[i].opennumberlist.push(list[j])
      }
    }
    var that = this

    $(function() {
      $('.digits').countdown({
        image: that.$refs.img.src,
        // image: './digits.png',
        format: 'hh:mm:ss',
        startTime: that.ti
      })
    })
  },
  methods: {
    handelVideo(index) {
      console.log(index)
    },
    changeIssue(index) {
      this.active = index
    },
    headerRowClassName({ row, rowIndex }) {
      return 'success-row'
    },
    tableRowClassName({ row, rowIndex }) {
      // console.log(rowIndex)
      if (rowIndex % 2 === 0) {
        return 'warning-row'
      } else if (rowIndex % 2 === 1) {
        return 'success-row'
      }
      return ''
    }
  }
}
</script>
<style lang="scss" scoped>
.notice{
// /deep/.clock {
//   display: flex;

//   .divider {
//     font-size: 66px;
//     line-height: 102px;
//     font-style: normal;
//   }

//   .flip {
//     position: relative;
//     width: 60px;
//     height: 90px;
//     margin: 2px;
//     font-size: 66px;
//     line-height: 90px;
//     text-align: center;
//     // background: white;
//     background-image: url('~@/assets/images/ggg.png');
//     background-repeat: no-repeat;
//     background-size: 58px 90px;
//     border: 1px solid black;
//     border-radius: 10px;
//     box-shadow: 0 0 6px rgba(0, 0, 0, 0.5);
//     -webkit-box-reflect: below 1px
//       linear-gradient(transparent, rgba(0, 0, 0, 0.4));

//     // basic
//     .digital {
//       &::before,
//       &::after {
//         position: absolute;
//         content: attr(data-number);
//         left: 0;
//         right: 0;
//         color: white;
//         // background: #000;
//         overflow: hidden;
//         perspective: 160px;

//       }

//       &::before {
//         top: 0;
//         bottom: 50%;
//         border-bottom: 1px solid #666;
//         border-radius: 10px 10px 0 0;
//         background-image: url('~@/assets/images/ggg.png');
//         background-repeat: no-repeat;
//         background-size: 58px 90px;
//       }

//       &::after {
//         top: 50%;
//         bottom: 0;
//         line-height: 0;
//         border-radius: 0 0 10px 10px;
//       }
//     }

//     // stack
//     .back::before,
//     .front::after {
//       z-index: 1;
//       transition: all 0.1s linear;
//     }

//     .back::after {
//       z-index: 2;
//     }

//     .front::before {
//       z-index: 3;
//     }

//     // animation
//     .back::after {
//       transform-origin: center top;
//       transform: rotateX(0.5turn);
//     }

//     &.running {
//       .front::before {
//         transform-origin: center bottom;
//         animation: frontFlipDown 0.6s ease-in-out;
//         box-shadow: 0 -2px 6px rgba(255, 255, 255, 0.3);
//         backface-visibility: hidden;

//       }
//       .back::after {
//         animation: backFlipDown 0.6s ease-in-out;
//          backface-visibility: hidden;
//       }
//     }
//   }
// }

// @keyframes frontFlipDown {
//   to {
//     // transform: rotateX(0.5turn);
//      transform: rotateX(0.5turn);
//     // z-index: 6;
//   }
// }

// @keyframes backFlipDown {
//   to {
//     transform: rotateX(0);

//   }
// }

  padding: 20px;
  background-color: #fff;
  margin-bottom: 90px;
  .notice-head{
    height: 200px;
    background-image: url('~@/assets/images/LB（banner1）.png');
    background-repeat: no-repeat;
    background-size: cover;
    padding: 30px 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .nh-img{
      padding: 4px;
      border-radius: 50%;
      background-color: #fff;
    }
    .name{
      width: 450px;
      height: 46px;
      background-color: rgba(0,0,0,0.4);
      position: relative;
      border-radius: 8px;
      .text {
        text-align: center;
        line-height: 46px;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        color: #fff;
        font-size: 20px;
      }
    }
    .pro-num{
      display: flex;
      margin-top: 10px;
      justify-content: space-between;
      align-items: center;
      .pro-ball{
          width: 80px;
          line-height: 80px;
          background-image: url('~@/assets/images/Lb-ball.png');
          background-repeat: no-repeat;
          background-size: contain;
          font-size: 24px;
          font-weight: 700;
          text-align: center;
        }
    }
    .time{
      overflow: hidden;
      display: flex;
      align-items: center;
      color: #fff;
      font-size: 60px;
       height: 90px;
        padding-top: 5px;
      //  margin-bottom: 23px;
      .imge{
        display: none;
      }
      .minute,.seconds{
        display: flex;
        background-color: #0c0a17;
        padding: 8px;
        margin-top: 23px;
        border-radius: 10px;
      }
      .time4{
        width: 62px;
        height: 90px;
        overflow: hidden;
        position: relative;
        // background:url('~@/assets/images/digits.png')
        background-image: url('~@/assets/images/digits.png');
        background-position: 0px 0px;
        // transition: all 1s linear
        // img{
        //   position: absolute;
        //   top: -4859px;//4320
        //   transition: all 1s linear;
        // }
      }
    }
  }

  .video{
    margin: 20px 0;
    display: flex;
    // justify-content: space-between;
    // .display{

    // }
    .other-video{

      width: 528px;
      .title{
        margin-left: 20px;
        letter-spacing: 2px;
        height: 30px;
        font-size: 18px;
        font-weight: 700;
        color:#02a3e0;
        border-bottom: 2px solid #02a3e0;
      }
      .video-list{
        display: flex;
        flex-wrap: wrap;

        .video-item{
          cursor: pointer;
          margin-left: 20px;
          margin-top: 20px;
          img{
            width: 156px;
          }
        }
      }
    }
  }
  .table{
    // background-color: #e8ecfc;
    position: relative;
    .changeList{
      display: flex;
      justify-content: flex-end;
      .changeitem{
        cursor: pointer;
        background-color: #ccc;
        color: #fff;
        line-height: 46px;
        padding: 0 10px;
        margin-left:24px;
        &.active{
          background-color: #00adef;
        }
      }
    }
    .tableHeader{
      background-color: #e8ecfc;
      color: #272626;
      font-size: 14px;
    }

   /deep/ .el-table {
     thead{
        background-color: #e8ecfc;
        color: #272626;
        font-size: 14px;
        text-align: center;
      }
      .warning-row {
          background: #c9cfe9;
      }
        .success-row {
          background: #e8ecfc;
      }

      .num{
        display: flex;
        justify-content: center;
        align-items: center;
        .ball{
          width: 45px;
          line-height: 45px;
          border-radius: 50%;
          background-color: #a0a0a0;
          color: #fefefe;
          font-size: 20px;
          margin-right: 10px;
        }
      }
      .issue,.time{
        font-size: 16px;
        color: #272626;
      }
   }
  .box{
    position: absolute;
    top: 46px;
    left: 0;
    right: 0;
    bottom: 0;
  }
  }

}

</style>
