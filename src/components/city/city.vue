<template>
 <div class="select">
<div class="wrapper">
<div class="header-top">
<header-top>
<span> {{cityname}}</span>
</header-top>


</div>
</div>

 <div class="outer-input">
<input type="text" placeholder="请输入商家" v-model="value"  v-on:keyup.enter="save" class="input">
</div>
<div class="outer-submit">
 <input type="submit" v-on:click="search" class="submit">   
</div>
 <div class="search">
   搜索历史 
 </div>
 <div v-if="detail.length>0">
    <ul>
        <li v-for="list in detail" :key="list.name"  v-on:click="tosell(list.geohash)" class="list">
        <div class="name">{{list.name}}</div>
        <div class="address">{{list.address}}</div>
        </li>
    </ul>
 </div>
 <div v-else>
   <ul>
       <li v-for="(item,index) in saves" :key="index">{{item}}</li>
   </ul>
 </div>
</div>
</template>
<script>
import headerTop from "../header";
import { searchplace, currentcity } from "../../js/getdata";
import { setsaves, getsaves } from "../../js/getdata";
import store from "../../store/index";
export default {
  data() {
    return {
      cityname: "",
      value: "",
      detail: "",
      saves: [],
      key: 0
    };
  },
  created: function() {
    this.saves = getsaves();
    var url = "http://cangdu.org:8001/v1/cities/";
    currentcity(url, this.$route.params.id).then(res => {
      this.cityname = res.data.name;
    });
  },
  methods: {
    tosell: function(geohash) {
      this.$router.push({ path: "/sell", query: { geohash: geohash } });
      console.log(geohash);
      store.commit("getgeohash", { hash: geohash });
    },
    back: function() {
      this.$router.go(-1);
    },
    search() {
      searchplace(this.$route.params.id, this.value).then(res => {
        this.detail = res.data;
      });
    },
    save: function() {
      setsaves(this.key, this.value);
      this.key++;
    }
  },
  components: {
    headerTop
  }
};
</script>
<style scoped>
li {
  list-style: none;
}

.wrapper {
  background: #409eff;
  font-size: 0.8rem;
  margin-bottom: 0.7rem;
}
.submit {
  background: #409eff;
  width: 18rem;
  border: none;
  height:2.2rem;

}
.outer-submit {
  text-align: center;
}
.input {
  width: 18rem;
  font-size: 1.0rem;
  height: 1.8rem;
  border: none;
}
.outer-input {
  text-align: center;
  margin: 0.8rem 0;

}

.search {
  color: grey;
  font-size: 1rem;
  padding-left: 0.6rem;
  margin-top:0.7rem;
}
.list {
  border-bottom: 1px solid #e4e4e4;
  margin-bottom: 0.8rem;
  padding: 0.3rem 0;
  margin-left: 1.5rem;
}
.address {
  font-size: 0.9rem;
}
.name {
  font-size: 0.8rem;
}
</style>


