<template>
    <div class="outerbox">
      <transition name="slide">
        <div v-if="seen&&lists.length>0" class="listdetail">
        <div class="title">
         <span>购物车</span>
         <span v-on:click="clear">清空</span>
        </div>
          <div v-for="(item,index) in lists" :key="index" class="list">
            <span>{{item.name}} </span>  
              <span>{{item.specfoods[0].price}}</span>
              <div>
              <span class="el-icon-remove icon" v-if="item.num>0"  v-on:click="decrease(item)"></span>
              <span v-if="item.num>0">{{item.num}}</span>
              <span class="el-icon-circle-plus icon" v-on:click="add(item)"></span>
              </div>
          
            </div>  
        </div>
    </transition>   
  <div class="cartbox">
       <div class="cart_part" v-on:click="showcart">
       <div>
        <span class="el-icon-shopping-cart-full icon"></span>
        <span v-if="num>0">{{num}}</span>
     </div>
     <div class="total">
      <div v-if="total>0">{{total}}</div>
      <div v-else>￥：0.00</div>
      <div>配送费5元</div>
     </div>
     </div>
    
     <div class="acount" >
      <div   v-if="total<20">还差{{20-total}}元起送</div>
      <div   v-if="total>=20">去结算</div>
     </div>
    
    </div>
   
    </div>
   
</template>
<script>
export default {
    data(){
       return{
        seen:false
       }
    },
    props:['list','lists','num','total'],
    methods:{
        showcart:function(){
         this.seen=!this.seen

        },
        decrease:function(item){
            item.num--

          
           if(item.num==0){
            var index=this.lists.indexOf(item)
           this.lists.splice(item,1)
           }
         
        },
        add:function(item){
         item.num++
        },
        clear:function(){
            console.log('hello')
         this.$emit('clear')  
        }
    }
}
</script>
<style scoped>
   .outerbox{
    position: fixed;
    bottom:0;
    width:100%;
    background:#f5f5f5;
    z-index:4
   }
   .cartbox{
       color:white;
       font-size: 0.7rem;
       position: relative;
       display: flex;
       justify-content: space-between;
       align-items: center;
       width:100%;
       z-index: 15;
   }
   .cart_part{
    width:75%;  
    display: flex;
    background:#3d3d3f;
     height:1.7rem;
   }
   .icon{
       font-size: 1.5rem;
   }
   .acount{
       width:25%;
       background:#333;
       height:1.7rem;
       line-height: 1.7rem;
       text-align: center;
   }
   .total{
       margin-left:1rem;
   }
   .slide-enter{
       transform: translateY(100%)
   }
   .slide-enter-active{
       transition:transform 0.3s linear;
   }
   .listdetail{
       position: relative;
       z-index: 10;
       background:#f5f5f5;
   }
   .title{
   display: flex;
   justify-content: space-between;
   background:#f5f5f5;
   }
   .list{
       margin:0.5rem 0;
       border-bottom:1px solid #e4e4e4;
       display: flex;
       justify-content: space-between;
   }
   .icon{
       color:#409EFF
   }
</style>


