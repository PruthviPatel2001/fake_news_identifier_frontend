import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  let navigate = useNavigate();

  return (
    <div className="p-10 text-[#424769] ">
      <button
        onClick={() => navigate(-1)}
        className=" shadow-xl py-2 px-8 inline-block font-bold text-white rounded-lg border border-[#7d6df5] bg-[#7d6df5] hover:bg-white hover:text-[#7d6df5] hover:border-[#7d6df5] transition duration-500 ease-in-out"
      >
        Back
      </button>
      <h1 className=" text-center font-bold mt-10 lg:mt-0  text-[#7d6df5] text-3xl">
        About Application
      </h1>

      <div className="grid grid-cols-12">
        <div className="col-span-12 mt-10 lg:mt-0 lg:col-span-5 flex justify-center items-center ">
          <img
            src={"./images/news_paper.jpg"}
            alt="dog"
            height={400}
            width={400}
            className=" rounded-lg shadow-xl"
          />
        </div>
        <div className="col-span-12 lg:col-span-7 px-4 mt-8 lg:mt-0 md:py-10">
          <h1 className="text-xl font-bold  border-b-2 inline pb-2">
            NewsCheckMate
          </h1>
          <div className="mt-4">
            <h1 className="text-md">
              This application leverages the power of Natural Language
              Processing (NLP) and Machine Learning (ML) to detect fake news
              articles. The technology behind this app consists of several key
              components, each playing a crucial role in the validation process.
            </h1>
          </div>

          <div className="mt-6">
            <h1 className="text-xl  font-bold border-b-2 inline pb-2">
              The Tech Behind the App
            </h1>
          </div>

          <div className="mt-4">
            <h1 className="text-md mt-2">
              <span className="text-[#7361f9] font-bold ">
                NLP and ML Model Trained with SVM:
              </span>{" "}
              The data is processed by NLP technology, while the machine
              learning model, fueled by Support Vector Machine (SVM), delves
              deep into news articles to discern truth from the noise.
            </h1>

            <h1 className="text-md mt-2">
              <span className="text-[#7361f9] font-bold">Backend:</span> The{" "}
              <span className="underline font-bold text-[#436850]">Flask </span>
              Behind the scenes, acts as our undercover agent, facilitating
              seamless communication between the frontend and the ML model
            </h1>

            <h1 className="text-md mt-2">
              <span className="text-[#7361f9] font-bold">Frontend:</span> The
              frontend, built with{" "}
              <span className="underline font-bold text-[#40A2E3]">React</span>{" "}
              and with its sleek design and user-friendly interface, it invites
              you to dive into the world of news validation with just a few
              clicks.
            </h1>
          </div>

          <div className="mt-6">
            <h1 className="text-xl font-bold  border-b-2 inline pb-2">
              How it Works
            </h1>
          </div>

          <div className="mt-4">
            <ul className=" list-decimal text-md pl-8">
              <li className="mt-3">
                ✨ Input a suspicious article or click "Get Sample News" to test
                your detective skills.
              </li>
              <li className="mt-3">
                🧠 ML model discreetly analyzes the article, looking for
                telltale signs of misinformation.
              </li>
              <li className="mt-3">
                🎉 With an impressive accuracy rate of 98%, model delivers the
                truth: real or fake?
              </li>
            </ul>
          </div>

          <div className="mt-6">
            <h1 className="text-lg">
              Together, let's unravel the mysteries of misinformation and uphold
              the integrity of information.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
