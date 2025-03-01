import React, { useEffect, useState } from "react";
import Spinner from "../Docum/Spinner";
import Backbutton from "../Docum/Backbutton";
import { useParams } from "react-router-dom";
import apiRequest from "../../lib/ApiRequest";

const Showbook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    console.log({ id });
    setLoading(true);
    apiRequest.get(`/api/getonebook/${id}`)
      .then((response) => {
        setBook(response.data.data);
        setLoading(false);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]); 

  return (
    <div className="p-4 ">
      <Backbutton />
      <h1 className="text-3xl my-4">Show Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border border-sky-500 rounded-xl w-fit p-4">
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Id</span>
            <span>{book._id}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Title</span>
            <span>{book.title}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Author</span>
            <span>{book.author}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Publish Year</span>
            <span>{book.publishYear}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Create Time</span>
            <span>{new Date(book.createdAt).toString()}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Last Update Time</span>
            <span>{new Date(book.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Showbook;
