import React from "react";
import './../css/history.css'
import Footer from "../../shay-component/Footer";
import NavPostLog from "../../shay-component/NavPostLog";
import _Historybody from "./_Historybody";

const dummydata =['rakesh','john', 'aman','akansh']
export default () => {
    let i = -1
    const cardArray = dummydata.map((name) => { 
        i += 1
        console.log(name);
        return <_Historybody key={i} message={name} />
    });

    return(
        <div>
            <NavPostLog />
            <header>
            <h2 className="mx-5 text-tertiary">Your History</h2>
        </header>

        <h1>Old Requests</h1>
            <br />
            {cardArray}
            <Footer />
        </div>
    )
}