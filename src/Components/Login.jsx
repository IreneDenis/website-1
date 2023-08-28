// eslint-disable-next-line no-unused-vars
import React from "react";
import WLP from "../assets/Images/WLP.jpg";
import logo from "../assets/Images/logo.gif";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { useState } from "react";
import { Button } from "primereact/button";
import {useNavigate} from "react-router-dom";

const Login = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate
  return (
    <div className="flex flex-col h-screen w-full bg-slate-500 items-center justify-center">
      <div className="flex flex-row bg-slate-950 h-4/6 w-4/6 ">
        <div className="flex  w-3/5 h-full">
          <img src={WLP} alt="" />
        </div>
        <div className="flex w-3/5 h-full flex-col bg-white text-black">
          <div className="flex h-32 w-full justify-center items-center flex-col">
            <img className="flex h-24 " src={logo} alt="" />
            <h2 className="flex font-bold text-center">SHOPPING CENTRE</h2>
          </div>
          <div className="flex h-24 w-full flex-col justify-center items-center">
           
            <span className="p-float-label mt-2">
              <InputText className="w-60" id="username" />
              <label htmlFor="username">Username or email</label>
            </span>
          </div>
          <div className="flex justify-center w-full h-20 flex-col  mt-1 items-center ">
            
            <Password
              className="w-60 "
              value={value}
              onChange={(e) => setValue(e.target.value)}
              toggleMask
            />
          </div>
          <div className="flex mt-4 w-full h-14 items-center justify-center ">
            <Button label="Sign in" onClick={() => navigate("/Homepage")} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;