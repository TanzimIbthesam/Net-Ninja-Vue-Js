
<template>

 <show-blog></show-blog>

 
</template>
 <script>


import showBlog from './components/showBlog.vue';
import AddBlog from './components/AddBlog.vue';// 
  export default{
    components:{
      
      'show-blog':showBlog
      
      
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





