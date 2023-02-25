import React from "react";

const Navbar = (props) => {
  return (
    <>
      <header className="mx-60 text-gray-700 border-gray-700 shadow-2xl font-Oxygen border-b-2 ">
        <ul className="flex justify-center space-x-10 py-5">
          <li
            onClick={props.fetchData}
            className="text-xl hover:cursor-pointer hover:underline hover:underline-offset-2 "
          >
            Top headlines
          </li>
          <li className="text-xl hover:cursor-pointer hover:underline hover:underline-offset-2">
            Business
          </li>
          <li className="text-xl hover:cursor-pointer hover:underline hover:underline-offset-2">
            Entertainment
          </li>
          <li className="text-xl hover:cursor-pointer hover:underline hover:underline-offset-2">
            Technology
          </li>
          <li className="text-xl hover:cursor-pointer hover:underline hover:underline-offset-2">
            Sports
          </li>
        </ul>
      </header>
    </>
  );
};

export default Navbar;
