import Slider from "@/components/Slider";
import React from "react";
import Categoryone from "./products/categories/categoryone/page";
import Categorytwo from "./products/categories/categorytwo/page";

const Home = () => {
  return (
    <div>
      <Slider />
      <Categoryone />
      <hr className="container mx-auto" />
      <Categorytwo />
    </div>
  );
};

export default Home;
