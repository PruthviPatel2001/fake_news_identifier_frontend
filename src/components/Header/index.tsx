import React from "react";

const Header = () => {
  return (
    <div className=" bg-[#778df9] flex flex-col justify-center items-center border mt-10 py-8 rounded-md shadow-lg">
      <h1 className="text-3xl font-bold text-white">
        Welcome to the News Checkmate
      </h1>
      <span className="text-md font-bold mt-2 text-white">
        The NLP and ML-Powered Solution for Verifying News Authenticity{" "}
        <span className="text-2xl">📰</span>
      </span>
    </div>
  );
};

export default Header;
