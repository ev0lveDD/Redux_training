import { createSlice } from '@reduxjs/toolkit';

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

export default counterSlice.reducer;
export const counterActions = counterSlice.actions;