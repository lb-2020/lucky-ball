<template>
  <div class="contact">
    <div class="img">
      <img src="~@/assets/images/8LB_about-us_02.jpg" alt="" />
    </div>
    <div class="content layout-width">
      <div class="title">
        <div class="line" />
        LBLOBTTERY
        <div class="line" />
      </div>
      <div class="info">
        <div class="left">
          <img src="~@/assets/images/8LB_about-us_05.jpg" alt="" />
        </div>
        <div class="right">
          LB is a professional lottery platform to provide high-quality, 100% real live live instant prize technology company. Committed to the development of high-quality, diversified video transmission, high-frequency lottery number and accuracy up to 99.9% of the lottery process, and strive to provide the vast lottery platform with fair, just, open, and real and authoritative live technology services
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
      font-size: 28px;
      color:#333;
      display: flex;
      align-items: center;
      justify-content: center;
      .line{
        border-top: 1px solid #999;
        border-bottom: 1px solid #444;
        width: 96px;
        margin: 0 5px;
      }
    }
    .info{
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
      .left{
        img{
          margin-top: 10px;
          margin-bottom: 40px;
          width: 450px;
        }
      }
      .right{
        padding-left: 40px;
        font-size: 22px;
        color: #666;
        line-height: 36px;
        text-align: justify;
      }
    }
  }
}
</style>
