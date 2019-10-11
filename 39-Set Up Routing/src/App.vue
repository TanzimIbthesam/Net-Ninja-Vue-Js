
<template>
<div>
<router-view></router-view>
</div>
 

 
</template>
 <script>


import showBlog from './components/showBlog.vue';
import AddBlog from './components/AddBlog.vue'; 
import listBlog from './components/listBlog.vue'; 
  export default{
    components:{
      
      'show-blog':showBlog,
      'add-blog':AddBlog,
      'list-blog':listBlog
      
    },
    data(){
      return{
      //  title:'I am a dynamic slot title'
         
        
      }
    },
   methods: {
        
    }
   
   

    }
  
  </script>

<style scoped>

</style>





