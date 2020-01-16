<template>
  <div class="contact">
    <div class="img">
      <img src="~@/assets/images/LB（banner）.png" alt="" />
      <div class="analy">
        <div class="title">
          LB 1.5 LOTTO
        </div>
        <div class="dis">
          ALL DRAW NUMBERS ARE SUBJECT TO LIVE DRAW
        </div>
      </div>
    </div>
    <div class="content layout-width">
      <div class="table">
        <div class="table-title">
          FIVE-STAR BASIC TREND
        </div>
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
              prop="opennumber"
              label="OPEN NUMBER"
            >
              <template slot-scope="scope">
                <div class="time">
                  {{ scope.row.opennumber }}
                </div>

              </template>
            </el-table-column>
            <el-table-column

              align="center"
              prop="five"
              label="FIVE"
            >
              <template slot-scope="scope">

                <div ref="ball1" class="num">

                  <div
                    v-for="(item,index) in 10"
                    :key="index"
                    class="ball"
                    :class="index==scope.row.opennumber.split('')[4]?'activeball':''"
                  >
                    {{ index }}
                  </div>
                </div>
              </template>
            </el-table-column>
            <el-table-column

              align="center"
              prop="four"
              label="FOUR"
            >
              <template slot-scope="scope">

                <div ref="ball2" class="num">

                  <div
                    v-for="(item,index) in 10"
                    :key="index"
                    class="ball"
                    :class="index==scope.row.opennumber.split('')[3]?'activeball':''"
                  >
                    {{ index }}
                  </div>
                </div>
              </template>
            </el-table-column>
            <el-table-column

              align="center"
              prop="there"
              label="THERE"
            >
              <template slot-scope="scope">

                <div ref="ball3" class="num">

                  <div
                    v-for="(item,index) in 10"
                    :key="index"
                    class="ball"
                    :class="index==scope.row.opennumber.split('')[2]?'activeball':''"
                  >
                    {{ index }}
                  </div>
                </div>
              </template>
            </el-table-column>
            <el-table-column

              align="center"
              prop="two"
              label="TWO"
            >
              <template slot-scope="scope">

                <div ref="ball4" class="num">

                  <div
                    v-for="(item,index) in 10"
                    :key="index"
                    class="ball"
                    :class="index==scope.row.opennumber.split('')[1]?'activeball':''"
                  >
                    {{ index }}
                  </div>
                </div>
              </template>
            </el-table-column>
            <el-table-column

              align="center"
              prop="one"
              label="ONE"
            >
              <template slot-scope="scope">

                <div ref="ball5" class="num">

                  <div
                    v-for="(item,index) in 10"
                    :key="index"
                    class="ball"
                    :class="index==scope.row.opennumber.split('')[0]?'activeball':''"
                  >
                    {{ index }}
                  </div>
                </div>
              </template>
            </el-table-column>
          </el-table>
          <div class="b-border" />
        </div>
        <div class="can">
          <canvas id="canvas" class="canvas" />
        </div>
      </div>

    </div>

  </div>
</template>

