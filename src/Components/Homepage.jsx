/* eslint-disable no-unused-vars */
import React from 'react'
import logo from '../assets/Images/logo.gif'
import 'primeicons/primeicons.css';
import { PrimeIcons } from 'primereact/api';

function Homepage() {
  return (
    <div className='flex flex-col bg-slate-500 w-full h-screen'>
      <div className='flex flex-rows w-full h-9 '>
        <div className='flex justify-start items-center w-1/3 font-bold'><h3>+25563 565 8576</h3></div>
        <div className='flex justify-center items-center w-1/3 font-bold'><h3>30% percent discount</h3></div>
        <div className='flex justify-center items-center w-1/3 font-bold '><h3>Welcome to our stores all over the continents  </h3></div>
      </div>
      <div className='flex flex-row w-full h-24  bg-white'>
        <div className='flex w-2/3 '><img src={logo} alt='' />
          <h1 className='flex justify-center items-center font-bold  text-slate-500 text-3xl '>SHOPPING CENTRE</h1>
        </div>
        <div className="flex items-center font-bold w-2/6 border ">
          <input className='border border-black w-full' type="Text" placeholder="search" />
        </div>
        <div className='flex w-2/12 justify-center items-center font-bold text-xl'>
          <i className="pi pi-user" style={{ fontSize: '2.1rem' }}></i><a href=''><h5>Account</h5></a>
        </div>
        <div className="flex items-center justify-center  font-bold text-xl w-2/12"><i className="pi pi-shopping-cart" style={{ fontSize: '2.3rem', }}></i><a href=''><h5>Cart</h5></a></div>

      </div>
    </div>
  );
}

export default Homepage