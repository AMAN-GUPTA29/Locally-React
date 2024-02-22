import React, { useState } from "react";
// import Card from "./_CustomerViewCard";
import CardArray from "./_CardArray";

import { useEffect } from "react";
import logo1 from "./assets/imgs/1.png";
import logo2 from "./assets/imgs/2.png";
import { json } from "react-router-dom";
// import { Navigate } from "react-router-dom"
import { useNavigate } from "react-router-dom";;

const dummyData = [
  {
    id: 1,
    photo: logo1,
    title: "Test 1",
    tag: "Auto",
    description: "Auto driver he is",
    charge: 100,
  },
  {
    id: 2,
    photo: logo2,
    title: "Test 2",
    tag: "Prof",
    description: "Professor she is",
  },
];

export default () => {
  const navigator = useNavigate();

  function filter() {
    let palceForm = document.getElementById("form");
    palceForm.classList.toggle("hidden");
  }

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function name_fxn() {
      const response = await fetch(
        "http://localhost:8080/api/customerview/data"
      );
      const body = await response.json();
      setTimeout(() => {
        console.log(body)
        if(body.isLogged === false){
          // <Navigate to={'/'} />
          navigator('/')
        }else{
            console.log(body);
            setData(body.data);
            setLoading(false);
        }
      }, 1000);
    }

    name_fxn();
  }, []);

  return (
    <div>
      <div className="container mb-5  ">
        <input
          type="button"
          className="border-dark flex-left px-5 py-2 fltr mb-2"
          onClick={filter}
          value="Filters"
        />
        <br />
        <form className="hidden" id="form" action="/filter">
          <select
            name="filter_details"
            className="form-select "
            aria-label="Default select example"
          >
            <option value="Electric">Electric</option>
            <option value="Auto-Rickshaw">Auto-Rickshaw</option>
          </select>
          <br />
          <input type="submit" />
        </form>
        <br />
        <div className="container-fluid">
          {loading ? <div>Loading...</div> : <CardArray data={data} />}
          {/* <Card photo={logo1} title={"Test"} tag="Auto" description="Driver" charge={100} /> */}
        </div>
        {/* ==============================Buttons============================= */}
        <div
          className="btn-toolbar"
          role="toolbar"
          aria-label="Toolbar with button groups flex"
        >
          <span className="flex-mid">
            <div
              className="btn-group me-2 flex-"
              role="group"
              aria-label="First group"
            >
              <button
                type="button"
                className="btn btn-outline-secondary"
                style={{ minWidth: 100 + "px" }}
              >
                Previous
              </button>
            </div>
            <div
              className="btn-group me-2"
              role="group"
              aria-label="Second group"
            >
              <button
                type="button"
                className="btn btn-secondary"
                style={{ minWidth: 100 + "px" }}
              >
                Next
              </button>
            </div>
          </span>
        </div>

        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
          crossOrigin="anonymous"
        ></script>
      </div>
    </div>
  );
};
