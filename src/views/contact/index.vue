<template>

  <div class="contact">
    <div class="img">
      <img src="~@/assets/images/7LB_contact-us_02.jpg" alt="" />
    </div>
    <div class="content layout-width">
      <div class="title">
        CONTACT US
      </div>
      <div class="info">
        <div class="left">
          <div class="row">
            <div class="inf">TELELPHONE</div>
            : 0755-83435900/83436208
          </div>
          <div class="row">
            <div class="inf">address</div>
            : Ghana Accra Circle
          </div>

          <div class="row">
            <div class="inf">WEBSITE</div>
            : http://www.lblotto.com/index.html
          </div>
          <div class="row">
            <div class="inf"> EMAIL</div>
            : bLotto@jqzs.net.cn
          </div>
          <div class="row">
            <div class="inf"> SKYPE</div>
            : LB@skype
          </div>
          <div class="row">
            <div class="inf"> FACEBOOK</div>
            : LB0558461952
          </div>
          <div class="row">
            <div class="inf"> WHATSAPP</div>
            : LB@64462649
          </div>
        </div>
        <div class="right">
          <img src="~@/assets/images/7LB_contact-us_05.jpg" alt="" />
        </div>
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

.contact{
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
    .title{
      margin-top: 80px;
      font-size: 36px;
      color:#00adef;
    }
    .info{
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
      .left{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .row {
            font-size: 24px;
            color: #333333;
            display: flex;
            line-height: 40px;
            .inf{
              width: 152px;
              text-align: right;
              text-transform: uppercase;
            }
        }
      }
      .right{
        img{
          width: 340px;
          height: 340px;
        }
      }
    }
  }
}
</style>
