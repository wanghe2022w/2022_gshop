/**
 包含n个接口请求函数模块
 返回值是promise对象
 */
import ajax from './ajax'
// const BASE_URL='http://localhost:4000'
const BASE_URL='/api'
// 1、根据经纬度获取位置详情
export const reqAddress = (geohash)=>ajax(`${BASE_URL}/position/${geohash}`)

// 2、获取食品分类列表
export const reqFoodTypes = ()=>ajax(BASE_URL+'/index_category')
// 3、根据经纬度获取商铺列表
export const reqShopList = (longitude ,latitude)=>ajax(BASE_URL+'/shops',{longitude ,latitude})
// 4、根据经纬度和关键字搜索商铺列表
export const reqSearchShops = (geohash,keyword)=>ajax(BASE_URL+'/search_shops',{geohash,keyword})
// 5、获取一次性验证码
export const reCaptcha = ()=>ajax(BASE_URL+'/captcha')
// 6、用户名密码登陆
export const reqLoginPwd = ({name,pwd,captcha})=>ajax(BASE_URL+'/login_pwd',{name,pwd,captcha},'POST')
// 7、发送短信验证码
export const reqSendCode = (phone)=>ajax(BASE_URL+'/sendcode',{phone})
// 8、手机号验证码登陆
export const reqLoginMsg = ({phone,code})=>ajax('/login_sms',{phone,code},'POST')
// 9、根据会话获取用户信息
export const reqUserInfo = ()=>ajax(BASE_URL+'/userinfo')
// 10、用户登出
export const reqLogOut = ()=>ajax(BASE_URL+'/logout')
