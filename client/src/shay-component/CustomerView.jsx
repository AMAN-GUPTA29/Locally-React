import React from "react";
import Footer from "./Footer";
import NavPostLog from "./NavPostLog";
import Body from "./_CustomerView";


export default () => {
    return (
        <div>
            <NavPostLog />
            <Body />
            <Footer />
        </div>
    )
}