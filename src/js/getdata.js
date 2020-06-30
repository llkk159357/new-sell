import axios from 'axios'
var url = "http://cangdu.org:8001/v1/pois"


export const searchplace = (cityid, value) => axios.get(url, {
    params: {
        type: 'search',
        city_id: cityid,
        keyword: value
    }
});
 
export const currentcity=(url,number)=>axios.get(url+number)
export const getsaves = function () {
    var arr = []
    var len = localStorage.length

    for (var i = 0; i < len; i++) {
        arr.push(localStorage.getItem(i))
    }
    return arr
}
export const setsaves = function (key, value) {
    var arr = []
    var len = localStorage.length

    for (var i = 0; i < len; i++) {
        arr.push(localStorage.getItem(i))
    }
    if (arr.indexOf(value) === -1) {
        localStorage.setItem(key, value)
    }



}
 export const shoplist=function(longitude,latitude,offset,restaurant_category_id="",restaurant_category_ids="",order_by="",delivery_mode="",support_ids=[]){
      let supportStr='';
     
       var url='http://cangdu.org:8001/shopping/restaurants'
       return axios.get(url,{params:{
        latitude,
		longitude,
		offset,
		limit: '20',
		'extras[]': 'activities',
		keyword: '',
		restaurant_category_id,
		'restaurant_category_ids[]': restaurant_category_ids,
		order_by,
		'delivery_mode[]': delivery_mode + supportStr

             }
       })


 }

 export const getcatagory=function(latitude,longitude,shopId){
           var url='http://cangdu.org:8001/shopping/restaurant/'+shopId
             return axios.get(url,{params:{
                 latitude,
                 longitude:longitude+'&extras[]=activities&extras[]=album&extras[]=license&extras[]=identification&extras[]=statistics'
             
                  }
             })
 }
 export const foodmenu=function(restaurant_id){
     var url="http://cangdu.org:8001/shopping/v2/menu"
    return axios.get(url,{params:{
     restaurant_id
    }
    })
 }

 export const delivery=function(latitude,longitude){
         var url="http://cangdu.org:8001/shopping/v1/restaurants/delivery_modes"
         return axios.get(url,{params:{
             latitude,
             longitude,
             kw:'' 
         }})
 }
 
export const foodactivity=function(latitude,longitude){
    var url="http://cangdu.org:8001/shopping/v1/restaurants/activity_attributes"
    return axios.get(url,{params:{
        latitude,
        longitude,
        kw:''  
    }})
}
export const foodcatagory=function(latitude,longitude){
    var url="http://cangdu.org:8001/shopping/v2/restaurant/category"

    return axios.get(url,{params:{
       latitude,
       longitude
    }
    })
}
export const handleimg=function(url){
    
       
}
export const getrating=function(offset,shopid){
	   
     var url="http://cangdu.org:8001/ugc/v2/restaurants/" + shopid + "/ratings"
       return axios.get(url,{params:{
        has_content: true,
    	offset,
	    limit: 10,
	    tag_name:""   
       }
    })
}
//* rating
 export const getratingstar=function(shopid){
     var url="http://cangdu.org:8001"+ '/ugc/v2/restaurants/' + shopid + '/ratings/scores'
     return axios.get(url)
 }
 //*ratingcatagory 

 export const ratingcatagory=function(shopid){
     var url="http://cangdu.org:8001"+'/ugc/v2/restaurants/' + shopid + '/ratings/tags'

     return axios.get(url)

 }
 //* 短信验证码

 export const getmessage=function(phone){
     var url="http://cangdu.org:8001/v4/mobile/verify_code/send"

     return axios.post(url, {params:{
        mobile: phone,
        scene: 'login',
        type: 'sms'     
          } 
     })
 }
 //*图片验证码
 export const picturemessage=function(){
    var url="http://cangdu.org:8001/v1/captchas"
    return axios.post(url,{})
 }
 //*红包
  export const getearning=function(id){

      var url="http://cangdu.org:8001/"+'promotion/v2/users/' + id + '/hongbaos?limit=20&offset=0'

       return  axios.get(url)


  }
//*
export const logincount=function(username,password,captcha_code){
    var url="http://cangdu.org:8001/"+'v2/login'
   return axios.post(url,{params:{
     username,
     password, 
     captcha_code
   }
   })


}
//*
  export const oldhb=function(id){
      var url="http://cangdu.org:8001"+'/promotion/v2/users/' + id + '/expired_hongbaos?limit=20&offset=0'
         return axios.get(url)


  }  
  //*

  export const  exchange=function(exchange_code,captcha_code,id){
        var url="http://cangdu.org:8001/"+'v1/users/' + id + '/hongbao/exchange'
        return axios.post(url,{params:{
            exchange_code,
            captcha_code,   
        }})
  }
  //* 
  export const getorders=function(offset,user_id){
       var url="http://cangdu.org:8001/"+'bos/v2/users/' + user_id + '/orders'
   return axios.get(url,{params:{
         offset,
         limit: 10,
       } 
   })

  }