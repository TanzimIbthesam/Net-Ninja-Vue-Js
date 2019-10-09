new Vue({
    el:'#app',
    data:{
       age:25,
    },
    methods:{
        add:function(inc){
            this.age +=inc;
        },
        sub:function(dec){
             this.age -=dec;
            
        },
        reminder:function(){
            alert('Hello World');
        }
    }
   

});