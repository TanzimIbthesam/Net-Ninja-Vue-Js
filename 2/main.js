new Vue({
    el:'#app',
    data:{
       website:'https://www.facebook.com/',
       name:'Tanzim',
       profession:'Full Stack',
       hostwebsite:'<a href="https://www.hostgator.com/">Host your Website</a>'
    },
    methods:{
        addition:function(){
           alert('You have clicked here');
        },
        greet:function(time){
            return 'Good'+time+this.name +this.job;
            
        }
    }
   

});