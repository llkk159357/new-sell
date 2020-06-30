<template>
  <div id="app">
     <svg-icon></svg-icon>
    <router-view/>
  </div>
</template>

<script>
import svgIcon from './components/svg'
export default {
  name: 'App',
  components:{
    svgIcon
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
   
  
  
}
li{
  list-style: none;
}
*{
  padding:0;
  margin:0;
}
body{
background-color: #F5F5F5;

}
</style>
