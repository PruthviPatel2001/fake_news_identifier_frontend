import React, { useState } from "react";
import axios from "axios";
import { useSlowServerDetector } from "../../hooks";
import { CircularProgress } from "@mui/material";
import Loader from "../Loader";
const NewsInput = () => {
  const [news, setNews] = useState("");
  const [result, setResult] = useState("");

  const [isLoading, setisLoading] = useState(false);
  const {
    serverSlow,
    detectSlowServer,
    clearSlowServerDetection,
    resetServerStatus,
  } = useSlowServerDetector();

  const validateNews = async () => {
    try {
      setResult("");
      setisLoading(true);
      const timeoutTimer = detectSlowServer();

      const res = await axios.post(
        "https://fake-news-app-api.onrender.com/validate-news",
        {
          article: news,
        }
      );
      if (res) {
        clearSlowServerDetection(timeoutTimer);
        setResult(res.data.prediction);
        resetServerStatus();
        setisLoading(false);
      }
    } catch (error) {
      console.log(error);
      setisLoading(false);
    }
  };

  const disableButton = (): boolean => {
    if (news === "") {
      return true;
    }
    if (isLoading) {
      return true;
    }

    return false;
  };

  return (
    <div className=" flex flex-col">
      <textarea
        value={news}
        onChange={(e) => setNews(e.target.value)}
        placeholder="Paste News Here to Validate"
        className="border shadow-md p-4 rounded-md mb-2"
        rows={10}
        cols={100}
      />
      <div className=" mt-8 flex justify-center">
        <button
          className={`border rounded-md px-8 py-2    shadow-md ${
            disableButton() ? "cursor-not-allowed bg-red" : "cursor-pointer"
          } ${
            isLoading
              ? "bg-white border-[#8171f7]"
              : "bg-[#8171f7] text-white font-bold"
          }
          `}
          onClick={validateNews}
          disabled={disableButton()}
        >
          {isLoading ? (
            <>
              <Loader loadingText="Validating News" />
            </>
          ) : (
            "Validate News"
          )}
        </button>
      </div>
      {serverSlow && (
        <div className="mt-4 text-center">
          <h2 className="text-white bg-[#FA7070] px-2  font-bold rounded-md py-1">
            Request taking longer than expected, possibly due to server
            limitations. Thank you for your patience.
          </h2>
        </div>
      )}
      {result && (
        <div className="mt-8 text-center bg-white shadow-md border text-[#9386f6] font-bold rounded-md py-1 ">
          <h2 className="">
            Model Prediction: The provided news is
            <span
              className={`${
                result === "Real" ? "text-[#9BCF53]" : "text-[#FF6868]"
              } ml-1`}
            >
              {result}
            </span>
          </h2>
        </div>
      )}
    </div>
  );
};

export default NewsInput;
