<template>
    <div class="saving">
     <loading v-if="lists.length==0"></loading>
     <headtitle :title="title"></headtitle>
     <div class="kind">
      <span>红包</span>
      <span>代金券</span>
     </div>
     <div class="earning">
     <div class="notice">
    <span>有三分红包即将过期</span>
    <div>
        <span class="el-icon-question"></span>
         <span>红包说明</span>
    </div>
    
     </div>
      <div>
      <div v-for="(item,index) in lists" :key="index" class="list">
        <div class="amount_part">
           <div class="red">
        ￥{{item.amount}}
       </div>
       <div>
           {{item.description_map.sum_condition}}
       </div>
        </div>
       <div>
        <div>
            {{item.name}}
        </div>
        <div>
            {{item.end_date}}到期
        </div>
        <div>
            {{item.description_map.phone}}
        </div>
       </div>
       <div class="only">
           {{item.description_map.validity_delta}}
       </div>
      </div>
       <div v-if="lists[2].limit_map">
           {{lists[2].limit_map.restaurant_flavor_ids}}
       </div>

      </div>
      <div class="once" v-on:click="toold">
          查看历史红包
      </div>
     </div>
      <div class="bottom">
        <span v-on:click="toexchange">兑换红包</span>
        <span v-on:click="torecmend">推荐有奖</span>
      </div>
      <transition name="slide" mode="out-in">
      <router-view></router-view>
      </transition>
    </div>
</template>
<script>
import {getearning} from '../js/getdata'
import loading from '../components/loading'
import headtitle from '../components/headtitle'
export default {
    data(){
        return{
        lists:"",
        id:1,
        title:"我的优惠"
        }
    },
    created: function(){
      getearning(2).then((res)=>{
      this.lists=res.data
      })
    },
    components:{
        loading,
        headtitle
    },
    methods:{
        toold:function(){
          this.$router.push('/benefit/oldhb')
        },
        torecmend:function(){
            this.$router.push('/benefit/recmend')
        },
        toexchange:function(){
            this.$router.push('/benefit/exchange')
        }
    }
}
</script>
<style scoped>
  .kind{
      display: flex;
      justify-content: space-around;
      background:white;
      font-size: 0.8rem;
      padding: 0.5rem 0;
      width:100%;
  }
  .saving{
    background: #f5f5f5;
    font-size: 0.7rem;
 
    height:100%;
  }
  .notice{
      display: flex;
      justify-content: space-between;
    
      padding:0.8rem 0;

  }
  .earning{
      padding:0 0.5rem;
  }
  .list{
      display: flex;
      justify-content: space-between;
      margin-bottom:0.6rem;
       background: white url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAIBAMAAAALs8LeAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAeUExURUxpcf9TQf9aS/9TQP9TQP9TQv9TQf9UQP9bSP9TQCdGiZQAAAAJdFJOUwBPEZzKPX2/HKJFz58AAAAkSURBVAjXY5gJBwzEMScHNXpCmQIMDMwQ5jQGIKgEMyeBmJIAtqcnWdDMwKsAAAAASUVORK5CYII=);
     background-repeat: repeat-x;
     background-size: 0.6rem;
     padding:1rem 0.5rem;
     
   
  }
  .once{
      text-align: center;
  }
  .bottom{
      display: flex;
      justify-content: space-around;
      position: absolute;
      bottom:0;
      width:100%;
      font-size: 0.9rem;
      padding:0.5rem 0;
      background:white;
      
  }
  .amount_part{
      text-align: center;
      border-right:2px solid #e4e4e4;
      padding-right:0.8rem;
  }
  .red{
    color:red;
    font-size: 1.2rem;
  }
  .only{
      color:red;
     font-size: 0.8rem;

  }
  .slide-enter,.slide-leave-active{
      transform: translate(2rem);
      opacity: 0;
  }
  .slide-enter-active,.slide-leave-active{
      transition:all 0.4s 
  }

 
 
</style>


