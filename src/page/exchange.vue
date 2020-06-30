<template>
    <div class="exchange">
  <headtitle :title="title"></headtitle>
    <div class="outer">
     <input type="text" class="exchangenum"  name="" id="" v-model="exchangenum"  placeholder="请输入兑换码">   
    </div>
    <div class="outer">
    <input type="text" class="provenum" v-model="provenum"  v-on:keyup="check" placeholder="请输入验证码">
    <imgpictrue :path="path" class="img"  v-on:next="getnext"></imgpictrue>
    </div>
    <div class="outer">
     <button type="submit" v-on:click="send" :class="{bgcolor:greencolor}">兑换</button>
    </div>
    <transition name="scale">
        <div v-if="message!=''" class="message">
          {{message.message}}
          <div v-on:click="change">确认</div>
      </div>   
    </transition>
     
    </div>
</template>
<script>
import headtitle from '../components/headtitle'
import imgpictrue from '../components/imgpictrue'
import {picturemessage,exchange} from '../js/getdata'
export default {
    data(){
        return{
            title:"兑换红包",
            path:"",
            exchangenum:"",
            provenum:"",
            greencolor:false,
            message:""
        }
    },
    components:{
        headtitle,
        imgpictrue
    },
  created:function(){
       this.getnext()
    },
    methods:{
        getnext:function(){
        picturemessage().then((res)=>{
            this.path=res.data.code
        })
        },
    check:function(){
      if(this.exchangenum!=''&&this.provenum!=''){
           this.greencolor=true
      }else{
          this.greencolor=false
      }
    },
    send:function(event){
        if(this.exchangenum==''||this.provenum==''){

           event.preventDefault()
        }else{
            this.exchangenum=''
            this.provenum=''
           exchange(this.exchangenum,this.provenum,222).then((res)=>{
         this.message=res.data
      })
        }
    
    },
    change:function(){
         this.message=''
    }
    },
    
}
</script>
<style scoped>
   .exchange{
       position: absolute;
       top:0;
       z-index:9;
       background:#f5f5f5;
       height:100%;
       width:100%;

   }

  .exchangenum {
      width:100%;
      height:1.8rem;
     border:none;
     
  }
   .provenum{
       width:60%;
        border:none;
        height:1.8rem;
   }
   .outer{
      margin-top:0.8rem;
      padding:0 0.6rem;
       font-size: 0.8rem;
   }
   .img{
       display: inline-block;
   }
  button{
      width:100%;
      height:1.8rem;
      border:none;
  }
  .bgcolor{
      background: #4cd964;
  }

  @keyframes scale{
      0%{transform: scale(1)}
      50%{transform: scale(0.6)}
      100%{transform: scale(1)}
  }
  .message{
    border:1px solid grey;
    width:6rem;
    height:3rem;
    position: absolute;
    top:40%;
    left:40%
  }
  
  .scale-enter-active{
      animation: scale 0.5s ;
 }

</style>


