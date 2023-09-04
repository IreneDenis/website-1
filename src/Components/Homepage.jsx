/* eslint-disable no-unused-vars */
import React from "react";
import logo from "../assets/Images/logo.gif";
import "primeicons/primeicons.css";
import { PrimeIcons } from "primereact/api";
import HP2 from "../assets/Images/HP2.jpg";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Customdiv from "./Customdiv";

const Homepage = () => {
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get("http://192.168.150.152:3333/products/retrieve-products")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }, []);
  return (
    <div className="flex flex-col bg-slate-500 w-full h-full">
      <div className="flex flex-rows w-full h-9 ">
        <div className="flex justify-start items-center w-1/3 font-bold">
          <h3>+25563 565 8576</h3>
        </div>
        <div className="flex justify-center items-center w-1/3 font-bold">
          <h3>30% percent discount</h3>
        </div>
        <div className="flex justify-center items-center w-1/3 font-bold ">
          <h3>Welcome to our stores all over the continents </h3>
        </div>
      </div>
      <div className="flex flex-row w-full h-24  bg-white">
        <div className="flex w-2/3 ">
          <img src={logo} alt="" />
          <h1 className="flex justify-center items-center font-bold  text-slate-500 text-3xl ">
            NAPPY SHOPPING CENTRE
          </h1>
        </div>
        <div className="flex items-center font-bold w-2/6 border ">
          <input
            className="border border-black w-full"
            type="Text"
            placeholder="search"
          />
        </div>
        <div className="flex w-2/12 justify-center items-center font-bold text-xl">
          <i className="pi pi-user" style={{ fontSize: "2.1rem" }}></i>
          <a href="">
            <h5>Account</h5>
          </a>
        </div>
        <div className="flex items-center justify-center  font-bold text-xl w-2/12">
          <i className="pi pi-shopping-cart" style={{ fontSize: "2.3rem" }}></i>
          <a href="">
            <h5>Cart</h5>
          </a>
        </div>
      </div>
      <div className="flex border border-black h-screen w-full flex-row">
        <div className="flex h-full w-56 border border-red-900"></div>
        <div className="flex flex-col border border-black h-screen w-full  items-center">
          <div className="flex w-2/4 h-96 ">
            <img className="flex h-full w-full" src={HP2} alt="" />
          </div>
          <div className="flex w-full h-screen border border-blue-950 justify-center">
            <h2 className="flex underline justify-center font-bold">
              List of products
            </h2>
            <div className=" h-full  grid grid-cols-1 w-full sm:grid-cols-1 bg-white md:grid-col-1 lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1  ">
              {data?.map((data, index) => {
                return <Customdiv key={index} data={data} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
