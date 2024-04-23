import React, { useState } from "react";
import { Header, NewsInput, SampleNewsModal } from "../components";

import { Link } from "react-router-dom";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleModal = () => setOpenModal(!openModal);
  return (
    <div className="px-24  h-[80vh]">
      <div className=" flex justify-between mt-4 ">
        <button
          className="flex justify-center my-4 w-52 border px-4 py-2 rounded-md shadow-lg hover:bg-[#98A8F8] hover:text-white font-bold bg-white text-[#98A8F8] border-[#98A8F8]"
          onClick={handleModal}
        >
          Get News Sample
        </button>
        <Link
          to="/about"
          className="flex justify-center my-4 w-52 border px-4 py-2 rounded-md shadow-lg hover:bg-[#98A8F8] hover:text-white font-bold bg-white text-[#98A8F8] border-[#98A8F8]"
        >
          About
        </Link>
      </div>

      <div>
        <Header />
      </div>

      <SampleNewsModal openModal={openModal} handleModal={handleModal} />
      <div className="flex flex-col justify-center items-center mt-14 ">
        <NewsInput />
      </div>
    </div>
  );
};

export default Home;
