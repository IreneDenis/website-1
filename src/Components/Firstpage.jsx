// eslint-disable-next-line no-unused-vars
import React from "react";
import FP1 from "../assets/Images/FP1.jpg";
import { BackgroundImage, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const Firstpage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex  bg-slate-500 w-full h-screen ">
      <div className="flex flex-col absolute bottom-16 ">
        <button className="flex underline font-bold text-xl  items-center mt-12"
        onClick={()=>navigate("/Aboutus")}>
          About us
        </button>
        <button className="flex underline font-bold text-xl  items-center mb-8"
        onClick={()=>navigate("/Login")}>
          Back to Login
        </button>

        <Text>We provide the best service around the world</Text>
        <Text>You are welcome!</Text>
        <button
          className="flex underline font-bold text-xl  items-center mb-8 "
          onClick={() => navigate("/Homepage")}
        >
          GET STARTED
        </button>
      </div>
      <BackgroundImage src={FP1}>
        <div className="flex w-full h-full"></div>
      </BackgroundImage>
    </div>
  );
};

export default Firstpage;
