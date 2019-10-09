<template>
  <!-- <div><h1>{{title}}</h1>
  <footballers></footballers>
  </div> -->
 <div>
   <!-- <app-header  v-bind:title="title"></app-header> -->
   <app-header  v-bind:title="title"  v-on:changeTitle="updateTitle($event)"></app-header>
   <app-footballer v-bind:footballers="footballers"></app-footballer>
   
   <app-footer v-bind:title="title"></app-footer>
 </div>
 
</template>
 <script>
//  import footballers from './new/Tanzim.vue'
 import Header from './components/Header.vue'
 import Footer from './components/Footer.vue'
 import Footballer from './components/Footballer.vue'
// import Avengers from './Avengers.Vue';


  export default{
    components:{
      // 'footballers':footballers
       'app-header':Header,
       'app-footballer':Footballer,
       'app-footer':Footer
    },
    data(){
      return{
       
          footballers:[
            {name:'Zlatan',speciality:'Bicycle kicks',show:false},
            {name:'Ronaldo',speciality:'Header',show:false},
            {name:'Messi',speciality:'Dribble',show:false},
        ],
        title:"Legend footballers of all time"
      }
    },
    methods:{
      updateTitle:function(updatedTitle){
        this.title=updatedTitle
      }
    }
   

    }
  
  </script>

<style scoped>
h1{
  color: orangered;
}
</style>


