<template>
     <div class="container">
    <headtitle title="积分问题"></headtitle>
        <div class="pointwrapper">
   
     <div class="item">
      <h3>Q1: 怎么获得积分？</h3>
      <p>在线支付的订单将获得订单积分奖励：</p>
      <ul>
        <li>积分将在用户完成评价后获得。</li>
        <li>可获得积分=订单金额×10（即1元=10点积分）。</li>
        <li>订单金额指实际付款金额，不包含活动优惠金额。</li>
        <li>每位用户每天最多可以获得2000积分，体验商家的订单和评价不会增加积分。</li>
      </ul>

     </div>
     <div class="item">
         <h3>Q2: 积分用来做什么？</h3>
         <p>可以在积分商城兑换各种礼品。</p>
         
     </div>
     <div>
       <h3>Q3: 礼品兑换很多天了还没有收到，该怎么办？</h3>
       <p>礼品从兑换日起，3个工作日（周末不算）内处理发货，发货后，通常会在3个工作日左右送达。</p>
     </div>
     <div class="item">
         <h3>Q4: 礼品兑换中的手机充值卡兑换，怎么样进行充值，充值之前会和我电话确认嘛？</h3>
         <p>不会，手机充值卡兑换，是直接充值到您填写的手机号上，充值之前不会和您电话确认，所以您在填写电话的时候，请确认电话是否正确。</p>
     </div>
    </div>

     </div>
  
</template>
<script>
import headtitle from '../components/headtitle'
export default {
    components:{
        headtitle
    }
}
</script>
<style scoped>
  .container{
  position: fixed;
       z-index: 20;
        left:0;
       top:0;
       height:100%;
       background: white;
       width:100%;
  }
   .pointwrapper{
       margin-top:1rem;
       padding-top:2rem;
      
       padding: 0 0.6rem;
       font-size: 0.8rem;
     


   }
  .item{
      margin-bottom:0.8rem;
  }
  h3{
    margin-bottom:0.4rem;
  }
</style>



