<template>
    <div class="header">
     <span class="el-icon-arrow-left" v-on:click="back"></span> 
     <slot></slot>
    <span v-on:click="back">切换城市</span>
    </div>
</template>
<script>
export default {
  methods: {
    back: function() {
      this.$router.go(-1);
    }
  }
};
</script>
<style scoped>
   .header{
       display: flex;
       justify-content: space-between;
       margin:0 8px;
       height:2.4rem;
       line-height:2rem;
       align-items:  center;
       font-size: 1rem;
   }



</style>


