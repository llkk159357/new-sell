<template>
    <div>
    <div class="hotcity">
     热门城市
    </div>
     <ul>
    <li v-for="item in hotcity" :key="item.id" class="list">
      <router-link :to="'/city/'+item.id">{{item.name}}</router-link>
    </li>
     </ul>
     <div v-for="(list,key) in sorteddata" :key="key" class="part">
         <div>
           {{key}}<span v-if="key=='A'">（按字母排序）</span>
         </div>
         <ul>
           <li v-for="(item,index) in list"  :key="index" class="item" v-on:click="tocity(item.id)">{{item.name}}</li>
         </ul>
     </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      hotcity: "",
      allcity:""
    };
  },
  computed:{
    sorteddata:function(){
       var sort={}
       for(var i=65;i<100;i++){
         if(this.allcity[String.fromCharCode(i)]){
            sort[String.fromCharCode(i)]=this.allcity[String.fromCharCode(i)]
         }
       }
       return sort
    }
  },
  methods:{
  tocity:function(id){
   this.$router.push('/city/'+id)
  }
  },
  mounted:function(){
      console.log(this.sorteddata)
  },
  created: function() {
      console.log(this.sorteddata)
    var url = "http://cangdu.org:8001/v1/cities?type=hot";
    console.log("hello");
    axios.get(url).then(res => {
      this.hotcity = res.data;
      console.log(res);
    var url="http://cangdu.org:8001/v1/cities?type=group"  
    axios.get(url).then((res)=>{
       this.allcity=res.data
       
       
    })
    });
  }
};
</script>
<style scoped>
 .list {
  list-style: none;
  width: 25%;
  display: inline-block;
  text-align: center;
}
a {
  text-decoration: none;
  color: #3190e8;
}
.list {
  border-right: 0.2px solid grey;
  border-bottom: 0.2px solid grey;
  font-size: 0.8rem;
  color: #3190e8;
  padding: 0.3rem;
  box-sizing: border-box;
}
.hotcity {
  font-size: 0.8rem;
  border-top: 0.4px solid grey;
  border-bottom: 0.4px solid grey;
  padding: 0.3rem 0;
}
 .item{
  width:25%;
  display: inline-block;
  border-right: 0.2px solid grey;
  border-bottom: 0.2px solid grey;
  text-align: center;
  height:1.8rem;
  box-sizing: border-box;
  font-size: 0.8rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  line-height: 1.8rem;
 }
 .part{
 box-sizing: border-box;
 }
</style>


