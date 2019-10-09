
<template>
<div>
  <keep-alive>
<component v-bind:is="component">
  
</component>
</keep-alive>
<button v-on:click="component='form-one'">Contact Us</button>
<button v-on:click="component='form-two'">Login</button>
</div>
 

 
</template>
 <script>

 import formOne from './components/formOne.vue';
 import formTwo from './components/formTwo.vue';


  export default{
    components:{
      // 'footballers':footballers
      'form-one':formOne,
      'form-two':formTwo
      
    },
    data(){
      return{
      //  title:'I am a dynamic slot title'
         component:'form-two'
        
      }
    },
   methods: {
        handleSubmit: function(){
            alert('thanks for submitting');
        }
    }
   
   

    }
  
  </script>

<style scoped>

</style>





