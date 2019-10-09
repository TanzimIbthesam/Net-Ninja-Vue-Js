<template>
<div>
<h1>Top football legends</h1>

<ul>
    <!-- <li v-for="footballer in footballers">{{footballer}}</li> -->
    <li v-for="(footballer, index) in footballers" v-bind:key="index">{{footballer}}</li>
</ul>
</div>
 
</template>
 <script>
  export default{
    data(){
      return{
        footballers:[
            'Ronaldo',
            'Messi',
            'Zlatan'
        ]
      }
    }
   

    }
  
  </script>
<style scoped>
h1{
  color: chartreuse;
}
</style>



