<template>
  <div class="news">
    <div class="img">
      <img src="~@/assets/images/5LB_news_02--1.jpg" alt="" />
    </div>
    <div class="content layout-width">
      <div class="news-list">
        <div v-for="(item,index) in 5" :key="index" class="news-item">
          <img src="~@/assets/images/5LB_news_05.jpg" alt="" />
          <div class="item-text">
            <div class="title">
              <a @click="handeldetail(index)">
                {{ newsList[0].title }}
              </a>

            </div>
            <div class="time">
              {{ newsList[0].time }}
            </div>
            <div class="dis">
              {{ newsList[0].dis }}
            </div>
            <div class="view">
              <a @click="handeldetail(index)">
                VIEW
              </a>

            </div>
          </div>
        </div>
      </div>
      <div class="pagination">
        <el-pagination
          :page-size="5"
          layout="prev, pager, next"
          :total="20"
        />
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      newsList: [
        {
          title: 'What are the differences between US lottery  Chinese lottery !',
          time: '2019-12-24',
          dis: 'Therefore, finding a site that regularly offers a low vig is extremely important in online sports betting. After all, no one is right 100% of the time in the online betting scene. Ergo, finding a way to minimize all losses can be extremely helpful in the long run.'
        }
      ]
    }
  },
  methods: {
    handeldetail(id) {
      this.$router.push({ path: '/newsdetail', query: { id: id }})
    }
  }
}
</script>

<style scoped lang="scss">
.news{
  .img{
    img{
      @include img;
    }
  }
  .content{
    padding: 36px;
    background-color: #fff;
    position: relative;
    top: -35px;
    margin-bottom: 45px;
    .news-list{
      .news-item{
        width: 100%;
        display: flex;
        height: 202px;
        margin-bottom: 36px;
        img{
          width: 362px;
        }
        .item-text{
          width: 915px;
          // height: 100%;
          background-color: #f8f7f7;
          padding: 26px;
          position: relative;
          .title{
            cursor: pointer;
            a{
              cursor: pointer;
              color:#00adef;
              font-size: $font-title;
              text-transform:uppercase;
               &:hover{
                text-decoration: underline;
              }
            }

          }
          .time{
            color: #969696;
            font-size: $font-content;
            margin-top: 10px;
          }
          .dis{
            margin-top: 2px;
            line-height: 22px;
            color:#646464;
            font-size: $font-content;
            text-align: justify;
          }
          .view{
            cursor: pointer;
            a{
              font-size: $font-title;
              color: #00adef;
              position: absolute;
              right: 26px;
              bottom: 26px;
            }

          }
        }
      }
    }
     /deep/ .el-pagination{
       text-align: center;
      .btn-prev, .btn-next{
        border: 1px solid #d0d9e3;

        i{
          color: #d0d9e3;
        }

      }
     .el-pager{

        li{

           border: 1px solid #d0d9e3;
          color: #d0d9e3;
          &.active{
            background-color: #20a0ff;
             color: #fff;
          }
        }
        // li.actuve{
        //    color: #fff;
        //    background-color: #20a0ff;
        // }
      }
    }
  }
}
</style>
