import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";

const BackButton = ({ destination = "/" }) => {
  return (
    <div className="flex items-center">
      <Link
        to={destination}
        className="bg-sky-800 text-white px-4 py-2 rounded-lg w-fit flex items-center gap-2 hover:bg-sky-900 transition duration-300"
      >
        <FontAwesomeIcon icon={faCircleArrowLeft} className="text-2xl" />
        <span className="hidden sm:block">Back</span>
      </Link>
    </div>
  );
};

export default BackButton;
