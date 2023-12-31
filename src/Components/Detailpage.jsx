// eslint-disable-next-line no-unused-vars
import React from "react";
import logo from "../assets/Images/logo.gif";
import "primeicons/primeicons.css";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Rating } from "primereact/rating";
import Smalldiv from "./Smalldiv";

const Detailpage = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [count, setCount] = useState(1);
  const [value, setValue] = useState();
  console.log(id);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await axios.get(
        `http://192.168.150.151:3000/products/${id}/product`
      );
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col bg-orange-300 w-full h-screen">
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
          <h1 className="flex justify-center items-center font-bold  text-slate-700 text-3xl ">
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
      <div className="flex h-96 w-5/6 bg-slate-800 flex-row mt-2 justify-center items-center">
        <div className="flex border border-black h-full w-full ">
          <img
            src={data?.productUrl[0]}
            alt="pc"
            className="flex w-full h-full"
          />
        </div>
        <div className="flex flex-col w-full h-full bg-slate-800 border border-black ">
          <div className="flex w-full h-44 bg-yellow-800 font-bold font-sans text-5xl ">
            {" "}
            {data?.title}
          </div>
          <div className="flex w-full h-28 bg-yellow-800 font-bold font-sans flex-row  ">
            <div className="flex h-full  w-3/6 items-center">
              Rating:
              <Rating value={value} onChange={(e) => setValue(e.value)} />
            </div>
            <div className="flex h-full w-3/6 items-center ml-16">
              Price: Tsh.{data?.price}
            </div>
          </div>
          <div className="flex w-full h-32 bg-yellow-800 font-bold font-sans items-center justify-between flex-row">
            <div className="flex ">Get a discount of {data?.discount}%</div>
            <div className="flex mr-4">
              Stocks Remain: {data?.productInStock}
            </div>
          </div>
          <div className="flex w-full h-52 bg-yellow-800 flex-row">
            <div className="flex w-full justify-end items-center">
              <button
                className="bg-slate-800 h-10 w-9 border border-black rounded-xl"
                onClick={() => setCount((prevcount) => prevcount - 1)}
              >
                -
              </button>
            </div>
            <div className="flex w-full justify-center items-center">
              <button className="bg-slate-800 h-10 w-9 border border-black rounded-xl">
                {count}
              </button>
            </div>
            <div className="flex w-full justify-start items-center">
              <button
                className=" bg-slate-800 h-10 w-9 border border-black rounded-xl"
                onClick={() => setCount((prevcount) => prevcount + 1)}
              >
                +
              </button>
            </div>
          </div>
          <div className="flex w-full h-52 bg-yellow-800 flex-row ">
            <div className="flex text-black w-full justify-center items-center">
              <button className="bg-slate-800 h-10 w-32 border border-black rounded-xl">
                Buy Now
              </button>
            </div>
            <div className="flex text-black w-full justify-center items-center">
              <button className="bg-slate-800 h-10 w-32 border border-black rounded-xl">
                Add to Chart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full mt-5 grid grid-cols-2 gap-5 w-auto sm:grid-cols-2 bg-orange-200 md:grid-col-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 ">
        {data?.productUrl.map((data, index) => {
          return <Smalldiv key={index} data={data} />;
        })}
      </div>
    </div>
  );
};

export default Detailpage;
