var one=new Vue({
   el:'#app-one',
   data:{
       title:'Vue App One',
   },
   methods:{
       greet:function(){
           return "Hello World App One";
       }
   },

      computed:{
        greetings:function(){
            return "Welcome One";
        }
      }

});
  

var two=new Vue({
    el:'#app-two',
    data:{
        title:'Vue App Two'
    },
    methods:{
        greet:function(){
            return "Hello World App Two";
        },
        changeTitle:function(){
           return one.title="Title changed";
        }
    },
    computed:{
        greetings:function(){
            return "Welcome Two";
        }
    },
 
 });
//  one.title="Title changed from inside";
 two.title="Title changed from outside";
