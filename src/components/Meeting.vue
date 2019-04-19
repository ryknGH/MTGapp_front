<template>
  <v-container style="height:100%">
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
        {{fee_show}}
      </span>
      
      <v-spacer></v-spacer>
    </v-layout>
  </v-container>
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
        fee_per_time: 1000,
      }
    },
    created(){
      this.date = new Date();
      let self = this;
      this.meeting_info = this.$store.state.meeting_info;
      this.time_start = this.date.getTime();
      this.time_show = "00:00";
      this.intervalID = setInterval(function(){
        //ŽžŠÔŒvŽZ
        let date = new Date();
        self.time_now = date.getTime();
        let time_diff = self.time_now - self.time_start;
        let sec = Math.round(time_diff/1000);
        self.time_show = ("0" + Math.floor(sec/60)).slice(-2) + ":" + ("0" + sec%60).slice(-2)

        //‚¨‹àŒvŽZ
        self.fee_show = Math.floor(self.fee_per_time / 3600 * sec) 
      }
      , 1000);
    },
    mtthods:{
      str_pad_left(string,length) {
        return (new Array(length+1).join('0')+string).slice(-length);
      },
    },
  }
</script>

<style>

</style>
