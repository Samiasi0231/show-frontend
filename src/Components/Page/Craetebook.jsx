import React, { useState } from "react";
import apiRequest from "../../lib/ApiRequest";
import { useSnackbar } from "notistack";
import Spinner from "../Docum/Spinner";
import Backbutton from "../Docum/Backbutton";
import { useNavigate } from "react-router-dom";

const Craetebook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const handleSaveBook = () => {
    const data = { title: title, author: author, publishYear: publishYear };
    setLoading(true);

      apiRequest.post("/api/postBook", data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book created successfully", { variant: "success" });
        navigate("/home");
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  };
  return (
    <section className="mx-auto max-w-screen-xl h-screen bg-sky-300">
      <div className="text">
        <Backbutton />
        <h1 className="text-3xl my-4"> Create Book</h1>
        {loading ? <Spinner /> : ""}
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border-2 border-gray-500 py-2 px-4 w-full"
            />
          </div>

          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Author</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="border-2 border-gray-500 py-2 px-4 w-full"
            />
          </div>

          <div className="my-4">
            <label htmlFor="" className="text-xl mr-4 text-gray-500">
              Publish Year
            </label>
            <input
              type="text"
              value={publishYear}
              onChange={(e) => setPublishYear(e.target.value)}
              className="border-2 border-gray-500 py-2 px-4 w-full"
            />
          </div>
          <button
            className="p-2 text-blue-300 bg-white m-5"
            onClick={handleSaveBook}
          >
            Save
          </button>
        </div>
      </div>
    </section>
  );
};
export default Craetebook;
