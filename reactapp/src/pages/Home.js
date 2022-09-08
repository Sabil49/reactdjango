import { Outlet, Link } from "react-router-dom";
import {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';
import {useCookies} from "react-cookie";

const Home = () => {
    const [token, setToken, removeToken] = useCookies(['mytoken'])
    const navigate = useNavigate()

    useEffect(() => {
        if(!token['mytoken'])
                 navigate('/Login')
    },[token])

    const Loggedout = () => {
          removeToken(['mytoken'])
    }
  return (
   <>
      <nav>
        <h1>This is home page.</h1>
        <ul>
          <li>
            <Link to="/Registration">Registration</Link>
          </li>
         </ul>
      </nav>
       <div className="linktoLogout">
               <div onClick={Loggedout} className="btn btn-primary">Logged Out</div>
       </div>
       <Outlet />
   </>
   )
};

export default Home;