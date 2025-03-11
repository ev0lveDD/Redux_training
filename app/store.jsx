'use client';

import { createStore } from 'redux';

const counterReducer = (state = { counter: 0, isHidden: false }, action) => {
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

  if (action.type === 'counterToggle') {
    return {
      counter: state.counter, // taki sam jak był poprzednio
      isHidden: !state.isHidden // odwrotny do tego jaki był
    }
  }

  return state;
};

const store = createStore(counterReducer);

export default store;