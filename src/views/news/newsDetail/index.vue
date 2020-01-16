<template>
  <div class="news">
    <div class="img">
      <img src="~@/assets/images/5LB_news_02--1.jpg" alt="" />
    </div>
    <div class="content layout-width">
      <div class="left">
        <div class="title">
          {{ data.title }}
        </div>
        <img src="~@/assets/images/6LB_news1_08.jpg" alt="" />
        <p v-for="(item1,index) in data.content" :key="index">
          {{ item1 }}
        </p>
        <div class="time">
          {{ data.time }}
        </div>
      </div>
      <div class="right">
        <div class="title">
          PRODUCT
        </div>
        <div class="product-list">
          <div v-for="(item2,index) in productList" :key="index" class="product-item" @click="handelPro(index)">
            <img src="~@/assets/images/6LB_news1_06.jpg" alt="" />
            <div class="text">
              {{ item2.time }}
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  data() {
    return {
      data: {
        title: 'Double color ball 148 first prize blowout 42 injection prize pool 870 million',
        img: '',
        content: ['Founded in February 2000, Shenzhen Jinghua Digital Technology Co.,   is  high-tech  company invested by Shenzhen Jinghua,Electronic Co., Ltd High tech enterprises engaged in  product research, development  and production and operation.',
          'Adhering to the corporate spirit of "quality, reputation, practical work and multi contribution" of Jinghua  company, relying on the strong capital, management and technology of Jinghua Electronic Co., Ltd  Jinghua  Digital  Technology   Co., Ltd.  follows  the international advanced technology and specializes in high-tech products.  Its main   development  series: digital recording Penlaptop, MP3 / MP4 digital player, integrated video phone,set-top box video phone,multi-channel remote monitoring video phone camera, etc And R & D, production and sales of automobile power amplifier, monitor and IP terminal products.',
          'The company has a number of modern, technical and good management   of  high-quality  management personnel,and has a number of years engaged in the field of computer,  communications   research and   development of   high-tech  products  Our high-quality technical research and development team  has strict control  from design,  development to  production and quality delivery. Be meticulous  about  the  quality  of  products.  The  technical  director has  International   advanced  technology  level with the  ability  of continuous  innovation  and  development  of  existing   product   technology.  Ensure that the  products of the company  have high technology level and advanced technology in line with the world',
          'High tech project developed by the company: integrated video phone. It has passed the quality system  audit designated by the state  and obtained the network access permit of telecommunication equipment from the Ministry of information industry of the people\'s  Republic of China It can be  proved that it  is  also  recognized as a  high-tech  product of  Shenzhen.  The  product  is characterized by mature technology, stable quality, beautiful  appearance  and smooth  image,t has become one of the classic representatives  of videophone products in domestic and foreign markets.',
          'The company now develops and produces digital recording pens, laptops, MP3 / MP4 digital players, GPS systems, compared with similar products abroad, with its technology Mature, stable quality and cost advantage. It has a considerable market, great development potential and full advantages in competition with foreign products.',
          'The company now develops and produces digital recording pens, laptops, MP3 / MP4 digital players, GPS systems, compared with similar products abroad, with its technology Mature, stable quality and cost advantage. It has   considerable market, great development potential and full advantages in competition with foreign products. The company\'s  production  base is located in tianjinghua Industrial Park, Liangan, Pinghu, Shenzhen, covering an area of 150000000 square  meters,  with  200000  square meters of production plants. The workshop is  equipped  with complete  production  Assembly  line a nd  advanced  production equipment, with good anti-static facilities. Fully anti-static paint floor, central air conditioning system to ensure a good production environment.'
        ],
        time: '2019 12.25'
      },
      productList: [
        { name: 'product1', time: '3 MINUTES' },
        { name: 'product1', time: '3 MINUTES' },
        { name: 'product1', time: '3 MINUTES' },
        { name: 'product1', time: '3 MINUTES' },
        { name: 'product1', time: '3 MINUTES' },
        { name: 'product1', time: 'FUCAIF3D' }
      ]
    }
  },
  mounted() {
    console.log(this.$route.query.id)
  },
  methods: {
    handelPro(id) {
      this.$router.push({ path: '/notice', query: { noticeId: id }})
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
    display: flex;
    .left{
      width: 1000px;
      text-align: center;
      .title{
        color: #009cff;
        text-transform:uppercase;
        font-size: 18px;
        line-height: 36px;
        border-bottom: 1px solid #009cff;
        text-align: left;
        font-weight: 700;
      }
      img{
        margin-top:10px;
        vertical-align: text-top;
      }
      p{
        text-align: justify;
        color:#515151;
        font-size: $font-content;
        line-height: 22px;
      }
      .time{
        text-align: left;
        color: #7f7b7b;
        font-size: 22px;
        margin-top: 20px;
        margin-bottom: 30px;
      }
    }
    .right{
      width: 320px;
      padding-left:30px;
      .title{
        width: 100%;
        line-height: 34px;
        background-image: url('~@/assets/images/6LB_news1_03.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        font-size: $font-title;
        color: #fff;
        text-align: center;
      }
      .product-list{
        .product-item{
          margin-top: 14px;
          cursor: pointer;
          img{
            vertical-align: top;
          }
          .text{
            line-height: 32px;
            color: #fff;
            text-align: center;
            font-size: $font-title;
            background-color: #000000;
          }
        }
      }
    }
  }
}
</style>
