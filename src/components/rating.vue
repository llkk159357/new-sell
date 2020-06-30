<template>
    
    <div class="rating_container">
 <section class="star_container container1">
            <svg class="grey_fill" v-for="num in 5" :key="num">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star"></use>
            </svg>
        </section>
        <div :style="'width:' + rating*2/5 + 'rem'" class="star_overflow">
            <section class="star_container container2" >
                <svg  class="orange_fill" v-for="num in 5" :key="num">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star"></use>
                </svg>
            </section>
        </div>
    </div>
    
</template>
<script>
export default {
     props:['rating'],
    
}
</script>
<style scoped>
    .rating_container{
        position: relative;
        margin-right:0.5rem;
        height:0.8rem;
        display: inline-block;
    }

    .star_container{
        position: absolute;
        width:2rem;
        height:0.8rem;
         display: flex;
    }
    .container1{
        z-index: 2
    }
    .container2{
        z-index: 5
    }
  
     .grey_fill{
          fill: #d1d1d1;
         }
  .orange_fill{
        fill:#ff9a0d;
    }
        .star_overflow{
            overflow: hidden;
          
            height: 100%;
        
        }     
</style>


