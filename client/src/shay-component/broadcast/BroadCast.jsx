import React from "react";
import Message from "./_Message";
import NavPostLog from "../NavPostLog";
import Footer from "../Footer";
import Fotterfinal from "../../pages/landingpage/footer";

const dummydata = [
  "festival discounts for sellers",
  "New Broadcast 123",
  "hello",
  "alert ! new services added",
];

export default () => {
  let iter = -1;
  const cardArray = dummydata.map((msg) => {
    iter += 1;
    return <Message key={iter} message={msg} />;
  });

  return (
    <>
      <NavPostLog />
      <br />
      {cardArray}
      <Fotterfinal />
    </>
  );
};
