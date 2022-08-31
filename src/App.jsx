import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar"
import Section2 from "./Section2";
import Section3 from "./Section3";

const App = () => {
  return (
    <div className="bg-myLight">
      <Navbar /> 
      <Hero/>
      <Section2/>
      <Section3/>

    </div>
  );
};

export default App;
