<template>
   
     <div class="setting">
     <headtitle :title="title" class="title"></headtitle>
     <div class="name">
    <div>
        <img :src="imgbaseurl+'default.jpg'" alt="">
        <div class="phone">
         <div v-if="name==null">登陆/注册</div>   
        <div v-else >{{name}}</div>
         <div class="userphone">
             <span class="el-icon-phone icon"></span>
             <span>暂无绑定手机号</span>
         </div>
        </div>
    </div>
    <div class="el-icon-arrow-right" v-on:click="tologin" v-if="name==null">

    </div>
     <div class="el-icon-arrow-right" v-else v-on:click="tologinout">

     </div>
     </div>


      <div class="aboutme">
      <div class="check" v-on:click="toblance">
        <div >
            <span class="current stillhas" >  0.00</span>
            <span> 元</span>
       </div>
        <div class="mine">我的余额</div>
      </div>

      <div class="saveing" v-on:click="tobenefit">
       <div >
           <span class="current stillnum"> {{num}}</span>
           <span>个</span>
          </div>   
        <div class="mine">我的优惠</div> 
     </div>

      <div class="score" v-on:click="topoint">
      <div >
          <span class="current stillpoint" >0</span>
          <span>个</span>
           </div> 
      <div class="mine">
        我的积分
      </div>
      </div>
      </div>
     <div class="book">
       <div class="item">
        <div><span class="el-icon-tickets"></span><span>我的订单</span></div><span class="el-icon-arrow-right"></span>
       </div>
       <div class="item">
        <div><span class="el-icon-apple"></span><span>积分商城</span></div><span  class="el-icon-arrow-right"></span>    
       </div>
       <div class="item">
         <div><span class="el-icon-elme"></span><span>饿了么会员卡</span></div><span  class="el-icon-arrow-right"></span>   
       </div>
     </div>

     <div class="service">
        <div class="item">
         <div>
            <span class="el-icon-s-custom"></span>
            <span>服务中心</span>
        </div>
        <span class="el-icon-arrow-right"></span>
        </div>
        <div class="item">
            <div>
                <span class="cl-icon-eleme"></span>
                <span>下载饿了么APP</span>
              </div>
            <span class="el-icon-arrow-right"></span>
        </div>
     </div>
     

    </div>
    
  
</template>
<script>
import headtitle from '../components/headtitle'
import store from '../store/index'
export default {
    data(){
        return{
            title:"我的",
            name:null,
            imgbaseurl:"//elm.cangdu.org/img/",
            num:3
        }
    },
    components:{
        headtitle
    },
    computed:{
      password:function(){
          return store.state.password
      }
    },
    created:function(){
      this.name=localStorage.getItem(this.password)
      console.log(this.name)
    },
    methods:{
        tologin:function(){
         this.$router.push('/login')
        },
        tobenefit:function(){
            this.$router.push('/benefit')
        },
        tologinout:function(){
            this.$router.push('/loginout')
        },
        toblance:function(){
            this.$router.push('/balance')
        },
        topoint:function(){
            this.$router.push('/point')
        }
    }
}
</script>
<style scoped>

  .name{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background:#409EFF;
    padding:0.5rem 0.5rem;
  }
  .phone{
     display: inline-block;
  }
  .name img{
      height:3rem;
      border-radius: 50%;
  }
  .icon{
      color:white;
  }
  .title{
    margin-bottom:0 !important;
  }
  .aboutme{
    display: flex;
    justify-content: space-around;
    background:white;
   
  }
  .check,.saveing{
    padding-right:1rem;
    border-right:1px solid #e4e4e4;
  }
 
  .item{
      display: flex;
      justify-content: space-between;
      margin-bottom:0.5rem;
      border-bottom:1px solid #e4e4e4;
      padding:0.4rem 0;
      align-items: center;
  }
  .setting{
    background:#f5f5f5;
    font-size: 0.8rem;
   
  }
  .book{
      margin-top:0.5rem;
      background:white;
      padding:0 0.5rem;
  }
  .service{
      background:white;
      padding: 0 0.5rem;
  }
  .score,.check,.saveing{
      padding-top:0.6rem;
      padding-bottom:0.6rem;
      text-align: center;
  }
  .userphone{
      margin-top:0.5rem;
      padding-bottom:0.5rem;
  }
  .current{
      font-size: 1.3rem;
      font-weight: 800
  }
  .mine{
      font-size: 0.7rem;
  }
 .stillnum{
     color:orange;
     
 }
.stillhas{
    color:red;
}
 .stillpoint{
     color:green;
 }
</style>


