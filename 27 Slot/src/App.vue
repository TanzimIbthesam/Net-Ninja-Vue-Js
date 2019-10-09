
<template>
 
 <form-helper>
   <!-- <h2 slot="title">I am a header slot</h2> -->
   <!-- <h2 slot="title">{{title}}</h2>
   <p slot="paragraph">I am the paragraph slot</p> -->
   <div slot="form-header">
     <h3>This is the Form Header</h3>
   </div>
   <div slot="form-fields">
     <input type="text" placeholder="Enter your email"><br><br>
     <input placeholder="Enter your password" type="password"><br>
   </div>
   <div slot="form-controls">
     <button v-on:click='handleSubmit()'>Submit</button>
   </div>
 </form-helper>
 
</template>
 <script>
//  import footballers from './new/Tanzim.vue'
//  import Header from './components/Header.vue'
//  import Footer from './components/Footer.vue'
//  import Footballer from './components/Footballer.vue'
// import Avengers from './Avengers.Vue';
 import formHelper from './components/formHelper.vue';

  export default{
    components:{
      // 'footballers':footballers
       'form-helper':formHelper,
      
    },
    data(){
      return{
      //  title:'I am a dynamic slot title'
         
        
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





