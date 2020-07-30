import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;
    setData((preData) => {
      return { ...preData, [name]: value };
    });
  };

  const formSubmit = (event) => {
    event.preventDefault();
    alert("Submitted Successfully👍");
    setData({
      fullname: "",
      phone: "",
      email: "",
      msg: "",
    });
  };

  return (
    <>
      <div classname="my-5">
        <h1 className="text-center">Contact Here</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form
              onSubmit={formSubmit}
              action="https://formspree.io/raghavendramca.g@gmail.com"
              method="POST"
            >
              <div className="mb-3">
                <label for="exampleFormControlInput1">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={data.fullname}
                  onChange={inputEvent}
                  placeholder="Enter Your Full Name"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1">Phone</label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone}
                  onChange={inputEvent}
                  placeholder="Enter Your Mobile Number"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1">E-mail</label>
                <input
                  type="e-mail"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={inputEvent}
                  placeholder="Enter Your E-mail"
                />
              </div>

              <div className="mb-3">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={inputEvent}
                ></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-primary" type="submit">
                  {" "}
                  Submit
                </button>
              </div>
              <div></div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
