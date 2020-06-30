<template>
    <div class="expiredhb">
    <headtitle :title="title"></headtitle>
       <div>
         <div v-for="(item,index) in lists"  :key="index" class="item">
          <div class="list">
               <div class="amount">
            <div class="num">{{item.amount}}</div>
            <div>{{item.description_map.sum_condition}}</div>
            </div>   
             <div class="name">
               <div>{{item.name}}</div>
               <div>{{item.description_map.validity_periods}}</div>
               <div>{{item.description_map.phone}}</div>
             </div>
             <div>
               <svg data-v-1bf485b4="" class="expired"><use data-v-1bf485b4="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#expired"></use></svg>
             </div>
           

         </div>  
            <div v-if="item.limit_map" class="limit">
             {{item.limit_map.restaurant_flavor_ids}}
            </div>
          </div>

        

         
       </div>
    </div>
</template>
<script>
import {oldhb} from '../js/getdata'
import headtitle from '../components/headtitle'
export default {
    data(){
     return{
         id:"",
         lists:"",
         title:"过期红包"
     }
    },
     created:function(){
          oldhb(22).then((res)=>{
             this.lists=res.data
          })     
     },
     components:{
         headtitle
     }
}
</script>
<style scoped>
   .expiredhb{
    position:absolute;
    z-index: 5;
    top:0;
    height:100%;
    width:100%;
    background:#f5f5f5;
    color: #999;
   }
   .list{
    display: flex;
    align-items: center;
    padding:1rem 0.5rem;
    justify-content: space-around;
    background:white url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAAAXNSR0IArs4c6QAAAHtJREFUKBVjvHv37n8GKgImKpoFNmoYGcjIyAgK6+VA2o6FhUWInZ1dlomJKQDIP40cbIzERApQ01+g5jAFBYV1yJpB7P///zPev39/IpDOBfGJDcNGbIaBDAC5XFFRsQBIHwDxCRoIVPidmZl5CkgxLgBU8w/owl6QPABvmyDiDQUF7gAAAABJRU5ErkJggg==);
    background-repeat: repeat-x;
    background-size:0.8rem;
   }
   .expired{
      height:4rem;
      width:4rem;
   }
   .amount{
       text-align: center;
    border-right:1px solid grey;
    padding-right:0.9rem;
   }
   .name{
       margin-left:0.8rem;
       font-size: 0.6rem;
   }
   .amount .num{
       font-size: 1.8rem;
   }
   .item{
       margin-bottom:1rem;
   }
   .limit{
     padding:0.5rem 0.5rem;
     background-color: #f9f9f9
   }
</style>




