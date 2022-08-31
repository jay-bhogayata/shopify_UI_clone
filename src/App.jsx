import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar"
import Section2 from "./Section2";

const App = () => {
  return (
    <div className="bg-myLight">
      <Navbar /> 
      <Hero/>
      <Section2/>

    </div>
  );
};

export default App;
