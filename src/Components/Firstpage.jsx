// eslint-disable-next-line no-unused-vars
import React from "react";
import FP1 from "../assets/Images/FP1.jpg";
import { BackgroundImage, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const Firstpage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex  bg-slate-500 w-full h-screen ">
      <div className="flex flex-col absolute bottom-16 items-center ">
        <Text className="flex text-6xl font-bold">Welcome!</Text>

        <Text className="flex text-sm">
          We provide the best service around the world
        </Text>
        <span
          className="pi pi-home hover:cursor-pointer mt-3"
          onClick={() => navigate("/Homepage")}
        >
          Home
        </span>
        <span className="pi pi-bookmark-fill hover:cursor-pointer mt-10">
          Bookmark
        </span>
        <span className="pi pi-cog hover:cursor-pointer mt-10">Settings</span>
        <span className="pi pi-fw pi-pencil hover:cursor-pointer mt-10">
          Edit
        </span>
        <span className="pi pi-qrcode hover:cursor-pointer mt-11">
          Scan Code
        </span>
        <span
          className="pi pi-user hover:cursor-pointer mt-10"
          onClick={() => navigate("/Aboutus")}
        >
          About us
        </span>
        <button
          className="flex underline font-bold text-sm  items-center mb-8 mt-5"
          onClick={() => navigate("/Login")}
        >
          Back to Login
        </button>
        <div className="flex items-end flex-col h-full ">
          <button
            className="flex underline font-bold text-lg  items-center mb-8 mt-4 "
            onClick={() => navigate("/Homepage")}
          >
            GET STARTED
          </button>
        </div>
      </div>
      <BackgroundImage src={FP1}>
        <div className="flex w-full h-full"></div>
      </BackgroundImage>
    </div>
  );
};

export default Firstpage;
