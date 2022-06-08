<template>
  <section class="msite">
    <!--首页头部-->
    <HeaderTop :title="address.name">
      <span class="header_search" slot="left">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span class="header_login" slot="right">
        <span class="header_login_text">登录|注册</span>
      </span>
    </HeaderTop>
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container ">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(foodTypes,index) in foodTypesArr" :key="index">
            <a href="javascript:" class="link_to_food" v-for="(foodType,index) in foodTypes" :key="index">
              <div class="food_container">
                <img :src="baseImsUrl+foodType.image_url">
              </div>
              <span>{{foodType.title}}</span>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <!--首页附近商家-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <ShopList></ShopList>
    </div>
  </section>

</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
  import ShopList from '../../components/ShopList/ShopList.vue'
  import {mapState} from 'vuex'
export default{
  data(){
     return {
       baseImsUrl:'https://fuss10.elemecdn.com'
     }
  },
  mounted(){
    this.$store.dispatch('getFoodTypes')

  },
  watch:{ // 当foodTypes的数据有变化时
    foodTypes(value){
      // 界面更新立即创建Swiper对象
      this.$nextTick(()=>{ // 一旦完成界面更新，立即调用
        // 创建一个Swiper实例，来实现轮播
        new Swiper('.swiper-container', {
          loop: true, // 循环播放
          autoplay:{ // 自动播放
            stopOnLastSlide:true
          },
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
          },
        })
      })
    }

  },
  computed: {
    ...mapState(['address','foodTypes']),

    /*根据foodtypes一维数组生成一个二维数组
       最小的数组元素个数最大是8
    */
    foodTypesArr (){
      // 准备一个空的二维数组
      const arr = []
      // 准备一个空的小数组
      let minArr = []
      // 遍历foodTypes
      this.foodTypes.forEach(foodType =>{
        // 如果minArr的个数等于8，说明小数组已满，创建新的小数组
        if (minArr.length===8){
          minArr=[]
        }
        // 如果minArr是空的，将小数组放到二维数组中
        if (minArr.length===0){
          arr.push(minArr)
        }
        // 将当前分类保存到小数组中
        minArr.push(foodType)
      })
      return arr
    }

  },

  components:{
    HeaderTop,
    ShopList
  }
}

</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .msite  //首页
    width 100%
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774
    .msite_shop_list
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #fff
      .shop_header
        padding 10px 10px 0
        .shop_icon
          margin-left 5px
          color #999
        .shop_header_title
          color #999
          font-size 14px
          line-height 20px
</style>
