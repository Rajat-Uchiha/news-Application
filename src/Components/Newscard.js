import React from "react";

const Newscard = () => {
  return (
    <>
      {/* Main card */}
      <div className="flex justify-center my-4 shadow-lg items-center border-2 ">
        {/* Content part */}
        <div className="py-4 flex flex-col items-start w-3/4 p-2">
          <h1 className="font-Oxygen font-bold text-xl text-gray-700 mb-2 max-h-10 overflow-hidden">
            Virat Kohli become the first player in history to score 300 in test
            cricket
          </h1>

          <p className="font-Oxygen text-start font-medium text-md text-gray-700 pb-2 overflow-hidden max-h-20">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            accusantium ratione quidem sequi ipsum quisquam porro molestias,
            repellendus eum iste. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit.
          </p>

          <a
            href="https://www.google.com"
            className="font-Oxygen font-light hover:scale-105 transition-all hover:underline mt-3 "
          >
            Read More
          </a>
        </div>
        {/* Image part */}
        <div className="w-1/4">
          <img
            src="https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/13A22/production/_128681408_gettyimages-1467729351.jpg"
            alt="urlImage"
          />
        </div>
      </div>
    </>
  );
};

export default Newscard;
