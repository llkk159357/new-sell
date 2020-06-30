
  import vuex from 'vuex'
  import vue  from 'vue'
  import 'es6-promise/auto'

  vue.use(vuex)
  const store= new vuex.Store({
      state:{
        geohash:"",
        id:"",
        password:""
      },
      mutations:{
        getgeohash:function(state,payload){
          state.geohash=payload.hash
         },
         getId:function(state,payload){
           state.id=payload.id
         },
         getpassword:function(state,payload){
            state.password=payload.password
         }

      },
      actions:{

      }


  })
  export default store



  
