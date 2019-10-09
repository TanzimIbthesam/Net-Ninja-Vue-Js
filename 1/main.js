new Vue({
    el:'#app',
    data:{
        name:'Tanzim',
        age:25,
        job:'Full Stack Web developer'
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