<template>
    <div>
     <headtitle :title="title"></headtitle>
     <button type="button" v-on:click="loginout">退出登陆</button>
    </div>
</template>
<script>
import headtitle from '../components/headtitle'
import store from '../store/index'
export default {
    data:function(){
      return{
          title:"退出登陆"
      }
    },
    components:{
        headtitle
    },
    methods:{
     loginout:function(){
    store.commit('getpassword',{password:''})    
     }
    }
}
</script>

