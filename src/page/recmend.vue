<template>
    <div class="recmend">
     <headtitle :title="title"></headtitle>
     <div>
    <img src="../assets/activity.png" alt="">
     </div>
     <div class="ways">
        <div>
         <div><img src="../assets/weixin.png" alt=""></div>
         <div>邀请微信好友</div>
        </div>
        <div>
            <div><img src="../assets/qq.png" alt=""></div>
            <div>邀请qq好友</div>
        </div>
        <div>
        <div><img src="../assets/fenxiang.png" alt=""></div>
        <div>面对面邀请</div>
        </div>
     </div>
     <div class="profit">
    <div>
     <div>累计收益</div>
     <div>
         <span class="receive">0</span><span>元</span>
     </div>
    </div>
    <div class="line"></div>
    <div>
        <div>成功邀请</div>
        <div>
            <span class="people">0</span>
            <span>人</span>
        </div>
    </div>
     </div>
     <div class="detail">
        -收益明细-
     </div>
     <div class="visit">
    <img src="../assets/qianbao.png" alt="">
    <div>
    还不赶快邀请好友
    </div>
     </div>
    </div>
</template>
<script>
import headtitle from '../components/headtitle'
export default {
    data(){
       return{
           title:"推荐有奖"
       }
    },
    components:{
        headtitle
    }
}
</script>
<style scoped>
  .recmend{
    position: fixed;
    top:0;
    height:100%;
    width:100%;
    background:#f5f5f5;
  }
  img{
    max-width: 100%;;
  }
  .ways{
display: flex;
 justify-content: space-around;
 text-align: center;
 background:white;
 padding:1rem 0;

  }
  .ways img{
      height:3rem;
  }
  .line{
      border-right:1px solid grey;
  }
  .profit{
      text-align: center;
    padding:0.8rem 0;
  display: flex;
  justify-content: space-around;    
  }
  .receive,.people{
      font-size:1.4rem;
      font-weight: 400;
  }
  .receive{
      color:red;
  }
  .people{
   color: #666  
  }
  .detail{
    text-align: center;
  }
  .visit{
 text-align: center;
  }
  .visit img{
    height:3.5rem;
  }
</style>


