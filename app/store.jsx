'use client';

// import { createStore } from 'redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { counter: 0, isHidden: false },
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload; // payload - trzyma dane które przekazujemy - zastąpiło to amount
    },
    toggleCounter(state) {
      state.isHidden = !state.isHidden;
    }
   }
});

const authSlice = createSlice({
  name: 'authentication',
  initialState: {isAuthenticated: false},
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    }
  }
})

const store = configureStore({
 // reducer: counterSlice.reducer //  dla jednego reducera
reducer: { 
  counter: counterSlice.reducer,
  auth: authSlice.reducer
 } 
 /* dla wielu reducerów; configureStore merguje potem wiele reducerów w jeden */
});

export const authActions = authSlice.actions;
export const counterActions = counterSlice.actions;
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