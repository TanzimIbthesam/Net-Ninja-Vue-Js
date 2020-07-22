<template>
  <div id="app">
       <Fruits/>
       <FruitsTwo />
  </div>
</template>

<script>

import Fruits from    './components/Fruits.vue'
import FruitsTwo from    './components/FruitsTwo.vue'

export default {
  name: 'App',
  components: {

    Fruits,
    FruitsTwo
  },
  data() {
     return {
      
     }
},

}
</script>

<style>

</style>
