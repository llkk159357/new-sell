<template>
<div class="nav">

    <div class="inner">
      <router-link  :to="'/sell?geohash='+geohash"  v-on:click.prevent="changecolor" class="list">
      <div  class="el-icon-eleme icon"   :style="{color:blued}" ></div>
      <div>外卖</div>
      </router-link> 

    <router-link to="/search"  class="list" v-on:click="changecolor" >
          <div  class="el-icon-search icon" ></div>
          <div>
           搜索         
          </div>
     </router-link>

   <router-link to="/book" class="list"  v-on:click="changecolor" >
         <div  class="el-icon-tickets icon"></div>
         <div>
         订单
         </div>
   </router-link> 

   <router-link to="/aboutme"  class="list"  v-on:click="changecolor">
      <div  class="el-icon-user icon" ></div>
         <div>
        我的
         </div>
   </router-link> 
    </div>
     
</div>
</template>
<script>
import store from '../store/index'
export default {
    data(){
        return{
         blued:""
        }
    },
    computed:{
     geohash:function(){
         return store.state.geohash
     }

    },
    methods:{
        changecolor:function(){
         this.blued="blue"
        }
    }
}
</script>
<style scoped>
   .nav{
       width:100%;
       position: fixed;
       bottom:0;
       border-top:0.5px solid grey;
   }
   .inner{
     display: flex;
     justify-content: space-around;
     height:2.5rem;
    align-items: center;
    background:#fff;
  
   }

   .list{
       margin:0 1.2rem;
       text-align: center;
       font-size: 0.7rem;
   }
   a{
         color:#666;
       text-decoration: none;
   }
   .icon{
    font-size:1.2rem;
   }
   
</style>
