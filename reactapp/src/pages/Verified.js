import '../style.css'
import { Link } from "react-router-dom";


const Verified = () => {
  return(
      <div className="verified">
          <h1>Your email id and phone number has been verified.</h1>
          <div className="linktoHome">
               <Link to="/">Home</Link>
          </div>
      </div>

    )
};

export default Verified;