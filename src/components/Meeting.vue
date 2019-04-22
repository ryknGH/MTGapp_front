<template>
<v-layout>
  <v-container style="height:100%" v-if="reaching_time_dialog!=true && over_time_dialog!=true">
    <v-layout
      text-xs-center
      wrap
      column
      style="height:100%"
    >
      <v-spacer></v-spacer>

      <span style="font-size:300px">
        {{time_show}}
      </span> 
      <span class="display-4">
        ￥{{fee_show}}
      </span>

      <v-spacer></v-spacer>
      <v-layout row>
        <v-spacer></v-spacer>
        <v-btn color="info" large class="display-1" style="width:10%" @click="finish();">
          END
        </v-btn>
        <v-spacer></v-spacer>
      </v-layout>
      
      <v-spacer></v-spacer>
    </v-layout>
  </v-container>

  <v-container v-if="reaching_time_dialog==true" class="ma-0 pa-0"> 
    <v-layout
      text-xs-center
      wrap
      column
    >
    <v-card>
     <v-img :src="reaching_img" style="max-width:none;padding:0;" height="100vh" width="100vw">
       <v-layout row>
          <v-spacer></v-spacer>
          <v-btn icon outline flat large class="display-1" @click="finish();">
              <v-icon>
                close
              </v-icon>
          </v-btn>
       </v-layout>
     </v-img>
    </v-card>
    </v-layout>
  </v-container>

  <v-container style="height:100%" v-if="over_time_dialog==true"> 
    <v-layout
      text-xs-center
      wrap
      column
      style="height:100%"
    >
     時間だよ
      <v-btn color="info" large class="display-1" style="width:10%" @click="finish();">
          END
      </v-btn>
    </v-layout>
  </v-container>

</v-layout>
</template>

<script>
import { setInterval } from 'timers';
  export default {
    data(){
      return{
        time_now: null,
        time_start: null,
        time_show: null,
        fee_show: 0,
        meeting_info: null,
        intervalID: null,
        date: null,
        over_time_dialog:false,
        reaching_time_dialog:true,
        fee_per_time: 1000,
        reaching_img: require("../static/img/neko.jpg"),
      }
    },
    created(){
      this.date = new Date();
      let self = this;
      this.meeting_info = this.$store.state.meeting_info;
      this.time_start = this.date.getTime();
      this.time_show = "00:00";
      this.intervalID = setInterval(function(){
        //日付関連
        let date = new Date();
        self.time_now = date.getTime();
        let time_diff = self.time_now - self.time_start;
        let sec = Math.round(time_diff/1000);
        self.time_show = ("0" + Math.floor(sec/60)).slice(-2) + ":" + ("0" + sec%60).slice(-2)

        //お金関連
        self.fee_show = Math.floor(self.fee_per_time / 3600 * sec * self.meeting_info.n_people) 
      }
      , 500);
    },
    methods:{
      finish(){
        clearInterval(this.intervalId);
        this.$router.push({path:"finish"});
      }
    },
  }
</script>

<style>

</style>
