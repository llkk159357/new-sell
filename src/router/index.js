import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home  from '../page/home'
import city from '@/components/city/city'
import sell from '../page/sell'
import main from '../page/main'
import search from '../page/search'
import book from '../page/book'
import aboutme from '../page/aboutme'
import food from '../page/food'
import shop from '../page/shop'
import login  from '../page/login'
import reset from '../page/reset'
import benefit from '../page/benefit'
import loginout from '../page/loginout'
import oldhb from '../page/hbhistory'
import recmend from '../page/recmend'
import exchange from '../page/exchange'
import balance from '../page/balance'
import point from '../page/point'
import pointintro from '../page/pointintro'
Vue.use(Router)

export default new Router({
  routes: [
      
    {
      path:"/",
      component:home
    },
    {
      path:"/city/:id",
      component:city
    },
    
    {
      path:"/main",
      component:main,
      children:[
        {
          path:"/sell",
          component:sell
        }, 
        {
          path:"/search",
          component:search
        },
        {
          path:"/book",
          component:book
        },
        {
          path:"/aboutme",
          component:aboutme
        }
      ]
    },
    {
      path:"/food",
      component:food
    },
    {
      path:"/shop",
      component:shop
    },
    {
      path:"/login",
      component:login
    },
    {
      path:"/reset",
      component:reset
  
  
     },
     {
     path:"/benefit",
     component:benefit,
     children:[
      { path:"oldhb",
       component:oldhb
     },
     {
      path:"recmend",
      component:recmend
     },
     {
       path:"exchange",
       component:exchange
     }
             
     ]
     },
     {
       path:"/loginout",
       component:loginout
     },
     {
       path:"/balance",
       component:balance
     },
     {
       path:"/point",
       component:point,
       children:[
         {
           path:"pointintro",
           component:pointintro
         }
       ]
     }
   
  ]
})