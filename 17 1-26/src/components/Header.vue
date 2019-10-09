<template>
  <header>
      <h1 v-on:click="changeTitle()">{{title}}</h1>
  </header>
  
 
</template>
 <script>
 
// import Avengers from './Avengers.Vue';

import { bus } from '../main';
  export default{
    props:{
    title:{
      type:String,
      required:true
    }
    },
  
    data(){
      return{
        // title:'Legends'
      }
    },
    methods:{

     changeTitle:function(){
         this.title='Football Legends'
        // this.$emit('changeTitle','Football Legends')
        bus.$emit('titleChanged','Football Legends');
      }
    }
  }
   

    
  
  </script>

<style scoped>
header{
    background:lightgreen;
    padding:10px;
}
h1{
    color:#222;
    text-align: center;
    cursor: pointer;
}
</style>


