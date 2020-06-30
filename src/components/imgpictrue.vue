<template>
    <div class="wrapper">
     <img :src="path" alt="">
     <div>
        <span>看不清</span><br>
        <span v-on:click="next">换一张</span>
     </div>
    </div>
</template>
<script>
import {picturemessage} from '../js/getdata'
export default {
    props:['path'],
    methods:{
        next:function(){
          this.$emit('next')
        }
    }
}
</script>
<style scoped>
  .wrapper{
      display: flex;
    
  }
</style>


