import React from "react";
import img1 from "../src/images/img1.jpg";
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common
        name="I'm avilable for open to work"
        imgsrc={img1}
        visit="/contact"
        btnname="Hire Me"
      />
    </>
  );
};

export default About;
