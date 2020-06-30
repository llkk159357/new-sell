<template>
    <div>
     <div class="header">
    <span class="el-icon-search"></span>
    <span>{{name}}</span>
    <span class="el-icon-s-custom"></span>
     </div>
      <div class="swiper">
       <swiper :options="swiperOption">
           <swiper-slide >
               <div v-for="item in lists1"  :key="item.imgbaseurl"  v-on:click="tofood(item.title)" class="list">
            <div>
           <img :src="imgbaseurl+item.image_url"  alt="">          
            </div>
              <div class="title">
                 {{item.title}} 
              </div>
               </div>
                
           </swiper-slide>
         <swiper-slide  >
                  <div v-for="item in lists2"  :key="item.imgbaseurl"  v-on:click="tofood(item.title)"  class="list">
                      <div>
              <img :src="imgbaseurl+item.image_url"  alt="">              
                      </div>
                    <div class="title">
                        {{item.title}}
                    </div>
                  </div>
                
           </swiper-slide>
           <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-pagination" slot="pagination"></div>

       </swiper>
      </div>
       <shop :shoplists="shoplists"></shop>
     
    </div>
</template>
<script>
import axios from "axios";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { shoplist } from "../js/getdata";
import shop from "../components/shoplist";
import store from "../store/index";
export default {
  data() {
    return {
      offset: 0,
      name: "",
      lists: "",
      lists1: "",
      lists2: "",
      shoplists: "",
      longitude: "",
      latitude: "",

      imgbaseurl: "https://fuss10.elemecdn.com",
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        autoplay: true
      }
    };
  },
  computed: {
    geohash: function() {
      return store.state.geohash;
    }
  },
  created: function() {
   

    var url = "http://cangdu.org:8001/v2/pois/" + this.$route.query.geohash;

    axios.get(url).then(res => {
      this.name = res.data.name;
    });
    var url = "http://cangdu.org:8001/v2/index_entry/";
    axios.get(url, {
        params: {
          geohash:this.geohash,
          group_type: 1,
          "flags[]": "F"
        }
      })
      .then(res => {
        this.lists1 = res.data.slice(0, 8);
        this.lists2 = res.data.slice(8, 16);
      });
  },
  mounted: function() {
    var arr = this.$route.query.geohash.split(",");
    this.latitude = arr[0];
    this.longitude = arr[1];

    shoplist(this.latitude, this.longitude, this.offset).then(res => {
      this.shoplists = res.data;
    });
  },
  methods: {
    tofood: function(title) {
       
      this.$router.push({
        path: "/food",
        query: { goehash:this.goehash, title: title }
      });
    }
  },
  components: {
    swiper,
    swiperSlide,
    shop
  }
};
</script>
<style scoped>
.header {
  background: #409eff;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 0 0.7rem;
  height:2rem;
  align-items: center;
  font-size:0.8rem;
}

.el-icon-s-custom {
  color: white;
}
img {
  width: 50%;
}

.list {
  display: inline-block;
  width: 25%;
  text-align: center;
}
.swiper-wrapper {
  display: flex !important;
  flex-wrap: wrap !important;
}
.swiper-slide {
  width: 100% !important;
}
.title {
  font-size: 0.7rem;
}
.swiper {
  margin-top: 1rem;
}
.swiper-pagination {
  bottom: 0rem;
}
</style>

