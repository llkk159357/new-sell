<template>
    <div class="shop">
       <transition name="slide">
      <fooddetail :item="item" v-if="item.seen" ></fooddetail>
      </transition>
       <div class="fooddetail" v-if="detail">
        <headtitle title="商家详情"></headtitle>  

         <div class="sell_activity">
          <div class="activity_title">活动属性</div> 
          <div>
           <div v-for="(item,index) in food.activities" :key="index">
           <span>{{item.icon_name}}</span> <span>{{item.description}}(APP专享)</span>
           </div>   
           <div v-for="(item,index) in food.supports" :key="index">
             <span>{{item.icon_name}}</span>
             <span>{{item.description}}</span>
           </div>
          </div>  
         </div>
         <div class="foodsafe">
             <div class="foodsafe_top">
               <div>
              食品监督安全公式
             </div>
             <div class="rigister">
                企业认证详情<span class="el-icon-arrow-right"></span>
             </div>
             </div>
             
         
           </div>
         <div class="shopinfro">
          <div>
              商家信息
          </div>
           <div>
            小世界书吧
            </div>  
          
         
           <div>
            地址:{{food.address}}
           </div>
           <div>
               营业时间:{{food.opening_hours}}
           </div>
           <div class="license">
            <div>营业执照</div>
            <div class="el-icon-arrow-right"></div>
           </div>
           <div class="license">
               <div>餐饮服务许可证</div>
               <div class="el-icon-arrow-right"></div>
           </div>
         </div>
         </div>
      <div class="notice" v-if="close">
        
       <div>
        {{food.name}}
       </div>
       <div>
        <div>
        优惠信息
        </div>
        <div>
        {{food.activities[0].description}}(App专享)
        </div>
       </div>
       <div>
        <div>商家公告</div>
        <div>{{food.promotion_info}}</div> 
       </div>
       <div class="el-icon-error" v-on:click="doclose">

       </div>
      </div>
        <div class="shopdetail">
          <img :src="imgBaseUrl+food.image_path" class="bgc_img"  alt="">   
         <div class="el-icon-arrow-left "></div>   

         <div class="infro">
          <img :src="imgBaseUrl+food.image_path" alt="">
          <div class="innerinfro">
              <div>
              <div>
            {{food.name}}
            </div>  
            <div>
            <span>商家配送/</span>
            <span>分钟送达/</span>
            <span>配送费{{food.float_delivery_fee}}</span>
             </div> 
            <div>
               公告： {{food.promotion_info}}
            </div>
              </div>
            <div class="el-icon-arrow-right" v-on:click="showfooddetail" ></div>
          </div>
       
         </div>
         <div class="activity">
          <div>
            <span v-if="food.activities.length>0">{{food.activities[0].icon_name}}</span>
          <span v-if="food.activities.length>0">  {{food.activities[0].description}}(App专享)</span>
           </div>   
          <div>
            <span>一个活动</span>
            <span class="el-icon-arrow-right" v-on:click="change"></span>
          </div>
         </div>
        
        </div>   
     <div class="nav">
      <span v-on:click="showgood">商品</span>
      <span v-on:click="showrating">评价</span>   
     </div>
     <div class="good" v-if="hasgood">
     <div class="menu">
       <div v-for="(item,index) in menu" :key="index" class="item">
         {{item.name}}
       </div>
      
      </div> 
         <div class="detail">
         <div v-for="(list,index) in menu" :key="index">
          <div class="title">
         <span> {{list.name}}</span>  <span class="description">{{list.description}}</span>
          </div>
          <div>
            <div v-for="(item,index) in list.foods" :key="index" class="foodlist" >
            
             <img :src="'https://images.weserv.nl/?url='+imgBaseUrl+item.image_path" v-on:click="showdetail(item)">
             <div class="innerdetail" >
            <div class="name">
                {{item.name}}
            </div>
            <div class="description">
                {{item.description}}
            </div>
            <div class="sell">
                <span>月售{{item.month_sales}}</span>
                <span>好评率{{item.satisfy_rate}}%</span>
            </div>
            <div>
            
            </div>
            <div class="cart">
           <div class="price">
           <span >{{item.specfoods[0].price}}</span> 起 
            </div> 
            <div>
              <div v-if="item.specifications.length>0"  >
                <span class="el-icon-remove" v-if="item.num>0"></span>
                <span v-if="item.num>0">{{item.num}}</span>
                <span v-on:click="choose(item)">选规格</span>
              </div>
              <div v-else  class="control">
               <span  v-on:click="decrease(item)" class="el-icon-remove icon" v-if="item.num>0">
                   </span><span v-if="item.num>0" >{{item.num}}</span>
                   <span v-on:click="addtocart(item)" class="el-icon-circle-plus icon"></span>
              </div>
            </div>
            </div>
             </div>
            </div>  
          </div>
         </div>   
         </div>
     </div>
      <div class="rating" v-else>
          <div class="rating_part">
            <div class="score">
            <div>{{shoprating.overall_score.toFixed(1)}}</div>
            <div>综合评价</div>
            <div>高于周边商家{{(shoprating.compare_rating*100).toFixed(0)}}%</div>
            </div>
            <div>
            <div>
            <span>服务态度</span><rating-star :rating="shoprating.service_score"></rating-star>
            </div>
            <div>
            <span>菜品评价</span><rating-star :rating="shoprating.food_score"></rating-star>
            </div>
            <div>
            <span>送达时间</span><span>{{shoprating.deliver_time}}分钟</span>
            </div>
            </div>
          </div>
          <div class="ratingkind">
             <ul>
            <li v-for="(item,index) in ratingkind"  :key="index" class="ratinglist" v-on:blur.native="loseblur(item)" v-on:click="changecolor(item)" :class="{blued:!item.unsatisfied,greyed:item.unsatisfied,colored:item.seen}">
               <span> {{item.name}}</span><span>({{item.count}})</span>
            </li>
             </ul>
          </div>

       <div v-for="(item,index) in rating" :key="index"  class="list">
         

        <img :src="item.avatar" alt=""  class="photoimg">
        <div class="right_part">

       
        <div class="user">
         <div class="username">
          <div>
             {{item.username}}  
           </div>
            <div>
            {{item.rated_at}}
         </div>
         </div>
          <div class="star">
             <span>{{item.rating_star}}</span><span>{{item.time_spent_desc}}</span>
         </div>
         <div>
           <img v-for="(item,index) in item.item_ratings"  :key="index" class="imgshow"  :src="'https://fuss10.elemecdn.com/'+item.image_hash+'.jpeg'" alt="">
         </div>
         <div>
        <span v-for="(item,index)  in item.item_ratings" :key="index"  class="foodname">
            {{item.food_name}}
        </span>
         </div>
        
         </div>
        
         </div>
        </div>   
      </div>
      <addcart :item="list"  v-if="showcart"></addcart>
      <cart  :lists="lists" :num="num" :total="total" v-on:decrease="getdecrease" v-on:clear="clear"></cart>
      
     </div>
