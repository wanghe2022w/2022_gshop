/**
 ajax请求函数模块
 返回值：promise对象
 */
import axios from 'axios'
export default function ajax(url,data={},type='GET') {
   return new Promise(function (resolve,reject) {
     // 执行异步ajax请求
     let promise
     if (type==='GET'){
       // 发送GET请求
       // 准备url query数据参数
       let dataStr = '' // 数据拼接字符串
       Object.keys(data).forEach(key=>{
         dataStr = dataStr + key + '='+data(key)+'&' // 多了一个&
       })
       if (dataStr!==''){ // 有可能不传数据
         dataStr = dataStr.substring(0,dataStr.lastIndexOf('&'))
         url= url + '?'+dataStr
       }
       // 发送get请求
       promise=axios.get(url)
     }else {
       // 发送post请求
       promise=axios.post(url,data)
     }
     promise.then(function (response) {
       // 成功了调用resolve()
       resolve(response.data)
     }).catch(function (error) {
       // 失败了调用reject()
       reject(error)
     })
   })
}
