// eslint-disable-next-line no-unused-vars
import React from "react";
import logo from "../assets/Images/logo.gif";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { useState } from "react";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import { BackgroundImage } from "@mantine/core";
import SP from "../assets/Images/SP.jpg";
import { Calendar } from "primereact/calendar";

const Signup = () => {
  const [value, setValue] = useState("");
  const [date, setDate] = useState(null);

  const navigate = useNavigate();
  return (
    <div className="flex h-screen w-full bg-slate-500 ">
      <BackgroundImage src={SP}>
        <div className="flex w-full h-full justify-center items-center">
          <div className="flex w-2/6 h-5/6 flex-col bg-white text-black rounded-md  ">
            <div className="flex h-32 w-full justify-center items-center flex-col">
              <img className="flex h-24 " src={logo} alt="" />
              <h2 className="flex font-bold text-center text-lg">
                NAPPY SHOPPING CENTRE
              </h2>
              <h4 className="flex font-bold">Signup Here</h4>
            </div>
            <div className="flex h-24 w-full flex-col justify-center items-center">
              <span className="p-float-label mt-0.1">
                <InputText className="w-60" id="FirstName" />
                <label htmlFor="FirstName">First name</label>
              </span>
            </div>
            <div className="flex h-24 w-full flex-col justify-center items-center">
              <span className="p-float-label mt-0.1">
                <InputText className="w-60" id="second Name" />
                <label htmlFor="second Name">second name</label>
              </span>
            </div>
            <div className="flex h-24 w-full flex-col justify-center items-center">
              <span className="p-float-label mt-0.1">
                <InputText className="w-60" id="Email" />
                <label htmlFor="Email">Enter your Email</label>
              </span>
            </div>
            <div className="flex justify-center w-full h-20 flex-col  mt-1 items-center ">
              <span className="p-float-label w-60">
                <Password
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  toggleMask
                />
                <label htmlFor="Password">Password</label>
              </span>
            </div>
            <div className="flex justify-center w-full h-20 flex-col  mt-2 items-center ">
              <span className="p-float-label w-60">
                <Password
                  inputId="Confirm password"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
                <label htmlFor="Confirm password">Confirm password</label>
              </span>
            </div>
            <div className="flex justify-center w-full h-20 flex-col  mt-2 items-center">
              <span className="p-float-label w-60">
                <Calendar
                  inputId="birth_date"
                  value={date}
                  onChange={(e) => setDate(e.value)}
                />
                <label htmlFor="birth_date">Birth Date</label>
              </span>
            </div>

            <div className="flex mb-1 w-full h-14 items-center justify-center ">
              <Button label="Sign in" onClick={() => navigate("/Login")} />
            </div>
          </div>
        </div>
      </BackgroundImage>
    </div>
  );
};
export default Signup;
