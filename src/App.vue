<template>
  <div>
    <router-view ></router-view>
    <Footer v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import Footer from './components/Footer/Footer.vue'
import {reqFoodTypes} from './api/index'
export default{
  mounted(){
    this.$store.dispatch('getAddress')
  },
  // 映射成组件标签
  components: {
    Footer
  }
}

</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>
