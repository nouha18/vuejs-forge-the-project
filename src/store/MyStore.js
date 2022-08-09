import axios from 'axios';
import {createStore} from "vuex";
export default createStore({
     namespaced: true,
 state:{
     user: { name: 'John Doe', email: 'fake@email.com', username: 'jd123'},
     counter:0,
     colorCode: 'red',
 },
mutations:{
   increment (state,randomnumber) {
     console.log(randomnumber) 
          state.counter+=randomnumber;
    },
      decrement(state,number){
      state.counter-=number;
    },
      reset(state, { value }) {
      state.counter = value;
    },
    setcolorCode(state,newValue){
      state.colorCode= newValue
    }
},
actions:{
     increment ({ commit }){
    axios('http://www.randomnumberapi.com/api/v1.0/randomnumber').then(response =>
     { commit("increment",response.data)
     })
    },
    decrement ({ commit }){
      axios('http://www.randomnumberapi.com/api/v1.0/randomnumber').then(response =>
       { commit("decrement",response.data)
       })
      },
      setcolorCode({commit},newValue){
         commit("setcolorCode",newValue)
      }
    
},
getters:{
  squareNumber(state){
   return state.counter*state.counter
  }
},
modules:{}
})