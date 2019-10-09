new Vue({
    el:'#app',
    data:{
        // available:true,
        // nearby:false
        available:false,
        nearby:false
    },
    computed:{
        compClasses:function(){
            return{
                available:this.available,
                nearby:this.nearby
            }
        }
    }
    

});