<script>
let canvas
let ctx
export default {

  data() {
    return {
      active: 0,
      changeItem: ['LAST 20 ISSUES', 'LAST 50 ISSUES', 'LAST 100 ISSUES', 'QUERY BY DAY'],
      tableData: [{
        issue: '20190817246',
        opennumber: '90663',
        five: '0123456789',
        four: '0123456789',
        there: '0123456789',
        two: '0123456789',
        noe: '0123456789'
      }, {
        issue: '20190817246',
        opennumber: '07275',
        five: '0123456789',
        four: '0123456789',
        there: '0123456789',
        two: '0123456789',
        noe: '0123456789'
      }, {
        issue: '20190817246',
        opennumber: '58710',
        five: '0123456789',
        four: '0123456789',
        there: '0123456789',
        two: '0123456789',
        noe: '0123456789'
      }, {
        issue: '20190817246',
        opennumber: '56987',
        five: '0123456789',
        four: '0123456789',
        there: '0123456789',
        two: '0123456789',
        noe: '0123456789'
      }, {
        issue: '20190817246',
        opennumber: '23145',
        five: '0123456789',
        four: '0123456789',
        there: '0123456789',
        two: '0123456789',
        noe: '0123456789'
      }, {
        issue: '20190817246',
        opennumber: '98752',
        five: '0123456789',
        four: '0123456789',
        there: '0123456789',
        two: '0123456789',
        noe: '0123456789'
      }, {
        issue: '20190817246',
        opennumber: '62314',
        five: '0123456789',
        four: '0123456789',
        there: '0123456789',
        two: '0123456789',
        noe: '0123456789'
      }, {
        issue: '20190817246',
        opennumber: '20132',
        five: '0123456789',
        four: '0123456789',
        there: '0123456789',
        two: '0123456789',
        noe: '0123456789'
      }, {
        issue: '20190817246',
        opennumber: '89546',
        five: '0123456789',
        four: '0123456789',
        there: '0123456789',
        two: '0123456789',
        noe: '0123456789'
      }, {
        issue: '20190817246',
        opennumber: '88511',
        five: '0123456789',
        four: '0123456789',
        there: '0123456789',
        two: '0123456789',
        noe: '0123456789'
      }, {
        issue: '20190817246',
        opennumber: '88511',
        five: '0123456789',
        four: '0123456789',
        there: '0123456789',
        two: '0123456789',
        noe: '0123456789'
      }]
    }
  },
  watch: {
    $route: {
      handler: function(val, oldVal) {
        console.log(val.query.anaId)
      },
      // 深度观察监听
      deep: true
    }
  },
  mounted() {
    console.log(this.$route.query.anaId)
    this.initCanvas()
    // 当调整窗口大小时重绘canvas
    window.onresize = () => {
      if (document.getElementById('canvas')) {
        this.initCanvas()
      }
    }
  },
  methods: {
    initCanvas() {
      console.log('初始化canvas')
      canvas = document.getElementById('canvas')
      // console.log(this.tableData.length)
      ctx = canvas.getContext('2d')
      canvas.width = 803// 161*5-2
      var length = this.tableData.length
      canvas.height = 50 * length - 5// 50*10-5
      this.drawSmile()
    },
    drawSmile() {
      var data1 = []
      var data2 = []
      var data3 = []
      var data4 = []
      var data5 = []
      var da = this.tableData
      for (var i in da) {
        var val = da[i].opennumber.split('')[4]
        var val1 = da[i].opennumber.split('')[3]
        var val2 = da[i].opennumber.split('')[2]
        var val3 = da[i].opennumber.split('')[1]
        var val4 = da[i].opennumber.split('')[0]
        data1.push(val)
        data2.push(val1)
        data3.push(val2)
        data4.push(val3)
        data5.push(val4)
      }
      console.log(data2)
      ctx.lineWidth = 2
      ctx.strokeStyle = '#02d2ff'
      ctx.moveTo((10 + 13.5 * data1[0] + 9), (25 + 50 * 0))// 13.5 18 6.75
      for (var i1 = 1; i1 < data1.length; i1++) {
        ctx.lineTo((10 + 13.5 * data1[i1] + 9), (25 + 50 * i1))
      }
      ctx.stroke()
      ctx.moveTo((161 * 1 + 10 + 13.5 * data2[0] + 9), (25 + 50 * 0))// 13.5 18 6.75
      for (var i2 = 1; i2 < data2.length; i2++) {
        ctx.lineTo((161 * 1 + 10 + 13.5 * data2[i2] + 9), (25 + 50 * i2))
      }
      ctx.stroke()
      ctx.moveTo((161 * 2 + 10 + 13.5 * data3[0] + 9), (25 + 50 * 0))// 13.5 18 6.75
      for (var i3 = 1; i3 < data2.length; i3++) {
        ctx.lineTo((161 * 2 + 10 + 13.5 * data3[i3] + 9), (25 + 50 * i3))
      }
      ctx.stroke()
      ctx.moveTo((161 * 3 + 10 + 13.5 * data4[0] + 9), (25 + 50 * 0))// 13.5 18 6.75
      for (var i4 = 1; i4 < data2.length; i4++) {
        ctx.lineTo((161 * 3 + 10 + 13.5 * data4[i4] + 9), (25 + 50 * i4))
      }
      ctx.stroke()
      ctx.moveTo((161 * 4 + 10 + 13.5 * data5[0] + 9), (25 + 50 * 0))// 13.5 18 6.75
      for (var i5 = 1; i5 < data2.length; i5++) {
        ctx.lineTo((161 * 4 + 10 + 13.5 * data5[i5] + 9), (25 + 50 * i5))
      }
      ctx.stroke()
      // ctx.beginPath()
      // ctx.arc(75, 75, 50, 0, Math.PI * 2, true) // 绘制
      // ctx.moveTo(110, 75)

      // ctx.arc(75, 75, 35, 0, Math.PI, false) // 口(顺时针)
      // ctx.moveTo(65, 65)
      // ctx.arc(60, 65, 5, 0, Math.PI * 2, true) // 左眼
      // ctx.moveTo(95, 65)
      // ctx.arc(90, 65, 5, 0, Math.PI * 2, true) // 右眼
      // ctx.stroke()
      // ctx.lineWidth = 10;
      //  ctx.beginPath()
      // cxt.moveTo(10,10);
      // cxt.lineTo(150,50);
      // cxt.lineTo(10,50);
      // cxt.stroke();
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
        return 'success-row'
      } else if (rowIndex % 2 === 1) {
        return 'success-row'
      }
      return ''
    }
  }
}
</script>

