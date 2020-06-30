<template>
    <div>
     <headtitle :title="title" class="headtitle"></headtitle>
     <div class="tab">
     <div class="title" v-on:click="recmend" :style={color:chooseable2}>
       <span>{{title}}</span>  <span class="el-icon-caret-bottom icon"  :style="{transition:'transform 0.3s',transform:'rotate('+degs3+'deg)'}"  :class="{move:ismove}"></span><span class="line"></span>
     </div>    
     <div class="choose" v-on:click="choose"  :style="{color:chooseable}">
       <span> 排序</span><span class="el-icon-caret-bottom icon"  ref="choose" :style="{transition:'transform 0.3s',transform:'rotate('+degs1+'deg)'}" ></span><span class="line"></span>
     </div>
     <div class="sort" v-on:click="sort"  :style="{color:chooseable3}">
    <span>筛选</span><span class="el-icon-caret-bottom icon" :style="{transition:'transform 0.3s',transform:'rotate('+degs2+'deg)'}"   :class="{move:ismove}" ></span>
     </div>
     </div>
  <transition name="fade">
   <div class="outer"  v-if="sorted">
      <div class="kinds"  >
        <div class="kind">
         <span>{{kind[0].name}} </span> 
          <div>
           <span>{{kind[0].count}}</span> <span class="el-icon-arrow-right"></span> 
             </div>  
        </div>
       <div v-for="(item,index) in kind" :key="index"  v-if="index>0" class="catagory" v-on:click="select(item)">
         <div>
           <img :src="imgbaseurl+item.image_url" alt="" class="iconimg">  {{item.name}}
         </div>
         <div>
           <span>{{item.count}}</span>
         <span class="el-icon-arrow-right"></span>   
         </div>
       
       </div>
       
      </div>
       <div class="outersub">
         <div v-for="(item,index)  in sublists"  :key="index"  v-if="index>0"  class="sublist">
         <span>{{item.name}}</span>
         <span>{{item.count}}</span>
       </div>
       </div>
       
     </div>
  </transition>
    
  
    


     <transition name="slide">
         <div v-if="ifchoose"  class="sortpart" >
         
       <div v-for="item in items" :key="item.name"  :class="{blued:item.canseen}" class="list">
       <span :class="item.class"></span>
       <div class="detail">
          <span v-on:click="change(item)">{{item.name}}</span>
       <span v-if="item.canseen" class="el-icon-check"></span>
       </div>
      
        </div>
      </div>
      
     </transition>
     <transition name="fade">
      <div class="delivery" v-if="cansort">
        <div >
         <div>配送方式</div>
         <div class="delivery_mode" v-on:click="check(delivery)">
             <span v-if="delivery[0].canseen">蜂鸟</span>
             <span class="el-icon-check" v-else></span>
             <span>{{delivery[0].text}}</span>
             </div>
        </div>  
        <div class="activity">
         <div>商家属性（可以多选）</div>
          <div>
            <ul>
             <li v-for="item in foodactivity" class="item" :key="item.name"  v-on:click="add(item)">
                 <span v-if="item.canshow">{{item.icon_name}}</span>
                 <span class="el-icon-check" v-else></span>
                 <span>{{item.name}}</span>
                 </li>    
           </ul>      
          </div>
        </div>
        <div class="control">
         <span class="btn clear" v-on:click="clear">清空</span>
         <span class="btn sure">确定</span><span v-if="num>0">({{num}})</span>
        </div>
      </div>
     </transition>
     <shop :shoplists="shoplists"  class="shoplists"  :class="{colored:seen}"></shop>
    </div>
