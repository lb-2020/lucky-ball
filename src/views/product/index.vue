<template>
  <div class="product">
    <div class="img">
      <img src="~@/assets/images/2LB_product_02.jpg" alt="" />
    </div>
    <div class="content layout-width">
      <div id="boxFixed" class="product-list">
        <div v-for="(item,index) in productList" :key="index" class="product-item">
          <div class="left" @click="handeldetail(index)">
            <img src="~@/assets/images/2LB_product_05.jpg" alt="" />
            <div class="box">
              <div class="icon iconfont icon-bofang" />
            </div>
          </div>
          <div class="right">
            <div class="title">
              {{ item.title }}
            </div>
            <div class="dis">
              {{ item.dis }}
            </div>
          </div>
        </div>
      </div>
      <div v-loading="loading" class="loding" />
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      productList: [
        {
          title: 'Lb1.5 lotto',
          time: '2019-12-24',
          dis: 'Take  "good faith"   management  as the tenet Customers  are  increasing  year  by year. Join hands Big  website cooperation, mutual benefit and win-win situation.'
        },
        {
          title: 'Lb1.5 lotto',
          time: '2019-12-24',
          dis: 'Take  "good faith"   management  as the tenet Customers  are  increasing  year  by year. Join hands Big  website cooperation, mutual benefit and win-win situation.'
        },
        {
          title: 'Lb1.5 lotto',
          time: '2019-12-24',
          dis: 'Take  "good faith"   management  as the tenet Customers  are  increasing  year  by year. Join hands Big  website cooperation, mutual benefit and win-win situation.'
        }
      ]
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {

    handeldetail(id) {
      this.$router.push({ path: '/notice', query: { noticeId: id }})
    },
    handleScroll() {
      var that = this
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop // 滚动条偏移量
      if (document.querySelector('#boxFixed')) {
        var offsetTop = document.querySelector('#boxFixed').offsetHeight // 要滚动到顶部吸附的元素的偏移量
      }

      if (offsetTop - scrollTop < 100) {
        // console.log('kkk')
        this.loading = true
        if (this.loading === false) {
          this.loading = true
          var data = {
            title: 'Lb1.5 lotto',
            time: '2019-12-24',
            dis: 'Take  "good faith"   management  as the tenet Customers  are  increasing  year  by year. Join hands Big  website cooperation, mutual benefit and win-win situation.'
          }
          setTimeout(() => {
            this.productList.push(data)
            that.loading = false
          }, 2000)
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.product{
  .img{
    img{
      @include img;
    }
  }
  .content{
    // padding: 36px;
    // background-color: #fff;
    position: relative;

    margin-bottom: 45px;
    .product-list{
      .product-item{
        margin-top: 30px;
        padding: 36px;
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        .left{
          position: relative;
          img{
            width: 520px;
          }
          .box{
            cursor: pointer;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #000;
            opacity: 0.5;
            display: flex;
            align-items: center;
            justify-content: center;
            .icon{
              color: #fff;
              font-size: 60px;
            }
          }
        }
        .right{
          width: 500px;
          .title{
            font-weight: 600;
            color: #00b8ff;
            font-size-adjust: 28px;
            font-size: 24px;
            text-transform: uppercase;
            word-spacing: 5px;
            letter-spacing: 2px;
          }
          .dis{

            color: #474748;
            font-size: 22px;
            line-height: 42px;
            text-align: justify;
          }
        }
      }
    }
    .loding{
      background: $primaryColor;
      margin-top: 10px;
      height: 46px;
      /deep/ .el-loading-mask{
        background-color: $primaryColor;
      }
    }
  }
}
</style>