<style scoped lang="scss">
.contact{
  .img{
    position: relative;
    img{
       @include img;
    }
    .analy{
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-image: url('~@/assets/images/LB（banner）.png');
      background-repeat: no-repeat;
      background-size: contain;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .title{
        color:#edc032;
        font-size: 100px;
        width: 350px;
        line-height: 100px;
        font-style:italic;
        text-shadow: 1px 1px 0px #FFFFFF, -1px -1px 0px #FFFFFF, 2px 2px 0px #FFFFFF, -2px -2px 0px #FFFFFF, 3px 3px 0px #FFFFFF, -3px -3px 0px #FFFFFF
      }
      .dis{
        margin-top: 20px;
        color: #fff;
        font-size: 24px;
        line-height: 50px;
        text-shadow: 1px 1px 0px #000, -1px -1px 0px #000, 2px 2px 0px #000, -2px -2px 0px #000, 3px 3px 0px #000, -3px -3px 0px #000;
        border-top: 1px solid #fff;
        border-bottom: 1px solid #fff;
      }
    }
  }
  .content{
    padding: 36px;
    padding-left: 34px;
    background-color: #fff;
    position: relative;
    top: -35px;
    margin-bottom: 45px;
    .table{
      position: relative;
      z-index: 10;
          .table-title{
            text-align: center;
            color:#6e7391;
            font-size: 28px;
            padding-top: 33px;
            border-left: 2px solid #fff;
            padding-bottom: 17px;
            background-color: #e9ecfd;
          }
          .changeList{
            display: flex;
            justify-content: flex-end;
            padding-bottom: 10px;
            border-left: 2px solid #fff;
            background-color: #e9ecfd;
            .changeitem{
              cursor: pointer;
              // background-color: #ccc;
              color: #343940;
              line-height: 30px;
              padding: 0 10px;
              margin-left:10px;
              font-weight: 600;
              font-size: 12px;
              &.active{
                background-color: #c9ceeb;
                color: #fff;
              }
            }
          }
          // .tableHeader{
          //   background-color: #e8ecfc;
          //   color: #272626;
          //   font-size: 14px;
          // }
          .tabel-content{
            background-color: #ffffff;

            /deep/ .el-table {
            background: #fff;
            border-bottom: none;
            thead{
                background-color: #e8ecfc;
                color: #606687;
                font-size: 14px;
                text-align: center;

              }
              .warning-row {
                  background: #c9cfe9;
              }
                .success-row {
                  background: #e9ecfd;
              }
              th.is-leaf{
                // border-bottom: 2px solid #fff;
                border-top: 2px solid #fff;
                border-left: 2px solid #fff;
              }
              td{
                // border-bottom: 2px solid #fff;
                border-top: 2px solid #fff;
                border-left: 2px solid #fff;
              }
              .num{
                display: flex;
                justify-content: space-between;
                align-items: center;

                .ball{

                  color: #242425;
                  font-size: 19px;
                    z-index: 20;
                  &.activeball{
                    // font-size: 14px;
                    // width: 20px;
                    line-height: 12px;
                    padding: 3px;
                    background-color: #02d2ff;
                    border-radius: 50%;
                    position: relative;
                    z-index: 20;
                  }
                }
              }
              .issue,.time{
                font-size: 20px;
                color: #242425;

              }
              .time{
              letter-spacing: 4px;

              }
          }
          .b-border{
            position: relative;
            top: -1px;
            z-index: 200;
            border-bottom: 1px solid #fff;
          }
          }
      .can{
        position: absolute;
        // top: 180px;
        // left: 327px;
        right: 0;
        bottom: 0;
         z-index: 15;
      }
    }
  }
}
</style>
