import '../style.css'
import { Link } from "react-router-dom";
import APIService from "../APIService/APIService";
import {useState} from "react";
import { useNavigate } from 'react-router-dom';


const Registration = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')

    const navigate = useNavigate()

const RegisterBtn = () => {
    APIService.RegisterUser({email, password, phone})
    .then(() => navigate("/Login"))
    //.then(resp => console.log(resp))
    .catch(error => console.log(error))
}

  return(
      <div className="form">
          <form action="">
              <div className="email">
                  <label className="form__label" for="email">Email </label>
                  <input  type="email" id="email" className="form__input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div className="password">
                  <label className="form__label" for="password">Password </label>
                  <input className="form__input" type="password"  id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>

              </div>
              <div className="phone">
                  <label className="form__label" htmlFor="phone">Phone </label>
                  <input className="form__input" type="phone" id="phone" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
              </div>
              <div onClick={RegisterBtn} className="btn btn-primary">Register</div>
          </form>
          <div className="linktologin">
               Already have an account <Link to="/Login"> Login</Link>
          </div>
      </div>
    )
};

export default Registration;