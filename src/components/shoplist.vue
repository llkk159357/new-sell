<template>
    <div class="wrapper">
       <div v-if="shoplists.length">
         <div v-for="item in shoplists" class="list"  v-on:click="tofood(item.location[0],item.location[1],item.id)">
          <div>
      
         <img :src="imgbaseurl+item.image_path" alt="">
         <div class="list_left">
        <div>
         <span class="brand">品牌</span>  <span class="name">{{item.name}}</span> 
        </div>
        <div class="count">
        <rating-star :rating="item.rating"  class="star"></rating-star> <span>月售{{item.recent_order_num}}</span>
        </div>
        <div>
            <span>￥{{item.float_minimum_order_amount}}起送</span>
            <span>配送费￥{{item.float_delivery_fee}}元</span>
        </div>
         </div>
          </div>
          <div>
              <div>
            <span  v-for="list in item.supports"> {{list.icon_name}}</span>
              </div>
        
           <div>
            <span>{{item.delivery_mode.text}}</span>
            <span>{{item.supports[1].name}}</span>
           </div>
          </div>  
         
      </div>
       </div>
      <div v-else>
         <loading></loading>
       </div>
    </div>
</template>
<script>
import loading from './loading'
import ratingStar from './rating'
import store from '../store/index'
export default {
    data(){
      return {
      imgbaseurl:"//elm.cangdu.org/img/",     
      }
    }, 
    props:['shoplists'],
    components:{
        ratingStar,
        loading
    },
    methods:{
        tofood:function(longitude,latitude,id){

     this.$router.push({path:'/shop',query:{latitude,longitude}})  

       store.commit('getId',{id:id})
       
        }
    }
}
</script>
<style scoped>
.wrapper{
    margin-bottom: 2.6rem;
}
   .list img{
    width:3rem;
   
   }
   .list{
   display: flex;
   justify-content: space-between;
   font-size:0.6rem;
   border-bottom:0.5px solid #e4e4e4;
   padding-top:1rem ;
   padding-bottom:1rem;
   padding-left: 0.5rem;
   padding-right:0.5rem;
   }
    .list_left{
     display: inline-block;    
    }
    .name{
        font-size:0.8rem;
        color: #333;
        font-weight: 700
    }
    .brand{
        background:#ffd930;
        color:#333;
        padding:0.1rem;

    }
    .count{
        margin-top:0.3rem;
        margin-bottom:0.3rem;
    }
    .star{
        margin-right:0.5rem;
        display: inline-block;
    }
</style>


