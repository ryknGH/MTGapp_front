<template>
  <v-container style="height:100%">
    <v-layout
      text-xs-center
      wrap
      column
      style="height:100%"
    >
      <v-spacer></v-spacer>

      <span class="display-4">
        {{time}}
      </span> 
      
      <v-spacer></v-spacer>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data(){
      return{
        time: 1000,
      }
    },
    created(){

    },
  }
</script>

<style>

</style>
