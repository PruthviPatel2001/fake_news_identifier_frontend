import { Box, Modal } from "@mui/material/";
import axios from "axios";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

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

  const getSampleNews = async () => {
    try {
      const res = await axios.get(
        "https://fake-news-app-api.onrender.com/get-sample-news"
      );
      if (res) {
        setsampleNews(res.data.content);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handelModalclose = () => {
    setsampleNews("");
    handleModal();
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(sampleNews);
  };

  return (
    <div>
      <Modal open={openModal} onClose={handelModalclose}>
        <Box sx={style}>
          <div className="flex justify-between">
            <h2 className=" text-xl font-bold">Get Sample News For Testing</h2>
            <CloseIcon className="cursor-pointer" onClick={handelModalclose} />
          </div>

          <div className="mt-14">
            {sampleNews && (
              <div className="flex justify-end mb-4">
                <ContentCopyIcon
                  className="cursor-pointer"
                  onClick={copyToClipboard}
                />
                <span>Copy Sample Text</span>
              </div>
            )}
            <textarea
              value={sampleNews}
              placeholder="Enter News"
              className="border border-gray-500   "
              rows={10}
              cols={100}
            />
          </div>

          <div className="mt-4 flex justify-center">
            <button
              className="border rounded-md px-8 py-2 "
              onClick={getSampleNews}
            >
              Get Sample News
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default SampleNewsModal;
