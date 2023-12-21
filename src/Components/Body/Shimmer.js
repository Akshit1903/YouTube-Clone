import React from "react";

const ShimmerCard = () => {
  return (
    <div className="m-4">
      <div className="bg-gray-200 w-80 h-44 rounded-xl mb-2"></div>
      <div className="flex">
        <div className="bg-gray-200 rounded-full w-10 h-10"> </div>
        <div className="ml-4">
          <div className="bg-gray-200 w-60 h-6 rounded-xl mb-2"></div>
          <div className="bg-gray-200 w-60 h-2 rounded-xl"></div>
        </div>
      </div>
    </div>
  );
};

const Shimmer = () => {
  return (
    <div className="flex flex-wrap p-4 justify-center">
      {Array(20)
        .fill()
        .map((_, index) => (
          <ShimmerCard key={index} />
        ))}
    </div>
  );
};

export default Shimmer;
