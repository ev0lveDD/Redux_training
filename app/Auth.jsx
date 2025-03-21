'use client';

import { authActions } from "./store/authSlice";
import { useDispatch } from "react-redux";

export default function Auth() {

    const dispatch = useDispatch();

    function handleLogin(event) {
      event.preventDefault();
      dispatch(authActions.login());
    }

    return(
        <main>
        <section className="border-gray-500">
          <form onSubmit={handleLogin} className="flex flex-col justify-center items-center gap-4 border-2 p-4">
            <div className="flex flex-col justify-center items-center">
              <label htmlFor='email'>Email</label>
              <input type='email' id='email' className="text-black p-2"/>
            </div>
            <div className="flex flex-col justify-center items-center">
              <label htmlFor='password'>Password</label>
              <input type='password' id='password' className="text-black p-2"/>
            </div>
            <button className="px-4 py-2 border-2 border-gray-500">Login</button>
          </form>
        </section>
      </main>
    );
}