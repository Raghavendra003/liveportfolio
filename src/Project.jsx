import React from "react";
import { NavLink } from "react-router-dom";

const Project = () => {
  return (
    <>
      <div className="trans my-5 text-center">
        <h3>
          Sorry, <strong>Project Page</strong> is under process, updating the
          page as early as possible
        </h3>
      </div>

      <br />
      <button type="button" class="btn btn-warning">
        <NavLink to="/">GoBack</NavLink>
      </button>
    </>
  );
};

export default Project;
