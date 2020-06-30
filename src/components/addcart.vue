<template>
    <div class="boxcart" >
     <div>
    <div>{{item.name}}</div>
    <div>
    <div>规格</div>
    <div>
    <span v-for="(item,index) in item.specfoods" :key="index" class="item">{{item.specs_name}}</span>
    </div>
    </div>
    <div>
    <span>{{item.specfoods[0].price}}</span>
    <span>加入购物车</span>
    </div>
     </div>
    </div>
</template>
<script>
export default {
  props: ["item"]
};
</script>
<style scoped>
.boxcart {
  position: fixed;
  left: 25%;
  top: 45%;
  font-size: 0.7rem;
  width: 10rem;
  height: 10rem;
  border: 1px solid #e4e4e4;
  z-index: 5;
  background: #f5f5f5;
}
.item {
  margin: 0 0.5rem;
  border: 0.4px solid #e4e4e4;
  padding: 0.2rem;
}
</style>


