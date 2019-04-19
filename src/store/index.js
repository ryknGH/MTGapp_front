import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules :{
      state : {
          meeting_info : {
              scheduled_s_time : 1555646400, //2019/04/19 13:00:00
              scheduled_e_time : 1555650000, //2019/04/19 14:00:00
              actual_s_time : null,
              actual_e_time : null,
              description : "ŠJ”­‰ï‹c",
          },
      },
      mutations : {

      },
    }
})
   
export default store