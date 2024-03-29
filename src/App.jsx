import React from "react";

import Hero from "./Hero";
import Navbar from "./Navbar";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import { Section7 } from "./Section7";

const App = () => {
  return (
    <div className="bg-myLight">
      <Navbar />
      <Hero />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6/>
      <Section7/>
    </div>
  );
};

export default App;
