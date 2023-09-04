import { Rating } from "primereact/rating";
// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Customdiv = (props) => {
  const  data  = props;
  const navigate = useNavigate();
  const [value, setValue] = useState("");

  return (
    <div className="flex bg-white w-full h-full justify-center items-center ">
      <div className="flex bg-slate-500 w-3/6 h-56 flex-row ">
        <div className="flex border border-black h-full w-2/5 hover:cursor-pointer">
          <a href={`/Detailpage/${data.id}`}>
            <img src={data.productUrl[0]} alt="pc" />
          </a>
        </div>
        <div className="flex flex-col h-full w-full">
          <div className="flex w-full h-14 border border-red-900">
            {data?.title}
          </div>
          <div className="flex w-full h-14 border border-green-950">
            price:Tsh{data?.price}
          </div>
          <div className="flex w-full h-14 border border-black">
            <Rating value={value} onChange={(e) => setValue(e.value)} />
          </div>
          <button
            className="flex items-center bg-green-950 text-white animate-pulse rounded-xl w-full h-14"
            onClick={() => navigate()}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Customdiv;
