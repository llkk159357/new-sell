<template>
    <div>
    <headtitle :title="title"></headtitle>
    <div>
    <div class="item">
     <input type="text" placeholder="账号">
    </div>
     <div class="item" >
     <input type="text" placeholder="旧密码">
    </div>
     <div class="item">
     <input type="text" placeholder="请输入新密码">
    </div>
     <div class="item" >
     <input type="text" placeholder="请确认密码">
    </div>
     <div class="item prove">
     <input type="text" placeholder="验证码">
     <div class="change">
      <img :src="picture.code" alt="">
      <div>
        <div>看不请</div>
        <div v-on:click="fetchnumber" class="next">换一张</div>
      </div>
     </div>
    </div>
    </div>
    <div class="sure">
     <button>确认修改</button>

    </div>
    
    </div>
</template>
<script>
import  headtitle from '../components/headtitle'
import {picturemassage, picturemessage} from '../js/getdata'
export default {
    data(){
        return {
            title:"重置密码",
            picture:"",
            num:""
        }
    },
    components:{
        headtitle
    },
    methods:{
     fetchnumber:function(){
        picturemessage().then((res)=>{
        this.picture=res.data
        })
     }
    }
}
</script>
<style scoped>
  .item input{
     width:65%;
     height:2rem;
     border:none;
  
  }
  .item{
    padding:0 0.6rem;
    margin-bottom:0.6rem;
    border-bottom:1px solid #e4e4e4;
  }
  .prove{
      display: flex;
      justify-content: space-between;
  }
  .change{
      display: flex;
      font-size: 0.7rem;
  }
  .next{
      margin-top:0.5rem;
      color:blue;
  }
  .sure{
      padding:0 0.5rem;
  }
  img{
      margin-right:0.2rem;
  }
  .sure button{
    background:#4cd964;
    border:none;
    width:100%;
    height:2.5rem;
    font-size: 1rem;
    color:white;
  }
</style>


