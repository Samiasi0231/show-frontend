import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="animate-spin w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full border-4 border-green-500 border-t-transparent">
      </div>
    </div>
  );
};

export default Spinner;
