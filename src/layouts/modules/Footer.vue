<template>
  <div class="page-footer">
    <div class="layout-width content">
      <div class="followus">
        <div class="text">Follow Us</div>
        <div class="icon-font">
          <a href="http://www.facebook.com/sharer.php?u=www.baidu.com&t=123213123">
            <div class="iconfont icon-facebook" /></a>
          <a href="https://twitter.com/intent/tweet?original_referer=http://www.microvolts.com/&text=MicroVolts%20Surge%20-%20Online%20Toy%20Shooter&tw_p=tweetbutton&url=http://www.microvolts.com&via=MicroVolts">
            <div class="iconfont icon-tuite" /></a>

          <div class="iconfont icon-ic_youtu_default" />
        </div>
      </div>
      <div class="logo">
        <img src="~@/assets/images/1LB_home_19.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
.page-footer {
  background: #222121;
  height: $footerHeight;
  // display: flex;
  // align-items: center;
  // .layout-width {
  //   position: relative;
  //   // height: 100%;
  // }
  .content{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    // width: 1200px;
    .followus{
      color: #fff;
      .text{
        font-size: 24px;
        margin-left: 5px;
      }
      .icon-font{
        display: flex;
        align-items: center;
        div{
          color: #fff;
          font-size: 36px;
          margin-right: 25px;
        }
        .icon-ic_youtu_default{
          font-size: 50px;
        }
      }
    }
    .logo{
      img{
        width: 126px;
       height: 90px;
      }
    }
  }

}
</style>
