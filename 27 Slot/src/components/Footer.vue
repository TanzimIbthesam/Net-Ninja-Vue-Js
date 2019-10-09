<template>
 <footer>
     <p>{{copyright}} {{title}}</p>
 </footer>
  
 
</template>
 <script>
 
// import Avengers from './Avengers.Vue';

import {bus} from '../main';
  export default{
      props:{
          title:{
              type:String
          }
      },
  
    data(){
      return{
        copyright:'All rights reserved'
      }
    },
   created(){
     bus.$on('titleChanged',(data)=>{
       this.title=data;
     })
   }

    }
  
  </script>

<style scoped>
footer{
    background:#222;
    padding:6px;
}
h1{
    color:#222;
    text-align: center;
}
p{
    color:lightgreen;
    text-align: center;
}
</style>


