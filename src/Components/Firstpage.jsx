// eslint-disable-next-line no-unused-vars
import React from "react";
import FP2 from "../assets/Images/FP2.jpg";
import { BackgroundImage, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const Firstpage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex  bg-slate-500 w-full h-screen ">
      <BackgroundImage src={FP2}>
        <div className="flex w-full h-full flex-col">
          <div className="flex flex-row h-16 w-full font-bold justify-end items-center">
            <div className="flex w-32 h-full   items-end">
              <span
                className="pi pi-home hover:cursor-pointer mt-3 "
                onClick={() => navigate("/Homepage")}
              >
                Home
              </span>
            </div>
            <div className="flex w-32 h-full items-center  font-bold">
              <span className="pi pi-bookmark-fill hover:cursor-pointer mt-10">
                Bookmark
              </span>
            </div>
            <div className="flex w-32 h-full items-center">
              <span className="pi pi-cog hover:cursor-pointer mt-10">
                Settings
              </span>
            </div>
            <div className="flex w-32 h-full items-center">
              <span className="pi pi-refresh hover:cursor-pointer mt-10 items-center">
                Update
              </span>
            </div>
            <div className="flex w-32 h-full items-center">
              <span className="pi pi-qrcode hover:cursor-pointer mt-11">
                Scan Code
              </span>
            </div>
            <div className="flex w-32 h-full items-center">
              <span
                className="pi pi-user hover:cursor-pointer mt-10"
                onClick={() => navigate("/Aboutus")}
              >
                About us
              </span>
            </div>
          </div>
          <div className="flex flex-col absolute top-16 items-start w-full h-48">
            <Text className="flex text-9xl font-bold ml-14">Welcome!</Text>

            <Text className="flex text-lg ml-28">
              We provide the best service around the world
            </Text>
          </div>

          <div className="flex flex-row mt-48 items-center justify w-96 ml-28">
            <div className="flex items-end flex-col h-full ">
              <button
                className="flex underline font-bold text-lg  items-center mb-8 mt-5"
                onClick={() => navigate("/Login")}
              >
                Back to Login
              </button>
            </div>
            <div className="flex items-end flex-col h-full ml-10 ">
              <button
                className="flex underline font-bold text-lg  items-center mb-8 mt-4 "
                onClick={() => navigate("/Homepage")}
              >
                GET STARTED
              </button>
            </div>
          </div>
        </div>
      </BackgroundImage>
    </div>
  );
};

export default Firstpage;
