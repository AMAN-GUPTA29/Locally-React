import React, { useState } from "react";
import "./../css/customerrequest.css";
import "./../../shay-component/NavPostLog";
import "./../../shay-component/Footer";
import Areq from "./_Acceptedreq";
import Preq from "./Pendingreq";
import NavPostLog from "./../../shay-component/NavPostLog";
import Footer from "./../../shay-component/Footer";
import { useEffect } from "react";
import { useSelector } from "react-redux";
// useEffect(() => {

// }, [])

// const dataaa=["1","2","3"]
// const dataaa1=["hi","bye","aye"]
// const data = [
//   {
//     id: 1,
//     title: "hi",
//     accepted: true,
//   },
//   {
//     id: 2,
//     title: "hi1",
//     accepted: false,
//   },
//   {
//     id: 3,
//     title: "hi2",
//     accepted: false,
//   },
//   {
//     id: 4,
//     title: "hi3",
//     accepted: true,
//   },
// ];
const Customerrequest = () => {
  //   let iter = -1;
  // const /
  // const cardArray = dataaa.map((msg) => {
  //     iter += 1
  //     return <Message key={iter} message={msg} />
  // });
  // let iter1=-1
  // const cardArray1 = dataaa1.map((msg) => {
  //     iter1 += 1
  //     return <Message key={iter1} message={msg} />
  // });

  //   const dataHTML = data.map((obj) => {
  //     // if (obj.accepted) {
  //     //     return 1
  //     // }
  //     // else{
  //     //     return 2
  //     // }
  //     // const comp1 = <h1>comp1</h1>;
  //     // const comp2 = <h2>Comp2</h2>
  //     return obj.accepted ? (
  //       <Areq id={obj.id} title={obj.title} />
  //     ) : (
  //       <Preq id={obj.id} title={obj.title} />
  //     );
  //   });

  // let iter2 = -1;
  // const
  const data = useSelector((state) => state.servicerequest);
  console.log(data);
  return (
    <div>
      <NavPostLog />
      <header>
        <h2 className="mx-5 text-tertiary">Service</h2>
        <h2 className="mx-5 text-info">Requests</h2>
      </header>
      <br />
      {/* {dataHTML} */}
      {data.map((obj, index) => {
        if (obj.accepted) {
          return (
            <div key={index}>
              <h1>Accepted requests</h1>
              <div className="flex flex-col justify-center items-center mx-5">
                <div className="card col-12 flex flex-col align-middle items-center justify-center m-3 p-4 px-5 border rounded-3">
                  <div className="flex text-white">
                    <h5>Seller Name :</h5>
                    <p className="fs-5">{obj.naam}</p>
                  </div>
                  <div className="flex text-white">
                    <h5>id:</h5>
                    <p className="fs-5">{obj.type}</p>
                  </div>
                  <div className="flex text-white">
                    <h5>Requested Service :</h5>
                    <p className="fs-5">{obj.money}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        } else {
          //   <Preq id={obj.id} title={obj.title} />;
          return (
            //   <Areq id={obj.id} title={obj.title} />;
            <div className="text-white" key={index}>
              <h1>Pending Requests</h1>
              <div className="flex text-white flex-col justify-center items-center mx-5">
                <div className="card col-12 flex flex-col justify-center m-3 p-4 px-5 border rounded-3">
                  <div className="flex flex-row align-middle justify-center items-center">
                    <h5 className="text-white">Seller Name :</h5>
                    <p className="fs-5 text-white">{obj.naam}</p>
                  </div>
                  <div className="flex flex-row align-middle justify-center items-center">
                    <h5 className="text-white">id:</h5>
                    <p className="fs-5 text-white mb-0">{obj.type}</p>
                  </div>
                  <div className="flex flex-row align-middle justify-center items-center">
                    <h5 className="text-white">Requested Service :</h5>
                    <p className="fs-5 text-white mb-0">{obj.money}</p>
                  </div>
                  <div>
                    <a className="border p-2 px-5 text-white reject mr-0 text-none text-white">
                      Reject
                    </a>
                  </div>
                  <br /> <br />
                  <div>
                    <a className="border p-2 px-5 reject mr-0 text-none text-white">
                      Completed
                    </a>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <br />
              <br />
            </div>
          );
        }
      })}
      {/* {cardArray} */}
      <Footer />
    </div>
  );
};
export default Customerrequest;
