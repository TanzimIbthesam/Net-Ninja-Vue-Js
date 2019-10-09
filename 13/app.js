new Vue({
   el:'#vue-app',
   data:{
       output:'Your favorite food'
   },
   methods:{
      readRefs:function(){
          this.$refs
          console.log(this.$refs.test.innerText);
        //   console.log(this.$refs.input.value);
        //   this.output=this.$refs.input.value;
      }
   },

      computed:{
       
      }

});
  



