<template>
    <div class="loading">
        <div class="inner">
    <div class="loading_img"  :style="{backgroundPositionY:-(positionY*50)+'px'}">

      </div>
      <div class="bing">

      </div>
        </div>
      
    </div>
</template>
<script>
export default {
    data(){
        return{
          positionY:0
        }
    },
     mounted:function(){
          var self=this
         setInterval(function(){
           self.positionY++
           if(self.positionY==7){
               self.positionY=0
           }
           },600)
        
      }
}
</script>
  
<style scoped>
 .loading_img{
        width:50px;
        height:50px;

        background:url(../assets/icon_loading.png);
        background-size: cover;
       background-repeat: no-repeat;
        
        animation: move  0.6s infinite linear;
     }
      


   
     @keyframes change{
         0%{transform: scale(1)}
         50%{transform: scale(0.3)}
         100%{transform:scale(1)}
     }

  @keyframes move{
         0%{ transform: translateY(0px)}
        50%{transform:translateY(50px)}
        100%{transform: translate(0px)}
     }

   .bing{
    width:60px;
    height:30px;
    background:grey;
    border-radius: 50%;
    animation: change 0.6s infinite linear;

    position: absolute;
    left:-5px;
    bottom:-80px;
   }
    .inner{
    position: absolute;
    left:42%;
    top:45%;
    }

</style>



