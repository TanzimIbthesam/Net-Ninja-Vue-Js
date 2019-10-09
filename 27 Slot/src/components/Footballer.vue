<template>
  
     <div id="ninjas">
    <ul>
        <li v-for="(footballer, index) in footballers" v-bind:key="index" v-on:click="footballer.show =! footballer.show">
              <h2>{{footballer.name}}</h2>
              <h3 v-show="footballer.show">{{footballer.speciality}}</h3>
        </li>
    </ul>
    <button v-on:click="deleteNinja()">Delete Ninja</button>
     </div>
  
  
 
</template>
 <script>
 
// import Avengers from './Avengers.Vue';


  export default{
//    props:['footballers'],
props:{
    footballers:{
     type:Array,
     required:true
    }
},
    data(){
      return{
      
      }
    },
    methods:{
        deleteNinja:function(){
            this.footballers.pop();
        }
    },
    //Vue Lifecycle hooks
    // beforeCreate(){
    //     alert('Before Create')
    // },
    // created(){
    //     alert('Created')
    // },
    // beforeMount(){
    //     alert('Before Mount')
    // },
    // mounted(){
    //     alert('Mounted')
    // },
    // beforeUpdate(){
    //     alert('Before Update');
    // },
    // updated(){
    //     alert('Updated');
    // }
   

    }
  
  </script>

<style scoped>
#ninjas{
    width:100%;
    max-width:1200px;
    margin:40px auto;
    padding:0 20px;
    box-sizing:border-box;


}
ul{
    display:flex;
    flex-wrap:wrap;
    list-style-type:none;
    padding:0;
    cursor: pointer;
}
li{
    flex-grow:1;
    flex-basis:300px;
    text-align:center;
    padding:30px;
    border:1px solid #222;
    margin:10px;
    cursor: pointer;
}
</style>


