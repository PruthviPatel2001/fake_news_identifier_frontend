import { CircularProgress } from "@mui/material";
import React from "react";

interface LoaderProps {
  size?: number;
  loadingText?: string;
}

const Loader = ({ size = 20, loadingText = "Loading" }: LoaderProps) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <CircularProgress size={size} />
      <span className="mt-2">{loadingText}...</span>
    </div>
  );
};

export default Loader;
