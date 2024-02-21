import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default () => {
  const navigate = useNavigate();
  const [mail, setMail] = useState();
  const [pass, setPass] = useState();

  const emailHandler = function (event) {
    setMail(event.target.value);
  };

  const passHandler = function (event) {
    setPass(event.target.value);
  };

  const submitHandler = function (event) {
    event.preventDefault();
    const data = {
      email: mail,
      password: pass,
    };
    console.log({ data });
    fetch(`http://localhost:8080/api/customer/login/${mail}/${pass}`)
      .then((res) => res.json())
      .then((json) => {
        const { code, redirect } = json;
        if (code == 200 || code == 201) {
          navigate(redirect);
        } else {
          console.error("SERVER ERROR - Shay");
        }
      });
  };

  return (
    <div className="container">
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={emailHandler}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={passHandler}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
