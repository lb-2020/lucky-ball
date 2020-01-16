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
              <template>

                <div class="num">

                  <div v-for="(item,index) in 9" :key="index" class="ball">
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
              <template>

                <div class="num">

                  <div v-for="(item,index) in 9" :key="index" class="ball">
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
              <template>

                <div class="num">

                  <div v-for="(item,index) in 9" :key="index" class="ball">
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
              <template>

                <div class="num">

                  <div v-for="(item,index) in 9" :key="index" class="ball">
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
              <template>

                <div class="num">

                  <div v-for="(item,index) in 9" :key="index" class="ball" :class="index==5?'active':''">
                    {{ index }}
                  </div>
                </div>
              </template>
            </el-table-column>
          </el-table>
          <div class="b-border" />
        </div>
      </div>

      <div class="can">
        <canvas id="canvas" />
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
        opennumber: '97673',
        five: '0123456789',
        four: '0123456789',
        there: '0123456789',
        two: '0123456789',
        noe: '0123456789'
      }, {
        issue: '20190817246',
        opennumber: '97673',
        five: '0123456789',
        four: '0123456789',
        there: '0123456789',
        two: '0123456789',
        noe: '0123456789'
      }, {
        issue: '20190817246',
        opennumber: '97673',
        five: '0123456789',
        four: '0123456789',
        there: '0123456789',
        two: '0123456789',
        noe: '0123456789'
      }, {
        issue: '20190817246',
        opennumber: '97673',
        five: '0123456789',
        four: '0123456789',
        there: '0123456789',
        two: '0123456789',
        noe: '0123456789'
      }, {
        issue: '20190817246',
        opennumber: '97673',
        five: '0123456789',
        four: '0123456789',
        there: '0123456789',
        two: '0123456789',
        noe: '0123456789'
      }, {
        issue: '20190817246',
        opennumber: '97673',
        five: '0123456789',
        four: '0123456789',
        there: '0123456789',
        two: '0123456789',
        noe: '0123456789'
      }, {
        issue: '20190817246',
        opennumber: '97673',
        five: '0123456789',
        four: '0123456789',
        there: '0123456789',
        two: '0123456789',
        noe: '0123456789'
      }, {
        issue: '20190817246',
        opennumber: '97673',
        five: '0123456789',
        four: '0123456789',
        there: '0123456789',
        two: '0123456789',
        noe: '0123456789'
      }, {
        issue: '20190817246',
        opennumber: '97673',
        five: '0123456789',
        four: '0123456789',
        there: '0123456789',
        two: '0123456789',
        noe: '0123456789'
      }, {
        issue: '20190817246',
        opennumber: '97673',
        five: '0123456789',
        four: '0123456789',
        there: '0123456789',
        two: '0123456789',
        noe: '0123456789'
      }]
    }
  },
  mounted() {
    this.initCanvas()
    // 当调整窗口大小时重绘canvas
    window.onresize = () => {
      this.initCanvas()
    }
  },
  methods: {
    initCanvas() {
      console.log('初始化canvas')
      canvas = document.getElementById('canvas')
      console.log(canvas)
      ctx = canvas.getContext('2d')
      canvas.width = 200
      canvas.height = 200
      this.drawSmile()
    },
    drawSmile() {
      ctx.beginPath()
      ctx.arc(75, 75, 50, 0, Math.PI * 2, true) // 绘制
      ctx.moveTo(110, 75)
      ctx.arc(75, 75, 35, 0, Math.PI, false) // 口(顺时针)
      ctx.moveTo(65, 65)
      ctx.arc(60, 65, 5, 0, Math.PI * 2, true) // 左眼
      ctx.moveTo(95, 65)
      ctx.arc(90, 65, 5, 0, Math.PI * 2, true) // 右眼
      ctx.stroke()
    },
    changeIssue(index) {
      this.active = index
    },
    headerRowClassName({ row, rowIndex }) {
      return 'success-row'
    },
    tableRowClassName({ row, rowIndex }) {
      console.log(rowIndex)
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
          font-size: 20px;

          &.active{
            line-height: 14px;
            padding: 3px;
            background-color: #00adef;
            border-radius: 50%;
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

  }
  }
}
</style>
