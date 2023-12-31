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
import HP from "../assets/Images/HP.jpg";
import { Navigate, useNavigate } from "react-router-dom";
import { Avatar } from "primereact/avatar";
import { PanelMenu } from "primereact/panelmenu";

const Homepage = () => {
  const [data, setData] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://192.168.150.151:3000/products/retrieve-products")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }, []);
  const items = [
    {
      label: "File",
      icon: "pi pi-fw pi-file",
      items: [
        {
          label: "New",
          icon: "pi pi-fw pi-plus",
          items: [
            {
              label: "Bookmark",
              icon: "pi pi-fw pi-bookmark",
            },
            {
              label: "Products",
              icon: "pi pi-fw pi-image",
            },
          ],
        },
        {
          label: "Delete",
          icon: "pi pi-fw pi-trash",
        },
        {
          label: "Export",
          icon: "pi pi-fw pi-external-link",
        },
      ],
    },
    {
      label: "Edit",
      icon: "pi pi-fw pi-pencil",
      items: [
        {
          label: "Left",
          icon: "pi pi-fw pi-align-left",
        },
        {
          label: "Right",
          icon: "pi pi-fw pi-align-right",
        },
        {
          label: "Center",
          icon: "pi pi-fw pi-align-center",
        },
        {
          label: "Justify",
          icon: "pi pi-fw pi-align-justify",
        },
      ],
    },
    {
      label: "Users",
      icon: "pi pi-fw pi-user",
      items: [
        {
          label: "New",
          icon: "pi pi-fw pi-user-plus",
        },
        {
          label: "Delete",
          icon: "pi pi-fw pi-user-minus",
        },
        {
          label: "Search",
          icon: "pi pi-fw pi-users",
          items: [
            {
              label: "Filter",
              icon: "pi pi-fw pi-filter",
              items: [
                {
                  label: "Print",
                  icon: "pi pi-fw pi-print",
                },
              ],
            },
            {
              icon: "pi pi-fw pi-bars",
              label: "List",
            },
          ],
        },
      ],
    },
    {
      label: "Events",
      icon: "pi pi-fw pi-calendar",
      items: [
        {
          label: "New",
          icon: "pi pi-fw pi-user-plus",
        },
        {
          label: "Edit",
          icon: "pi pi-fw pi-pencil",
          items: [
            {
              label: "Save",
              icon: "pi pi-fw pi-calendar-plus",
            },
            {
              label: "Delete",
              icon: "pi pi-fw pi-calendar-minus",
            },
          ],
        },
        {
          label: "Archive",
          icon: "pi pi-fw pi-calendar-times",
          items: [
            {
              label: "Remove",
              icon: "pi pi-fw pi-calendar-minus",
            },
          ],
        },
      ],
    },
  ];
  return (
    <div className="flex flex-col bg-orange-300 w-full h-full">
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
          <h1 className="flex justify-center items-center font-bold  text-slate-800 text-3xl ">
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
        <div className="flex w-2/12 justify-center items-center font-bold text-sm">
          <i className="pi pi-user" style={{ fontSize: "2.1rem" }}></i>
          <a href="">
            <h5>Account</h5>
          </a>
        </div>
        <div className="flex items-center justify-center  font-bold text-sm w-2/12">
          <i className="pi pi-shopping-cart" style={{ fontSize: "2.3rem" }}></i>
          <a href="">
            <h5>Cart</h5>
          </a>
        </div>
      </div>
      <div className="flex  h-screen w-full flex-row">
        <div className="flex h-full w-72 flex-col items-center text-xl font-bold bg-white border-8 border-orange-300 ">
          <button className="w-full p-link flex items-center ">
            <Avatar
              image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
              className="mr-2"
              shape="circle"
            />
            <div className="flex flex-column align">
              <span className="font-bold">Amy Elsner</span>
              <span className="text-sm">Agent</span>
            </div>
          </button>
          <div className="card flex justify-content-center">
            <PanelMenu model={items} className="w-full " />
          </div>
        </div>
        <div className="flex flex-col h-screen w-full  items-center">
          <div className="flex flex-row  w-full">
            <div className="flex w-2/4 h-96 ">
              <img className="flex h-full w-full" src={HP2} alt="" />
            </div>
            <div className="flex h-96 w-2/4">
              <img className="flex h-full w-full" src={HP} alt="" />
            </div>
          </div>
          <div className=" w-full h-screen justify-center grid grid-cols-1 sm:grid-cols-1 bg-orange-300 md:grid-col-1 lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1 ">
            <h2 className="flex underline justify-center font-bold">
              List of products
            </h2>
            {data?.map((data, index) => {
              return <Customdiv key={index} data={data} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
