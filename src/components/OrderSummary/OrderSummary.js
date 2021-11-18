import React from "react";

import image from "../../assets/img/illustration-hero.svg";
import iconMusic from "../../assets/img/icon-music.svg";

export default function OrderSummary() {
  let style = {
    height: "620px",
  };
  return (
    <div className="flex justify-center items-center h-screen ">
      <div
        id="card"
        className="flex flex-col rounded-2xl h-auto w-96 font-sans bg-white items-center"
        style={style}
      >
        <img className="w-full rounded-t-2xl" src={image} alt="Hero" />
        <div className="flex flex-col items-center  p-7">
          <p className="font-black  text-2xl text-darkBlue">Order Summary</p>
          <p className="font-base text-desaturatedBlue mt-2 text-center">
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like.
          </p>
        </div>
        <div
          id="innerCard"
          className="bg-veryPaleBlue w-10/12 rounded-lg flex justify-start p-5"
        >
          <img alt="Icon music" src={iconMusic}></img>
          <div>
            <p className="font-extrabold text-md text-darkBlue ml-5">
              Annual Plan
            </p>
            <p className="font-base text-desaturatedBlue ml-5">$59.99/ Year</p>
          </div>
          <div className="flex justify-end w-28 items-center">
            <a
              href="."
              className="underline text-bright hover:no-underline hover:text-desaturatedBlue font-semibold"
            >
              Change
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <button
            className="bg-bright rounded-md h-10 w-80 mt-10 text-white font-semibold shadow-2xl mb-10 hover:bg-desaturatedBlue"
            type="submit"
          >
            Proceed to Payment
          </button>
          <p className="text-desaturatedBlue hover:text-gray-800 cursor-pointer font-bold">
            Cancel order
          </p>
        </div>
      </div>
    </div>
  );
}
