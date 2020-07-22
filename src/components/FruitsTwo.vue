<template class="bg-pink-400">
    <div class="bg-yellow-400 py-10 w-full">
         <div class="w-3/5 mx-auto">
 
          <table class="table-fixed ">
  <thead>
    <tr>
      <th class="px-8 py-2">Name</th>
      <th class="px-8 py-2">Price</th>
      <th class="px-8 py-2">CountryofOrigin</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(fruit,index) in  discountFruits" :key="index">
      <td class="border px-16 py-2">{{fruit.name}}</td>
      <td class="border px-16 py-2">{{fruit.price}}</td>
      <td class="border px-16 py-2">{{fruit.CountryofOrigin}}</td>
    </tr>
    
  </tbody>
</table>
         </div>
         <div class="w-3/5 mx-auto">
          <button @click="toggleButton=!toggleButton" class="py-1 px-6 bg-blue-800 text-white font-serif m-4 rounded-full">Open Modal</button>
          <div class="cursor-pointer z-50" v-if="toggleButton">
          <div class="bg-gray-900 w-64 px-6 border rounded-lg py-16 ml-64 -mt-32">
             <h1 class=" text-white ">Please enter login details</h1>
              <p @click="toggleButton=false" class="text-white">X</p>
           <form action="">
          
             <input type="text" class="border py-1 px-4" placeholder="Enter your email"><br>
              
             <input type="text" class="border py-1 px-4 mt-4" placeholder="Enter your password"><br>
              <button class="py-1 px-6 bg-blue-800 text-white font-serif  mt-6 rounded-full">Login</button>
           </form>
          </div>
           
        </div>
          </div>
    </div>
</template>
<script>
export default {
   
 data() {
   
     return {
       
       toggleButton:false,
     
           
     
     }
 },
 computed: {
//      fruits(){
//  return this.$store.state.fruits;
//      },
     discountFruits(){
     return this.$store.getters.discountFruits;
 }
    
    
}
}
</script>
<style scoped>
   body {
        background: pink;
    }
  
</style>