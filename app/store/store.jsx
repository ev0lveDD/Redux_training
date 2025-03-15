'use client';

// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from "./authSlice";
import counterReducer from "./counterSlice";


const store = configureStore({
 // reducer: counterSlice.reducer //  dla jednego reducera
reducer: { 
  counter: counterReducer, // było counterSlice.reducer ale że to exportujemy jako default to możemy zmienić nazwę na counterReducer
  auth: authReducer // było authSlice.reducer ale że to exportujemy jako default to możemy zmienić nazwę na authReducer
 } 
 /* dla wielu reducerów; configureStore merguje potem wiele reducerów w jeden */
});

export default store;


/* const counterReducer = (state = { counter: 0, isHidden: false }, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter +1,
      isHidden: state.isHidden // taki sam jak był poprzednio !!! action nadpisuje obecny stan, on nie merguje go ! więc musimy dać za każdym razem każdy stan objektu
    }
  }

  if (action.type === 'increase') {
    return {
      counter: state.counter + action.amount,  // action.amount aby dodać jakąś wartość np. z pola amount w objekcie
      isHidden: state.isHidden
    }
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter -1,
      isHidden: state.isHidden
    }
  }

  if (action.type === 'toggleCounter') {
    return {
      counter: state.counter, // taki sam jak był poprzednio
      isHidden: !state.isHidden // odwrotny do tego jaki był
    }
  }

  return state;
}; */