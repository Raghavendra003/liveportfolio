import React from "react";
import himg from "../src/images/himg.jpg";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common name="I'm Raghavendra"
                imgsrc={himg}
                visit="/project"
                btnname="Projects"
                />
    </>
  );
};

export default Home;