</template>
<script>
import store from '../store/index'
import shop from '../components/shoplist'
import headtitle from '../components/headtitle'
import {getcatagory,foodmenu,shoplist,delivery,foodactivity, foodcatagory,handleimg} from '../js/getdata'
export default {
    data(){
     return{
         ifchoose:false,
       
         lists:"",
         sublists:"",
         menu:"",
         title:"",
         shoplists:"",
         offset:0,
         latitude:"",
         longitude:"",
         ismove:false,
         moved:false,
         seen:false,
         isblue:false,
         foodactivity:"",
         catagory:"",
         delivery:"",
         sorted:false,
         kind:"",
         imgbaseurl: "https://fuss10.elemecdn.com/",
         num: 0,
         cansort:"",
         items:[
        {name:'智能排序',canseen:false,class:'el-icon-sort icon'},
        {name:'距离最近',canseen:false,class:"el-icon-location-outline icon"},
        {name:'销量最高',canseen:false,class:"el-icon-time icon"},
        {name:'起送价最低',canseen:false,class:"el-icon-share icon"},
        {name:'配送速度最快',canseen:false,class:"el-icon-edit icon"},
        {name:'评分最高',canseen:false,class:"el-icon-help icon"}
         ]
     }
    },
    computed:{
     chooseable:function(){
          if(this.ifchoose){
              
              return '#409EFF'
          
          }else{
              
              return ''
               
          }
        
     },
     chooseable2:function(){
       if(this.sorted){
           return '#409EFF'
       }else{
           return ''
       }
     },
     chooseable3:function(){
         if(this.cansort){
             return '#409EFF'
         }else{
             return ''
         }
     },
     degs1:function(){
       if(this.ifchoose){
          return '180'
       }else{
           return '0'
       }
     },
     degs2:function(){
        if(this.cansort){
            return '180'
        }else{
            return 0
        }
      },
      degs3:function(){
          if(this.sorted){
              return 180
          }else{
              return 0
          }
      },
     oldcatagory:function(){
         var newcatagory=this.foodactivity
          for(var i=0;i<newcatagory.length;i++){
              newcatagory[i].canshow=true
          }
         return newcatagory
     },
     id:function(){
         return store.state.id
     },
     geohash:function(){
         return store.state.geohash
     }
    },
    created:function(){
     
        this.title=this.$route.query.title

        var latitude=this.$route.query.latitude
        var longitude=this.$route.query.longitude

        getcatagory(latitude,longitude,this.id).then((res)=>{
          this.lists=res
        }).catch((err)=>console.log(err))

     foodmenu(this.id).then((res)=>{
          this.menu=res.data
    
      })
     var arr=this.geohash.split(',')
          this.latitude=arr[0]
           this.longitude=arr[1]
        
       shoplist(this.latitude,this.longitude,this.offset).then((res)=>{
            this.shoplists=res.data
        })
       delivery(this.latitude,this.longitude).then((res)=>{
             res.data[0].canseen=true
          this.delivery=res.data

            
       })
       foodactivity(this.latitude,this.longitude).then((res=>{
                res.data.forEach(function(item){
                         item.canshow=true
                 }) 
                 this.foodactivity=res.data
       })
       )
       foodcatagory(this.latitude,this.longitude).then((res=>{
               
                res.data.forEach(function(item){
                      if(item.image_url.indexOf('png')>-1){
                          item.image_url+='.png'
                      }else if(item.image_url.indexOf('jpeg')>-1){
                          item.image_url+='.jpeg'
                      }
                })
                
                 this.kind=res.data
          }) 
       )
    },
    components:{
        headtitle,
        shop
    },
    methods:{
        choose:function(){
         this.ifchoose=!this.ifchoose
         this.cansort=false
         this.sorted=false
           
        },
        change:function(item){
            this.seen=!this.seen
          for(var i=0;i<this.items.length;i++){
              this.items[i].canseen=false    
          }
            item.canseen=!item.canseen
        },
        sort:function(){
            this.ifchoose=false  
         this.cansort=!this.cansort   ;
         this.sorted=false
        },
        add:function(item){
           console.log(item)
          item.canshow=!item.canshow
           if(!item.canshow){
               this.num++
           }else{
               this.num--
           }
        },
        check(list){
          list[0].canseen=!list[0].canseen
          if(list[0].canseen){
              this.num--
          }else{
              this.num++
          }
        },
        clear:function(){
            this.num=0
            this.delivery[0].canseen=true
            for(var i=0;i<this.foodactivity.length;i++){
                this.foodactivity[i].canshow=true
            }
        },
        recmend:function(){
           this.sorted=!this.sorted
           this.ifchoose=false
           this.cansort=false
        },
        select:function(item){
          
         this.sublists=item.sub_categories
         
        }

         }

} 
</script>
<style scoped>
     .headtitle{
         position: relative;
         z-index: 22;
     }
    .tab{
        display: flex;
        justify-content: space-around;
        font-size:0.9rem;
        background:#fff;
        width: 100%;
        position: relative;
        z-index: 22;
       
    }
    .tab *{
        padding:0.2rem;
        vertical-align: middle;
    }
   .line{
    border-right:1px solid grey;
    margin-left:1rem;
   }
   .move{
       transition:transform 0.2s linear;
       transform:rotate(180deg)
   }
   .backmove{
      transition:transform 0.2s linear;
       transform:rotate(-180deg) 
   }
   .icon{
       font-size: 0.8rem;
   }
  
  
     .icon{
         margin-right:0.8rem;
         font-size: 1rem;
     }
     .slide-enter{
      transform: translateY(-100%)
     }
     .slide-enter-active,.slide-leave-active{
       
       transition: transform 0.2s linear   
     }
     .slide-leave-to{
     transform: translateY(-100%)    
     }
    
     
     .blued{
         color:#409EFF;
     }
     .list{
         display: flex;
         margin:0.4rem;
        
         align-items: center;
       
     }
     .detail{
         padding:0.8rem;
         display: flex;
         justify-content: space-between;
         width:90%;
         border-bottom:1px solid #e4e4e4;
     }
     .colored{
         background: rgba(0, 0, 0, 0.3)
         
     }
     .item{
      display: inline-block;
      width:26%;
      border:0.4px solid #e4e4e4;
      padding:0.4rem 0;
      margin-top:0.5rem;
      margin:0.5rem 0.5rem;
     }
     .delivery{
    font-size:0.7rem;
  
     }
     .activity{
         margin-top:0.8rem;
     }
     .btn{
        width:45%;
        height:2rem;
        
     }
     .control{
        text-align: center;
        background:#f5f5f5;
        padding:0.3rem 0;
     }
     .clear{
        background:#fff;
        border:none;
        margin-right:0.5rem;
         border-radius: 5px;
     }
     .sure{
        background:#56d176;
        border:none;
        border-radius: 5px;
     }
     .delivery_mode button{
         width:26%;
         height:1.5rem;
          background:#fff;
          border:1px solid #e4e4e4;
       
     }
     .kinds{
         width:50%;
         background:#f5f5f5;
         float:left;
         font-size:0.9rem;
     }
     .kinds img{
     width:1rem;
     }
     .catagory{
        display: flex;
        justify-content: space-between;
        margin-bottom:1.2rem;
         padding: 0 0.5rem;
        align-items: center;

     }
     .iconimg{
         margin-right:0.4rem;
     }
     .kind{
         display: flex;
         justify-content: space-between;
          font-size: 0.7rem;
          margin-bottom:0.6rem; 
     }
     .sublist{
         display: flex;
         justify-content: space-between;
         border-bottom:1px solid #e4e4e4;
         margin-bottom:1.2rem;
         font-size: 0.9rem;
         padding:0.3rem 0.4rem;
       
     }
     .outersub{
         float:right;
         width:48%;
         height:15.8rem;
         overflow-y: auto;
     }
    .move-enter ,.fade-enter{
     transform: translateY(-100%);
     opacity: 0
     }
     .move-enter-active,.fade-enter-active{
       transition:all 0.3s ;
     }
.move-leave-to, .fade-leave-to{
     transform: translateY(-100%);
     opacity: 0;
     }
   .move-leave-active ,.fade-leave-active{
 transition: all 0.3s ;
     }
    .outer,.sortpart,.delivery{
         position: absolute;
         z-index: 7;
         background: white;
         width:100%;
     }
    .shoplists{
        margin-top:1.5rem;
    }
</style>


