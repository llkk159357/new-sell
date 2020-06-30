<template>
    <div class="outer">
     <headtitle :title="title"></headtitle>

      <div class="search">

     <input type="text" class="input"  placeholder="请输入商家或美食名称">
     <button type="primary">提交</button>
      

    </div>
    
    <div class="wrapper" >
    <div class="loading_img" >
     
    </div>
    <div class="bing">

    </div>
    </div>

    </div>
  
</template>
<script>
import headtitle from '../components/headtitle'

export default {
    data(){
       return{
           title:"搜索",
           positiony:"",
           seen:true
       }
    },
    components:{
        headtitle
    }  ,
    mounted:function(){
   
    }
} 
</script>
<style scoped>
   
    input{
      width:70%;
      height:2rem;

    }
    button{
    width:20%;
    height:2rem;
    }
   .search{
       display: flex;
       justify-content: space-around;
       margin-top:1.2rem;
   }
   .bing{
    width:30px;
    height:30px;
    border-radius: 50%;
    background:grey;
    filter: blur(1px);
    animation: scale 0.6s linear;
   position: absolute;
   left:8px;
  
    
   }

   @keyframes scale{
      0%{transform: scale(1)}
      50%{transform: scale(0.6)}
      100%{transform: scale(1)}
   }

   .loading_img{
       width:50px;
        height:50px;

        background:url(../assets/icon_loading.png);
        background-size: cover;
       background-repeat: no-repeat;
       animation: move 0.6s  linear
   }
  @keyframes move{
         0%{ transform: translateY(0px)}
        50%{transform:translateY(-50px)}
        100%{transform: translate(0px)}
     }
    
      .wrapper{
         animation: fade 0.6s  linear forwards
     }
 
   
    @keyframes fade{
        0%{opacity:0}
        50%{opacity:1}
        100%{opacity: 0}
    }
   .search{
      position: relative;
   }
   .wrapper{
       position: absolute;
       top:45%;
       left:45%;
   }
</style>


