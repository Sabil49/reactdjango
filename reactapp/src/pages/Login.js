import '../style.css'
import { Link } from "react-router-dom";
import APIService from "../APIService/APIService";
import {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';
import {useCookies} from "react-cookie";

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useCookies(['mytoken'])
    const navigate = useNavigate()

    useEffect(() => {
        if(token['mytoken'])
                 navigate('/Otpverify')
    },[token])

const LoginBtn = () => {
    APIService.LoginUser({username, password})
    .then(resp => setToken('mytoken',resp.token))
    //.then(() => navigate("/Otpverify"))
    //.then(resp => console.log(resp))
    .catch(error => console.log(error))
}

  return(
      <div className="form">
          <form action="">
              <div className="username">
                  <label className="form__label" for="username">Email </label>
                  <input  type="email" id="username" className="form__input" placeholder="Email" value={username} onChange={(e) => setUsername(e.target.value)}/>
              </div>
              <div className="password">
                  <label className="form__label" for="password">Password </label>
                  <input className="form__input" type="password"  id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>

              </div>

              <div onClick={LoginBtn} className="btn btn-primary">Login</div>
          </form>
          <div className="linktoRegister">
               Don't have an account <Link to="/Otpverify">Verify otp</Link>
          </div>
      </div>
    )
};

export default Login;