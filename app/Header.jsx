'use client';

import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store";

export default function Header() {

    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.auth.isAuthenticated);

    function handleLogout() {
        dispatch(authActions.logout());
    }

    return(
        <header className="flex items-center justify-between w-full h-16 border-2 border-gray-500">
        <h1 className="p-2">Redux Auth</h1>
        <nav>
        { isAuth ?
            <ul className="flex items-center justify-center gap-8">
                <li className="p-2">
                    <a href='/'>My Products</a>
                </li>
                <li className="p-2">
                    <a href='/'>My Sales</a>
                </li>
                <li className="p-2">
                    <button onClick={() => handleLogout()}>Logout</button>
                </li>
            </ul> 
        :
            null
        }
        </nav>
      </header>
    );
}