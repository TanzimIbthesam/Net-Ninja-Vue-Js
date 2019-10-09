//For changing both at a time

// var data={
//     name:'Tanzim One'
// }

Vue.component('greeting',{
    template:'<h3>My name is {{name}}.<button v-on:click="changeName">Change name</button></h3>',
    data:function(){
        return{
         name:'Tanzim'
        }
        // return data;
    },
    methods:{
      changeName:function(){
          this.name="Super Tanzim";
      }
    }
    });




var one=new Vue({
   el:'#app-one',
   data:{
       
   },
   methods:{
      
   },

      computed:{
       
      }

});
  

var two=new Vue({
    el:'#app-two',
    data:{
        
    },
    methods:{
       
    },
    computed:{
      
    },
 
 });
//  one.title="Title changed from inside";
//  two.title="Title changed from outside";
