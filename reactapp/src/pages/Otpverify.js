import '../style.css'
import { Link } from "react-router-dom";
import APIService from "../APIService/APIService";
import {useState} from "react";
import { useNavigate } from 'react-router-dom';
import {useCookies} from "react-cookie";

const Otpverify = () => {
    const [otp, setOtp] = useState('')
    const [token] = useCookies(['mytoken'])
    const navigate = useNavigate()

const OtpverifyBtn = () => {
    APIService.Otpverify({otp})
    //.then(() => navigate("/Verified"))
    .then(resp => console.log(resp))
    .catch(error => console.log(error))
}

const resendOtp = () => {
        console.log(token['mytoken'])
        console.log(token)
     APIService.ResendOtp({otp}, token["mytoken"])
    //.then(() => navigate("/Verified"))
    .then(resp => console.log(resp))
    .catch(error => console.log(error))
    }

  return(
      <div className="form">
          <form action="">
              <div className="otp">
                  <label className="form__label" for="otp">Otp</label>
                  <input  type="number" id="Otpverify" className="form__input" placeholder="Please enter otp..." value={otp} onChange={(e) => setOtp(e.target.value)}/>
              </div>

              <div onClick={OtpverifyBtn} className="btn btn-primary">Verify Otp</div>
          </form>
          <div className="resend_otp">
              <div onClick={resendOtp} className="btn btn-primary">Resend Otp</div>
          </div>
      </div>
    )
};

export default Otpverify;