import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faCircleInfo,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

const BooksTable = ({ books }) => {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  return (
    <div className="overflow-x-auto bg-blue-600 p-4 rounded-lg">
      <table className="w-full border-separate border-spacing-2 text-white">
        <thead>
          <tr className="bg-blue-800">
            <th className="border border-slate-600 rounded-md px-4 py-2">No</th>
            <th className="border border-slate-600 rounded-md px-4 py-2">Title</th>
            <th className="border border-slate-600 rounded-md px-4 py-2 hidden md:table-cell">
              Author
            </th>
            <th className="border border-slate-600 rounded-md px-4 py-2 hidden md:table-cell">
              Publish Year
            </th>
            <th className="border border-slate-600 rounded-md px-4 py-2">Operation</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={book._id} className="h-10 bg-blue-500 even:bg-blue-700">
              <td className="border border-slate-700 rounded-md text-center px-4 py-2">
                {index + 1}
              </td>
              <td className="border border-slate-700 rounded-md text-center px-4 py-2">
                {book.title}
              </td>
              <td className="border border-slate-600 rounded-md px-4 py-2 text-center hidden md:table-cell">
                {book.author}
              </td>
              <td className="border border-slate-600 rounded-md px-4 py-2 text-center hidden md:table-cell">
                {book.publishYear}
              </td>
              <td className="border border-slate-700 rounded-md text-center px-4 py-2">
                <div className="flex justify-center gap-3">
                  <Link to={`/books/details/${book._id}`}>
                    <FontAwesomeIcon
                      icon={faCircleInfo}
                      className="text-xl text-green-400 hover:text-green-500 transition duration-200"
                    />
                  </Link>
                  <Link to={`/books/edit/${book._id}`}>
                    <FontAwesomeIcon
                      icon={faPenToSquare}
                      className="text-xl text-orange-400 hover:text-orange-500 transition duration-200"
                    />
                  </Link>
                  <button onClick={() => setIsDeleteOpen(!isDeleteOpen)}>
                    <FontAwesomeIcon
                      icon={faTrashCan}
                      className="text-xl text-red-500 hover:text-red-600 transition duration-200"
                    />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BooksTable;
