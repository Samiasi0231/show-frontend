import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faBookOpen,
  faCircleUser,
  faPenToSquare,
  faCircleInfo,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import BookModal from "./BookModal";

const Singlecard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="w-full flex justify-center">
      <div
        key={book._id}
        className="border border-gray-500 rounded-lg px-6 py-4 m-4 relative hover:shadow-xl transition duration-300 max-w-sm md:max-w-md lg:max-w-lg bg-white"
      >
        <h2 className="absolute top-2 right-2 px-3 py-1 bg-red-300 rounded-lg text-xs md:text-sm">
          {book.publishYear}
        </h2>

        <h4 className="my-2 text-gray-500 text-sm break-words">{book._id}</h4>

        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faBookOpen} className="text-red-400 text-lg md:text-xl" />
          <h2 className="text-md md:text-lg font-semibold">{book.title}</h2>
        </div>

        <div className="flex items-center gap-2 mt-2">
          <FontAwesomeIcon icon={faCircleUser} className="text-red-400 text-lg md:text-xl" />
          <h2 className="text-md md:text-lg">{book.author}</h2>
        </div>

        <div className="flex justify-between items-center gap-4 mt-4 p-4">
          <FontAwesomeIcon
            icon={faEye}
            className="text-2xl text-blue-700 hover:text-black cursor-pointer transition duration-200"
            onClick={() => setShowModal(true)}
          />
          <Link to={`/books/details/${book._id}`}>
            <FontAwesomeIcon icon={faCircleInfo} className="text-2xl text-green-700 hover:text-black transition duration-200" />
          </Link>
          <Link to={`/books/edit/${book._id}`}>
            <FontAwesomeIcon icon={faPenToSquare} className="text-2xl text-yellow-600 hover:text-black transition duration-200" />
          </Link>
          <Link to={`/books/delete/${book._id}`}>
            <FontAwesomeIcon icon={faTrashCan} className="text-2xl text-red-600 hover:text-black transition duration-200" />
          </Link>
        </div>

        {showModal && <BookModal book={book} onClose={() => setShowModal(false)} />}
      </div>
    </div>
  );
};

export default Singlecard;
