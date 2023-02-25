import React from "react";
import Navbar from "./Components/Navbar";
import Allnews from "./Components/Allnews";
import { useState } from "react";
const App = () => {
  const [RealData, setRealData] = useState([]);
  const url =
    "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ffc861d61e28493b9ced3268d3333b2d";

  const fetchData = () => {
    fetch(url)
      .then((r) => r.json())
      .then((r) => {
        setRealData(r.articles);
      });
  };
  console.log(RealData);

  return (
    <>
      <div className="w-full h-full ">
        <Navbar fetchData={fetchData} />
        <Allnews />
      </div>
      ;
    </>
  );
};

export default App;
