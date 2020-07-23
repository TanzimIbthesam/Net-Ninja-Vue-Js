import Vue from 'vue'
import Vuex from 'vuex'
import { setTimeout } from 'core-js';

Vue.use(Vuex);

export const store=new Vuex.Store({
state:{
        fruits: [
            { name: 'Banana', price: 200, CountryofOrigin: 'France' },
            { name: 'Mango', price: 200, CountryofOrigin: 'Bangladesh' },
            { name: 'Orange', price: 200, CountryofOrigin: 'USA' },
        ]
},
getters:{
 discountFruits: state => {
 const discountFruits = 
 state.fruits.filter(fruit => {
          return fruit.CountryofOrigin=="France";

        })
       .map(fruit => {
                   return {
                       name: fruit.name,
                       price: fruit.price /2,
                       CountryofOrigin: fruit.CountryofOrigin
                   }

               });
                      return discountFruits;
            }

},
mutations:{
    reducePrice:(state,payload) =>{
        setTimeout(()=>{
            state.fruits.forEach(fruit => {
                // return fruit.price -= 10;
                return fruit.price -= payload;

            });

        },3000);
      
    }
},
actions:{
    reducePrice:(context,payload)=>{
        setTimeout(()=>{
            context.commit('reducePrice',payload);

        },2000)

    }
}
});
    
