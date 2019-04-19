import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules :{
      state : {
          meeting_info : {
              s_time : 1555646400, //2019/04/19 13:00:00
              e_time : 1555650000, //2019/04/19 14:00:00
              description : "ŠJ”­‰ï‹c",
          },
      },
      mutations : {

      },
    }
})
   
export default store