import { Rating } from "primereact/rating";
// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Customdiv = (props) => {
  const data = props;
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  console.log(data.data.productUrl[0]);

  return (
    <div className="flex bg-orange-200 w-full h-full justify-center items-center ">
      <div className="flex bg-yellow-800 w-4/6 h-56 flex-row mt-5 rounded-3xl ">
        <div className="flex  h-full w-2/5 hover:cursor-pointer bg-white ">
          <a href={`/Detailpage/${data.data.id}`}>
            <img
              className="flex w-full h-full"
              src={data.data.productUrl[0]}
              alt="pc"
            />
          </a>
        </div>
        <div className="flex flex-col h-full w-full ml-4">
          <div className="flex w-full h-14  text-2xl font-bold">
            {data?.data.title}
          </div>
          <div className="flex w-full h-14  text-lg">
            price:Tsh {data?.data.price}
          </div>
          <div className="flex w-full h-14 ">
            <Rating value={value} onChange={(e) => setValue(e.value)} />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="flex items-center bg-slate-800 text-white animate-pulse rounded-xl w-40 h-14 justify-center"
              onClick={() => navigate()}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customdiv;
