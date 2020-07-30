import React from "react";
import { NavLink } from "react-router-dom";
import himg from "../src/images/himg.jpg";
import common from "./Common";
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common
        name="I'm avilable for open to work"
        imgsrc={himg}
        visit="/contact"
        btnname="Hire Me"
      />
    </>
  );
};

export default About;
