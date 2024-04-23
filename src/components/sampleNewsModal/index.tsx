import { Box, CircularProgress, Modal } from "@mui/material/";
import axios from "axios";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useSlowServerDetector } from "../../hooks";

interface sampleNewsModalProps {
  openModal: boolean;
  handleModal: () => void;
}

const style = {
  position: "absolute" as "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 3,
};

const SampleNewsModal = ({ openModal, handleModal }: sampleNewsModalProps) => {
  const [sampleNews, setsampleNews] = useState("");
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);

  const [isLoading, setisLoading] = useState(false);
  const {
    serverSlow,
    detectSlowServer,
    clearSlowServerDetection,
    resetServerStatus,
  } = useSlowServerDetector();

  const getSampleNews = async () => {
    try {
      setCopiedToClipboard(false);
      setisLoading(true);

      const timeoutTimer = detectSlowServer();

      const res = await axios.get(
        "https://fake-news-app-api.onrender.com/get-sample-news"
      );

      if (res) {
        clearSlowServerDetection(timeoutTimer);
        setsampleNews(res.data.content);
        setisLoading(false);
        resetServerStatus();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handelModalclose = () => {
    setCopiedToClipboard(false);
    setsampleNews("");
    handleModal();
    resetServerStatus();
    setisLoading(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(sampleNews);
    setCopiedToClipboard(true);
  };

  return (
    <div>
      <Modal open={openModal} onClose={handelModalclose}>
        <Box sx={style}>
          <div className="flex justify-between">
            <h2 className=" text-xl font-bold text-[#7d6df5]">
              Get Sample News For Testing
            </h2>
            <CloseIcon className="cursor-pointer" onClick={handelModalclose} />
          </div>

          <div className="mt-14">
            {sampleNews && (
              <div className="flex justify-end">
                <button
                  className=" mb-4 text-[#909094]"
                  onClick={copyToClipboard}
                >
                  <ContentCopyIcon />
                  <span>Copy Sample News</span>
                </button>
              </div>
            )}
            <textarea
              value={sampleNews}
              placeholder="Get Sample News"
              className="border shadow-sm p-4 rounded-md mb-2"
              rows={10}
              cols={100}
              readOnly
            />
          </div>

          <div className="mt-4 flex justify-center">
            <button
              className={`border rounded-md px-8 py-2 ${
                isLoading
                  ? "bg-white border-[#8171f7]"
                  : "bg-[#8171f7] text-white font-bold"
              } `}
              onClick={getSampleNews}
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex flex-col justify-center items-center">
                  <CircularProgress size={30} />
                  <span className="mt-2">Loading...</span>
                </div>
              ) : (
                "Get Sample News"
              )}
            </button>
          </div>

          {copiedToClipboard && (
            <div className="mt-4 text-center">
              <h2 className="text-white bg-[#41B06E] font-bold rounded-md py-1">
                Text Copied to Clipboard
              </h2>
            </div>
          )}

          {serverSlow && (
            <div className="mt-4 text-center">
              <h2 className="text-white bg-[#FA7070] px-2  font-bold rounded-md py-1">
                Request taking longer than expected, possibly due to server
                limitations. Thank you for your patience.
              </h2>
            </div>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default SampleNewsModal;
