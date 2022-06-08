/**
 通过mutations间接更新state的多个方法的对象
 */
import {
RECEIVE_ADDRESS,
RECEIVE_FOODTYPES,
RECEIVE_SHOPS
} from './mutation-types'

import {
reqAddress,
reqFoodTypes,
reqShopList
} from '../api/index'

export default {
  // 异步获取地址
 async getAddress({commit,state}){
   // 发送异步ajax请求
   const geohash = state.latitude + ',' + state.longitude
   console.log(geohash)
    const result = await reqAddress(geohash)
    if (result.code===0){ // 请求发送成功
      const address = result.data
      console.log(address)
      // 提交一个mutation
      commit(RECEIVE_ADDRESS,{address})
    }else {
      console.log(error)
    }
  },

  // 异步获取食品分类
 async getFoodTypes({commit}){
   // 发送Ajax异步请求
    const result = await reqFoodTypes()
   if (result.code===0){
     const foodTypes = result.data
     // 提交一个mutation
     commit(RECEIVE_FOODTYPES,{foodTypes})
   }
  },

  // 异步获取商家列表
 async getShops({commit,state}){
   // 发送Ajax异步请求
   const longitude = state.longitude
   const latitude = state.latitude
    const result =await reqShopList(longitude ,latitude)
   if (result.code===0){
     // 提交一个mutation
     const shops = result.data
     commit(RECEIVE_SHOPS,{shops})
   }
  }
}
