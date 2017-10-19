// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
// import VueRouter from 'vue-router'
import router from "./router"
import App from './App'
import API from './api/api.js'
import VueScroller from 'vue-scroller'
import Store from "./store"
import io from "./socket/io"
// import vconsole from "vconsole"
import sessionFun from './Utils/Utils'
import {
  ToastPlugin
} from 'vux'

Vue.use(ToastPlugin)

// import plusUi from "plus-ui"
// Vue.use(plusUi)

import Vuex from 'vuex'
Vue.use(Vuex)

import {
  WechatPlugin
} from 'vux'
Vue.use(VueScroller)
var api = new API()

// //国际化
import vuexI18n from 'vuex-i18n'
let store = new Vuex.Store({
  modules: {
    i18n: vuexI18n.store
  }
})
Vue.use(vuexI18n.plugin, store)
import objectAssign from 'object-assign'


const vuxLocales = require('json-loader!yaml-loader!vux/src/locales/all.yml')
const componentsLocales = require('json-loader!yaml-loader!./locales/components.yml')


const finalLocales = {
  'en': objectAssign(vuxLocales['en'], componentsLocales['en']),
  'zh-CN': objectAssign(vuxLocales['zh-CN'], componentsLocales['zh-CN'])
}

for (let i in finalLocales) {
  Vue.i18n.add(i, finalLocales[i])
}

if (sessionStorage.getItem('Accept')){
  if (sessionStorage.getItem('Accept').indexOf('zh') >= 0){
    Vue.i18n.set('zh-CN');
  }else {
    Vue.i18n.set('en');
  }
}

// console.log(finalLocales)
// const nowLocale = Vue.locale.get()
// if (/zh/.test(nowLocale)) {
//    Vue.i18n.set('en')
// } else {
//  Vue.i18n.set('zh-CN') 
// }





import rem from './assets/lib/flexible.js'

// Vue.use(VueRouter)
// Vue.use(WechatPlugin)

// function GetQueryString(name) {
//   var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
//   var r = window.location.search.substr(1).match(reg);
//   // if (r != null)return unescape(r[2]);
//   if (r != null) {
//     return r[2];
//   }
//   return null;
// }
// var code = GetQueryString("code");
// var appId = GetQueryString("state");
// // //  var appId = state.split("-")[0]
// // //  var order = state.split("-")[1]
// var href = window.location.href.split('#')[0];
// var qs = require('qs');
// api.postAPI("auth/jsConfig", qs.stringify({
//     code: code,
//     url: href,
//     appId: appId
//   }))
//   .then(data => {
//     //         // sessionStorage.setItem("token", "jwt"+data.data.data.token);
//     //         // sessionStorage.setItem("order", order);


//     Vue.wechat.config({
//       debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
//       appId: appId, // 必填，公众号的唯一标识
//       timestamp: data.data.data.timestamp, // 必填，生成签名的时间戳
//       nonceStr: data.data.data.nonceStr, // 必填，生成签名的随机串
//       signature: data.data.data.signature, // 必填，签名，见附录1
//       beta: true,
//       jsApiList: ['scanQRCode', 'openWXDeviceLib', 'getWXDeviceTicket'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
//     })

//     Vue.wechat.ready(function () {
//       //初始化设备库
//       Vue.wechat.invoke('openWXDeviceLib', {
//         'connType': 'lan'
//       }, function (res) {
//         console.log('openWXDeviceLib', res);
//       });
//     });

//     new Vue({
//       router,
//       created() {
//         // var order = sessionStorage.getItem("order");
//         // if(order == "V201_SMART" && window.localStorage.getItem("gatewayLockId")){
//         //     router.replace({path:"/MyResentUse/MyHistory"})
//         // } else {
//         // router.replace({path: order})
//         // }
//       },
//       render: h => h(App)
//     }).$mount('#app-box')
//   })
//   .catch(err => {
//     console.log(err)
//   })





// const router = new VueRouter({
//   routes
// })

// router.beforeEach((to, from, next) => {
//     console.log(to.meta.title)
//     document.title = Vue.i18n.translate(to.meta.title)
//     next()
// })


FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  Store,
  router,
  render: h => h(App)
}).$mount('#app-box')
