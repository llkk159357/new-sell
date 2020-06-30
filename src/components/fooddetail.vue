<template>
    <div class="fooddetail">
    <div class="title">
    <span   class="el-icon-arrow-left icon"  v-on:click="cover"></span>  
    <span  class="name">{{item.name}}</span>
    </div>
     <img :src="item.image_path" alt="">
     <div>
      {{item.description}}
     </div>
     <div>
         {{item.name}}
     </div>
     <div>
     <span>评分</span><span>{{item.rating}}</span>
     </div>
     <div>
      <span>月售{{item.rating_count}}单</span><span>售价{{item.specfoods[0].price}}起</span>
     </div>
     <div>
         <span>评论数{{item.rating_count}}</span><span>好评率{{item.satisfy_rate}}%</span>
      
     </div>
    </div>
</template>
<script>
import headtitle from '../components/headtitle'
export default {
    props:['item'],
    components:{
        headtitle
    },
    methods:{
        cover:function(){
       
            this.item.seen=!this.item.seen
        },
       
    }
}
</script>
<style scoped>
  .fooddetail{
      width: 100%;
      height:100%;
      background:#f5f5f5;
      position: fixed;
      top:0;
      z-index:20;
  }
  .title{
    height:1.7rem;
    line-height: 1.7rem;
    vertical-align: center;
    background:#409EFF;
    font-size:0.8rem;
    position: relative;
    text-align: center;

  }
  .icon{
     position:absolute;
     left:0.5rem;
     top:0.4rem;

  }
  .name{
      display: inline-block;
      width:6rem;
      overflow: hidden;
  }
</style>


