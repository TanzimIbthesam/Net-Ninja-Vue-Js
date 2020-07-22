import Vue from 'vue'
import Vuex from 'vuex'

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
                       price: fruit.price * 1 / 4,
                       CountryofOrigin: fruit.CountryofOrigin
                   }

               });
                      return discountFruits;
            }

},
mutations:{
    reducePrice:state =>{
      state.fruits.forEach(fruit => {
          return fruit.price -=10;
            
        });
    }
}
});
    
