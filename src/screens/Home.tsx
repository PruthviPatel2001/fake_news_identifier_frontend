import React from "react";
import { NewsInput, SampleNewsModal } from "../components";
const Home = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const handleModal = () => setOpenModal(!openModal);
  return (
    <div>
      <div className=" flex justify-end px-10">
        <button onClick={handleModal}>Get News Sample</button>
      </div>
      <SampleNewsModal openModal={openModal} handleModal={handleModal} />
      <div className="flex flex-col justify-center items-center border h-[100vh]">
        <NewsInput />
      </div>
    </div>
  );
};

export default Home;
