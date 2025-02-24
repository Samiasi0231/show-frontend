import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faBookOpen,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";

const Modal = ({ book, onClose }) => {
  return (
    <div
      className="fixed bg-black bg-opacity-50 inset-0 z-20 flex justify-center items-center p-4"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl bg-white rounded-xl p-6 flex flex-col relative shadow-lg"
      >
        
        <FontAwesomeIcon
          icon={faXmark}
          className="absolute right-4 top-4 text-3xl text-red-600 cursor-pointer"
          onClick={onClose}
        />

  
        <h2 className="w-fit px-4 py-1 bg-red-300 rounded-lg text-sm md:text-base">
          {book.publishYear}
        </h2>

      
        <h4 className="my-2 text-gray-500 text-xs md:text-sm">{book._id}</h4>

        <div className="flex items-center gap-2 mt-2">
          <FontAwesomeIcon
            icon={faBookOpen}
            className="text-red-300 text-lg md:text-2xl"
          />
          <h2 className="text-base md:text-lg font-semibold">{book.title}</h2>
        </div>

        <div className="flex items-center gap-2 mt-2">
          <FontAwesomeIcon
            icon={faCircleUser}
            className="text-red-300 text-lg md:text-2xl"
          />
          <h2 className="text-base md:text-lg font-semibold">{book.author}</h2>
        </div>
      </div>
    </div>
  );
};

export default Modal;
