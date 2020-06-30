<template>
    <div>
    <headtitle :title="title"></headtitle>
    <loading></loading>
    </div>
</template>
<script>
import headtitle from '../components/headtitle'
import loading from '../components/loading'
import {getorders} from '../js/getdata'

export default {
    data(){
        return{
        title:"订单",
        lists:"",
        offset:0,
        id:2
        }
    },
    components:{
        headtitle,
        loading
    },
    created:function(){
        getorders(this.offset,this.id).then((res)=>{
           this.lists=res.data
        })
    }
}
</script>

