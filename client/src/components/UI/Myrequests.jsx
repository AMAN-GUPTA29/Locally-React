import React from 'react'
import '../CSS/Myrequests.css';
import Navbar from './Navbar';

const Myrequests = () => {
  return (
    <div>
      <Navbar/>
          <header><h2 className="mx-5 text-tertiary">Service</h2> <h2 className="mx-5 text-info">Requests</h2></header>
    <div className="d-flex flex-column justify-content-center align-items-center mx-5">
        <div className="card col-12 d-flex flex-column justify-content-center m-3 p-4 px-5 border rounded-3">
            <div className="d-flex"><h5>Customer Name :</h5><p className="fs-5">Abhilash</p></div>
            <div className="d-flex"><h5>Customer Email :</h5><p className="fs-5">abhilash@gmail.com </p></div>
            <div className="d-flex"><h5>Requested Service :</h5><p className="fs-5">Furniture</p></div>
            <div className="d-flex"><h5>Price :</h5><p className="fs-5">5000</p></div>
            
            <div className="d-flex buttons">
                <a href="/seller/rejected/ result[i].accepted " className="border p-2 px-5 reject text-decoration-none text-white">Reject</a>
                <a href="/seller/accepted/ !result[i].accepted" className="border p-2 px-5 accept text-decoration-none text-white">accept</a>
                {/* <!-- <a href="" className="col-lg-4 col-md-5 accept"><button className="p-2">Accept</button></a> --> */}
             </div>
             </div>
             </div>
                <div className="d-flex flex-column justify-content-center align-items-center mx-5">
                    <div className="accepted-card col-12 d-flex flex-column justify-content-center m-3 p-4 px-5 border rounded-3">
                        <div className="d-flex"><h5>Customer Name :</h5><p className="fs-5">karthik </p></div>
                        <div className="d-flex"><h5>Customer Email :</h5><p className="fs-5"> karthik@outlook.com </p></div>
                        <div className="d-flex"><h5>Requested Service :</h5><p className="fs-5">Electrician </p></div>
                        <div className="d-flex"><h5>Price :</h5><p className="fs-5">1600 </p></div>
                        
                <div className="d-flex buttons">
                    <a href="/seller/rejected/ result[i].accepted %>/ result[i].id %>" className="after-accepted-reject border p-2 px-5 reject text-decoration-none text-white">Reject</a>
                    <a href="" className="after-accepted-accept border p-2 px-5 ccepted text-decoration-none text-white">accepted</a>
                 </div>
                </div>
        </div>
        
        <h1 className="m-3 No Requests From any User">Empty</h1>
     
    </div>
  )
}

export default Myrequests