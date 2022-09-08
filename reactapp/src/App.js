import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Home from "./pages/Home";
import Otpverify from "./pages/Otpverify";
import {CookiesProvider} from "react-cookie";

function App() {
  return (
      <CookiesProvider>
        <BrowserRouter>
         <Routes>
           <Route index element={<Home />} />
           <Route path="/Registration" element={<Registration />} />
           <Route path="/Login" element={<Login />} />
           <Route path="/Otpverify" element={<Otpverify />} />
         </Routes>
        </BrowserRouter>
      </CookiesProvider>
  );
}

export default App