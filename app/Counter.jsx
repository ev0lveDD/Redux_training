'use client';

import { useDispatch, useSelector } from "react-redux";

// useSelector dla pobrania wartosci np state.counter
// useDispatch dla funkcji dispatch

export default function Counter() {

    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter);
    const isHidden = useSelector(state => state.isHidden)

    function handleIncrement() {
        dispatch({type: 'increment'})
    }

    
    function handleIncrease() {
        dispatch({type: 'increase', amount: 8}) // nazwa (w tym przykladzie 'amount') musi być taka sama jak w store !!!
    }

    function handleDecrement() {
        dispatch({type: 'decrement'})
    }

    function toggleCounterHandler() {
        dispatch({type: 'counterToggle'})
    }

    return(
        <main className="flex-col items-center justify-items-center">
            <h1>Redux Counter</h1>
            {isHidden ? null : <div>{counter}</div> }
            <div className="flex items-center justify-between">
                <button className="m-4 p-2 border-full border-white border-2" onClick={() => handleIncrement()}>Increment</button>
                <button className="m-4 p-2 border-full border-white border-2" onClick={() => handleIncrease()}>Increase by </button>
                <button className="m-4 p-2 border-full border-white border-2" onClick={() => handleDecrement()}>Decrement</button>
            </div>
            <button onClick={() => toggleCounterHandler()}>Toggle Counter</button>
        </main>
    );
}