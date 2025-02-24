import React from "react";
import Singlecard from "./Singlecard";

const BooksCard = ({ books }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
      {books.map((item) => (
        <Singlecard key={item._id} book={item} className="text-sm" />
      ))}
    </div>
  );
};

export default BooksCard;
