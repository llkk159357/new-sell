<template>
    <div class="headtitle">
       <span class="el-icon-arrow-left" v-on:click="back"></span>
       <span class="title">{{title}}</span>
    </div>
       

    
</template>
<script>
export default {
    props:['title'],
    methods:{
 back:function(){
      this.$router.go(-1)
    }
    }
   
}
</script>
<style scoped>
   .headtitle{
     background: #409EFF;
     height:2.4rem;
     line-height: 2.4rem;
     color:white;
     position: relative;
     text-align: center;
   
   }
   .el-icon-arrow-left{
     position: absolute;
     left:0.5rem;
     top:0.6rem;
   }
   .title{
     font-size: 0.8rem;

   }
</style>


