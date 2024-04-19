import React, { useState } from "react";
import axios from "axios";
const NewsInput = () => {
  const [news, setNews] = useState("");
  const [result, setResult] = useState("");
  const validateNews = async () => {
    try {
      const res = await axios.post(
        "https://fake-news-app-api.onrender.com/validate-news",
        {
          article: news,
        }
      );
      console.log(res);
      if (res) {
        setResult(res.data.prediction);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" flex flex-col">
      <textarea
        value={news}
        onChange={(e) => setNews(e.target.value)}
        placeholder="Enter News"
        className="border-2 border-gray-500   mb-2"
        rows={10}
        cols={100}
      />

      <div className=" mt-8 flex justify-center">
        <button className="border rounded-md px-8 py-2" onClick={validateNews}>
          Validate News
        </button>
      </div>

      <div className="mt-8 text-center ">
        <h2 className="">Model Prediction: The provided news is {result}</h2>
      </div>
    </div>
  );
};

export default NewsInput;
