import React, {useState} from "react";
import './../css/customerrequest.css'
import './../../shay-component/NavPostLog'
import './../../shay-component/Footer'
import Areq from './_Acceptedreq'
import Preq from './Pendingreq'
import NavPostLog from './../../shay-component/NavPostLog'
import Footer from './../../shay-component/Footer'


// const dataaa=["1","2","3"]
// const dataaa1=["hi","bye","aye"]
const data = [
    {
        id: 1,
        title: 'hi',
        accepted: true
    },
    {
        id: 2,
        title: 'hi1',
        accepted: false
    },
    {
        id: 3,
        title: 'hi2',
        accepted: false
    },
    {
        id: 4,
        title: 'hi3',
        accepted: true
    },
]
export default()=>{
    let iter=-1
    // const cardArray = dataaa.map((msg) => { 
    //     iter += 1
    //     return <Message key={iter} message={msg} />
    // });
    // let iter1=-1
    // const cardArray1 = dataaa1.map((msg) => { 
    //     iter1 += 1
    //     return <Message key={iter1} message={msg} />
    // });

    const dataHTML = data.map((obj) => {
        // if (obj.accepted) {
        //     return 1
        // }
        // else{
        //     return 2
        // }
        // const comp1 = <h1>comp1</h1>;
        // const comp2 = <h2>Comp2</h2>
        return obj.accepted ?  <Areq id={obj.id} title={obj.title} /> : <Preq id={obj.id} title={obj.title} /> ;
    })
    
    // let iter2 = -1;
    // const
    

    return(
    <div>
        <NavPostLog />
        <header>
            <h2 class="mx-5 text-tertiary">Service</h2>
            <h2 class="mx-5 text-info">Requests</h2>
        </header>
            <br />
            {dataHTML}
            {/* {cardArray} */}
            <Footer />

    </div>)
}