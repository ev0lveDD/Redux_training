'use client';

import Auth from "./Auth";
import UserProfile from "./UserProfile";


import { useDispatch, useSelector } from "react-redux";

export default function Content() {

    
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth.isAuthenticated);

    return (
        <div>
        {isAuth ? 
          <UserProfile /> 
        :
          <Auth />
        }
        </div>
    );
  };
  