</template>
<script>
import {
  getcatagory,
  foodmenu,
  getrating,
  getratingstar,
  ratingcatagory
} from "../js/getdata";
import store from "../store/index";
import { imgBaseUrl } from "../js/imgbaseurl";
import addcart from "../components/addcart";
import cart from "../components/cart";
import fooddetail from "../components/fooddetail";
import ratingStar from "../components/rating";
import headtitle from "../components/headtitle";
export default {
  data() {
    return {
      detail: false,
      food: "",
      menu: "",
      imgBaseUrl,
      list: "",
      showcart: false,
      lists: [],
      items: [],
      num: 0,
      total: 0,
      offset: 0,
      close: false,
      item: "",
      rating: "",
      imgBaseUrl: "//elm.cangdu.org/img/",
      hasgood: true,
      shoprating: "",
      ratingkind: ""
    };
  },
  computed: {
    id: function() {
      return store.state.id;
    }
  },
  created: function() {
    var latitude = this.$route.query.latitude;
    var longitude = this.$route.query.longitude;

    getcatagory(latitude, longitude, this.id).then(res => {
      this.food = res.data;
    });
    foodmenu(this.id).then(res => {
      res.data.forEach(function(item) {
        item.foods.forEach(function(list) {
          list.num = 0;
          list.seen = false;
        });
      });

      this.menu = res.data;
    });
    getrating(this.offset, this.id).then(res => {
      res.data.forEach(function(item) {
        if (item.avatar.indexOf("jpeg") > -1) {
          item.avatar = "https://fuss10.elemecdn.com/" + item.avatar + ".jpeg";
        } else if (item.avatar.indexOf("jpg") > -1) {
          item.avatar = "https://fuss10.elemecdn.com" + item.avatar + ".jpg";
        } else if (item.avatar == "") {
          item.avatar = "//elm.cangdu.org/img/" + "default.jpg";
        }
      });

      this.rating = res.data;
    });
    getratingstar(this.id).then(res => {
      this.shoprating = res.data;
    }),
      ratingcatagory(this.id).then(res => {
        res.data.forEach(function(item) {
          item.seen = false;
        });
        this.ratingkind = res.data;
      });
  },
  methods: {
    showfooddetail: function() {
      this.detail = !this.detail;
    },
    loseblur: function(item) {
      item.seen = !item.seen;
      console.log("blue\\");
    },
    changecolor: function(list) {
      this.ratingkind.forEach(function(item) {
        if (item != list) {
          item.seen = false;
        }
      });
      list.seen = !list.seen;
    },

    doclose: function() {
      this.close = !this.close;
    },
    change: function() {
      this.close = !this.close;
    },
    addtocart: function(list) {
      this.num++;
      list.num++;
      this.total += list.specfoods[0].price;

      if (this.lists.indexOf(list) == -1) {
        this.lists.push(list);
      }
    },
    decrease: function(item) {
      item.num--;
      this.num--;
      this.total -= item.specfoods[0].price;
    },
    choose: function(item) {
      this.list = item;

      this.showcart = !this.showcart;
    },
    clear: function() {
      this.num = 0;
      this.total = 0;
      this.lists = [];
      this.items = [];
      this.menu.forEach(function(item) {
        item.foods.forEach(function(list) {
          list.num = 0;
        });
      });
    },
    getdecrease: function($event) {
      for (var i = 0; i < this.lists.length; i++) {
        if (Object.values($event.name) > -1) {
          this.lists[i].num--;
        }
      }
    },
    showdetail: function(item) {
      this.item = item;
      item.seen = !item.seen;
    },
    showgood: function() {
      this.hasgood = true;
    },
    showrating: function() {
      this.hasgood = false;
    }
  },
  components: {
    addcart,
    cart,
    fooddetail,
    ratingStar,
    headtitle
  }
};
</script>
<style scoped>
.control{
  display: flex;
  align-items: center;
}
.control *{
  margin-left:0.3rem;
}
.nav {
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #e4e4e4;
  margin-bottom: 1rem;
  padding: 0.58rem 0;
}
.menu {
  background: #f5f5f5;
  width: 20%;
  font-size: 0.8rem;
}
.detail {
  position: relative;
  z-index: 2;
  overflow: hidden;
  width: 80%;
  padding-right: 0.5rem;
}
.item {
  margin: 1.5rem 0;
}
.good {
  display: flex;
  justify-content: flex-start;
}
.title {
  background: #f5f5f5;
}
.description {
  font-size: 0.7rem;
}
.foodlist {
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: flex-start;
  font-size: 0.7rem;
}
.foodlist img {
  height: 3rem;
}
.name {
  font-size: 0.9rem;
  color: #333;
}
.cart {
  display: flex;
  justify-content: space-between;
}
.innerdetail {
  width: 100%;
}
.price {
  color: #f60;
  font-size: 0.8rem;
  font-weight: bold;
  margin-top: 0.2rem;
}
.description {
  margin-top: 0.2rem;
}
.sell {
  margin-top: 0.2rem;
}
.icon {
  color: #409eff;
  font-size: 1.2rem;
}
.slide-enter {
  transform: translate(100%);
}
.slide-enter-active {
  transition: transform 0.3s linear;
}
.list {
  display: flex;

  margin: 1rem 0;
  padding: 0.6rem 0.5rem;
  border-bottom: 1px solid #e4e4e4;
}
.foodname {
  display: inline-block;
  width: 2.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.rating {
  font-size: 0.7rem;
}
.photoimg {
  height: 1.8rem;
  margin-right: 0.5rem;
}
.user {
  display: inline-block;
}
.username {
  margin-bottom: 0.6rem;
  display: flex;
  justify-content: space-between;
}
.star {
  margin-bottom: 0.6rem;
}
.imgshow {
  width: 4rem;
}
.activity {
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 7;
}
.shopdetail {
  font-size: 0.7rem;
  position: relative;
  z-index: 13;
  padding: 0.8rem;
  height: 4rem;
  overflow: hidden;
}
.el-icon-arrow-left {
  position: absolute;
  left: 0.2rem;
  top: 0.8rem;
  z-index: 15;
  font-weight: bold;
  color: white;
  font-size: 1.5rem;
}
.infro {
  display: flex;
  justify-content: flex-start;
  position: relative;
  z-index: 8;
  color: white;
}
.innerinfro {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
}
.notice {
  background-color: #262626;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  text-align: center;
  color: white;
  z-index: 20;
}
.infro img {
  height: 3.5rem;
}
.bgc_img {
  width: 100%;
  position: absolute;
  z-index: 1;
  filter: blur(10px);
}
.right_part,
.user {
  width: 95%;
}
.rating_part {
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 0.8rem;
}
.score {
  margin-right: 0.8rem;
}
.ratinglist {
  display: inline-block;
  width: 25%;
  border: 1px solid #e4e4e4;
  padding: 0.2rem;
  border-radius: 10px;

  margin-right: 0.6rem;
  margin-bottom: 0.4rem;
}

.ratingkind {
  padding: 0.8rem;
  font-size: 0.7rem;
}
.blued {
  background: #ebf5ff;
}
.greyed {
  background: #e4e4e4;
}
.colored {
  background: #409eff;
}
.fooddetail {
  font-size: 0.8rem;
  position: fixed;
  z-index: 25;
  top: 0;
  height: 100%;
  width: 100%;
  background: #f5f5f5;
 
}
.shop {
  position: relative;
}
.sell_activity {
  margin-top: 0.3rem;
  background: white;
   padding:0 0.5rem;
}
.activity_title {
  border: 1px solid #e4e4e4;
  padding: 0.4rem 0;
}
.foodsafe {
  margin-top: 0.8rem;
  background: white;
    padding:0 0.5rem;
}
.foodsafe_top {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}
.shopinfro {
  margin-top: 0.8rem;
    padding:0 0.5rem;
   background: white;  
}
.license {
  display: flex;
  justify-content: space-between;
}
.rigister {
  color: grey;
}
</style>


