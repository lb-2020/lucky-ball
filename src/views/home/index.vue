<template>
  <div class="home">

    <el-row type="flex" class="row-bg img" justify="space-between">
      <el-col :span="7">
        <div class="pr">
          <img ref="pr" src="~@/assets/images/1LB_home_06.jpg" alt="" />
        </div>

      </el-col>
      <el-col :span="10">
        <div class="center">
          <img ref="cen" src="~@/assets/images/1LB_home_08.jpg" alt="" />
        </div>

      </el-col>
      <el-col :span="7">
        <div class="pl">
          <img src="~@/assets/images/1LB_home_10.jpg" alt="" />
        </div>

      </el-col>

    </el-row>

    <!-- <div class="img">
      <img src="~@/assets/images/1LB_home_06.jpg" alt="" />
      <img class="center" src="~@/assets/images/1LB_home_08.jpg" alt="" />
      <img src="~@/assets/images/1LB_home_10.jpg" alt="" />
    </div> -->
    <div class="product layout-width">
      <div class="title">PRODUCT</div>
      <div class="product-list">
        <div v-for="(item,index) in productList" :key="index" class="product-item" @click="handelProduct(index)">
          <img src="~@/assets/images/1LB_home_15.jpg" alt="" />
          <div class="play">
            <span>PLAY NOW</span>
          </div>
          <div class="dis">
            <span>{{ item.name }}</span>
            <span>{{ item.time }}</span>
          </div>
          <div class="box">
            <div class="box-inner">
              <div class="iconfont icon-bofang" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- u=分享的连接 t标题 -->

  </div>
</template>
<script>

export default {
  name: 'Home',
  components: {},
  data() {
    return {
      screenWidth: null,
      screenHeight: null,
      productList: [{ name: 'fast there', time: '1.5 Minutes' },
        { name: 'fast there', time: '3 Minutes' },
        { name: 'fast there', time: '3 Minutes' },
        { name: 'shishical', time: '1.5 Minutes' },
        { name: 'fast there', time: '3 Minutes' },
        { name: 'fast there', time: '3 Minutes' },
        { name: 'shishical', time: '1.5 Minutes' },
        { name: 'shishical', time: '1.5 Minutes' }
      ]
    }
  },
  mounted() {
    this.screenWidth = document.body.clientWidth
    this.screenHeight = document.body.clientHeight
    this.$refs.pr.onload = () => {
      if (this.$refs.pr) {
        var height = this.$refs.pr.offsetHeight
        this.$refs.cen.style.height = height + 'px'
      }
    }
    window.onresize = () => {
      if (this.$refs.pr) {
        var height = this.$refs.pr.offsetHeight
        this.$refs.cen.style.height = height + 'px'
      }
    }
  },
  methods: {
    handelProduct(index) {
      this.$router.push({ path: '/notice', query: { noticeId: index }})
    }
  }
}
</script>
<style lang="scss" scoped>
.home{

  .img {
    display: flex;
    justify-content: space-between;
    position: relative;
     img{
      width: 100%;
      max-height: 330px;
      min-height: 200px;
      object-fit: cover;
    }
    .center{

      margin:  0 20px;

    }
  }
  // @media screen and (max-width:1920px) and (min-width: 1200px) {
  //   .img {
  //     img{

  //         height: 330px;
  //         object-fit: cover;
  //       }

  //     }

  // }
 .product{
    margin-top: 12px;
    margin-bottom: 90px;
   padding: 50px 0px;
   background-color: #fff;
   .title{
     font-size: 20px;
     margin-left: 40px;
   }
   .product-list{
     display: flex;
     flex-wrap: wrap;

     .product-item{
       margin-left: 40px;
       width: 350px;
       height: 232px;
       margin-bottom: 10px;
       position: relative;
       cursor: pointer;
       &:hover .box{
         opacity: 1;
       }
       .box{
         transition: all 0.3s linear;
         opacity: 0;
         position: absolute;
         top: 0;
         right: 0;
         width: 98px;
         height: 98px;
         border-radius: 50%;
         background-color: rgba(0,0,0,0.3);
         .box-inner{
           width: 100%;
           height: 100%;
           border-radius: 50%;
           display: flex;
           justify-content: center;
           align-items: center;
           div{
             color: #fff;
             font-size: 40px;
           }
         }
       }
      .dis{
          position: absolute;
          top: 50px;
          left: 30px;
          span{
            display: block;
            color: #fff;
            font-size: 20px;
          }
          span+span{
            margin-top: 4px;
            font-size: 26px;
          }
        }
       img{
         vertical-align:top;
         width: 100%;

       }
       .play{
         height: 56px;
         width: 343px;
         box-shadow: 0px 2px 9px 0px #f6f6f6;
        border-bottom-right-radius:10px;
        border-bottom-left-radius:10px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        span{
          width: 146px;
          line-height: 42px;
          text-align: center;
          border-radius: 21px;
          background-color: #49d806;
          color: #fff;
          font-size: 18px;
          margin-right: 2px;
        }
       }
     }
   }
 }
}
</style>
