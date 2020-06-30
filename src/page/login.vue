<template>
    <div class="login">
     <headtitle :title="title"></headtitle>
     <div class="logining">
    <div class="name">
     <input type="text" v-model="acount" placeholder="账号">  
    </div>
    <div class="password" >
        <input type="password"  v-model="password" placeholder="密码" >

    </div>
    <div class="prove">
        <input type="text" v-model="number" placeholder="验证码">
        <div class="change">
         <img :src="picture.code" alt="">
         <div >
          <div>看不清</div>
          <div v-on:click="fetchpicture" class="nextpicture">下一张</div>
         </div>
        </div>
    </div>
     </div>
     <div class="notice">
    <div>
     温馨提示：未注册过的用户，登陆时将自动注册
    </div>
    <div class="extronotice">
        注册过的用户可凭账号密码登陆
    </div>
     </div>
     <div class="submit">
        <button type="button" v-on:click="login">登陆</button>
     </div>
     <div class="reset" v-on:click="toreset">
      重置密码？
     </div>

    </div>
</template>
<script>
import store from '../store/index'
import {getmessage, picturemessage,logincount} from '../js/getdata'
import headtitle from '../components/headtitle'
export default {
   components:{
       headtitle
   } ,
   data(){
       return {
           title:"密码登陆",
           message:"",
           phone:null,
           picture:"" ,
           acount:"",
           password:"",
           number:"",
           userinfro:""
       }
   },
   methods:{
    fetchmessage:function(){
     getmessage(1).then((res)=>{
         this.message=res.data
     })
    } ,

    fetchpicture:function(){
        picturemessage().then((res)=>{
          this.picture=res.data
          console.log(res.data)
        })
    },
    login:function(){
        console.log(this.number)
     if(this.number==''){
         alert('输入验证码')
     }
     if(this.acount==''){
         alert('请输入用户名')
     }
      if(this.password==''){
          alert('请输入密码')
      }

     store.commit('getpassword',{password:this.password})
     localStorage.setItem(this.password,this.acount)    
     this.$router.go(-1)

    logincount(this.acount,this.password,this.number).then((res)=>{
        this.userinfro=res.data
    })


    },
    toreset:function(){
        this.$router.push('/reset')
    }
   },
   created:function(){
       picturemessage().then((res)=>{
          this.picture=res.data
          console.log(res.data)
        })   
   }
}
</script>
<style scoped>
  .login{
      background:#f5f5f5;
  }
  .logining{
   margin-top:0.5rem;
   background:white;
  }
   input{
    border:none;
    width:65%;
    height:1.8rem;
    font-size: 0.8rem;
   }
  .prove,.name,.password{
     border-bottom:1px solid #e4e4e4;
     margin-bottom: 0.6rem;
     padding: 0 0.6rem;
     
  }
  .notice{
      font-size: 0.6rem;
      color:red;
      padding:0 0.5rem ;
  }
  .extronotice{
      margin-top:0.5rem;
  }
  .submit{
    padding:0 0.5rem;
    margin-top:0.5rem;

  }
  .submit button{
      width:100%;
      height:2.5rem;
      background:#4cd964;
      border:none;
      border-radius: 5px;
      font-size: 1rem;
  }
  .reset{
    padding:0 0.5rem;
    text-align: right;
    margin-top:1rem;
    font-size: 0.8rem;
  }
  .prove{
      display: flex;
      justify-content: space-between;
  }
  .change{
      display: flex;
      font-size: 0.6rem;
  }
  .change img{
      height:1.2rem;
      margin-right:0.5rem;
  }
  .nextpicture{
      margin-top:0.3rem;
    color:blue;
  }
</style>


