new Vue({
    el: '#app',
    data: {
        name: '',
        age: '',
        message:'Hello'
    },
    methods: {
        logName: function(){
            console.log('you entered your name');
        },
        logAge: function(){
            console.log('you entered your age');
        }
    }
});