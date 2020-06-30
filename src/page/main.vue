<template>
    <div>
    <transition :name="slide">
    <router-view></router-view>
    </transition>
     <footer-nav></footer-nav>
    </div>
</template>
<script>
import footerNav from '../components/footer'
export default {
    data(){
     return{ 
         slide:""
     }
    },
     components:{
        footerNav
     },
    watch:{
     '$route':function(){
      if(this.$route.path=='book'){
        this.slide='fade'
      }else{
          this.slide='slide'
      }    
     }   
    }
}
</script>
<style scoped>
  
   
</style>


