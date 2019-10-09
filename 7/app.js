new Vue({
    el:'#app',
    data:{
        a:0,
        b:0,
        age:25
    },
    methods:{
        // addtoA:function(){
        //     return this.a+this.age;
        // },
        // addtoB:function(){
        //     return this.b+this.age;
        // }
    },
    computed:{
        addtoA:function(){
            return this.a+this.age;
        },
        addtoB:function(){
            return this.b+this.age;
        }
    }

});
