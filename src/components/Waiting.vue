<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
    waiting
    <!-- <dev class = "sample">{{store.modules.state.meeting_info.scheduled_s_time}}</dev> -->
    {{meeting_info}}
    </v-layout>
  </v-container>
</template>

<script>
import store from '../store'
  export default {
    data(){
      return{
        meeting_info:null,
      }
    },
    created(){
      this.meeting_info = store.$state.meeting_info;
    }
  }
</script>

<style>

</style>
