// eslint-disable-next-line no-unused-vars
import React from "react";
import HP from "../assets/Images/HP.jpg";
import logo from "../assets/Images/logo.gif";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { useState } from "react";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import SP from "../assets/Images/SP.jpg";
import { BackgroundImage } from "@mantine/core";

const Login = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  return (
    <div className="flex  h-screen w-full bg-slate-500">
      <BackgroundImage src={SP}>
        <div className="flex w-full h-full items-center justify-center">
          <div className="flex flex-row bg-slate-950 h-3/6 w-3/6  ">
            <div className="flex  w-3/5 h-full ">
              <img src={HP} alt="" />
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
              <div className="flex flex-row h-6 w-full  font-bold text-xs justify-center">
                <div className="flex w-4/6 h-full  ">
                  <h6>Have an Account?</h6>
                </div>
                <div className="flex w-full h-full text-blue-600  justify-center">
                  <button className="flex " onClick={() => navigate("/Signup")}>
                    <h6>Click to Create An Account</h6>
                  </button>
                </div>
              </div>
              <div className="flex mt-4 w-full h-14 items-center justify-center ">
                <Button label="Login" onClick={() => navigate("/Firstpage")} />
              </div>
            </div>
          </div>
        </div>
      </BackgroundImage>
    </div>
  );
};
export default Login;
