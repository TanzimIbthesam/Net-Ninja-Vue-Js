
<template>
<div>
  <app-header></app-header>
<router-view></router-view>
</div>
 

 
</template>
 <script>


import showBlog from './components/showBlog.vue';


import header from './components/header.vue'; 
  export default{
    components:{
      
      
      'app-header':header
      
    },
    data(){
      return{
     
         
        
      }
    },
   methods: {
        
    }
   
   

    }
  
  </script>

<style scoped>
body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}
</style>





