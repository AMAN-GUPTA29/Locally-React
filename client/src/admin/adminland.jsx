import React from "react";
import {Link} from "react-router-dom";
import "./admincss/adminland.css"
import customerimg from './adminimages/customerimg.jpg';
import serviceproviderimg from './adminimages/serviceproviderimg.jpg';
import Piechart  from "./piechart";
import { Barchart } from "./barchart";
import Navbar from './navbar';

export default function AdminLand(){
    return(
        <div className="bg">          
            <Navbar/>
            <div className="welcome mx-5 px-2 mt-3">
                <h1>Welcome</h1>
                <h1 className="mx-5 px-3">Mr.Admin</h1>
            </div>
            <hr />
            <div className="row mb-0">
            <div className="col-7 border rounded-5 m-5 bg-white py-5" > <h1>% of Requested Services</h1> <Barchart /> </div>
            <div className="col-4 border rounded-5 bg-white py-2" > <h1>% of Types of Services</h1> <Piechart /> </div>
            </div>
            <div className="row justify-content-center mb-3 mt-1">
                <div className="content rounded-3 col-5 border my-4 mx-3 p-2 d-flex flex-column bg-white">
                    <header className="ps-3">
                        <h3 className="dailyStatistics">Daily</h3>
                    <h3 className="dailyStatistics ps-2">Statistics</h3>
                    </header>
                    <div className="matter">
                        <p className="">
                            The statistics of the webpage show Link steady increase in usage and user engagement over time. In the past year, the website has seen Link 25% increase in overall traffic, with Link significant portion of new visitors coming from social media channels.
                        </p>
                        <p className="">
                            Users are spending an average of 3 minutes and 30 seconds on the website, indicating Link high level of engagement and interest in the content. The bounce rate has also decreased by 15%, suggesting that users are finding the website's content relevant and engaging.
                        </p>
                    </div>
                </div>
                <div className="content2 col-5 my-4 mx-3 d-flex flex-column justify-content-center border rounded-3 bg-white">
                    <div className="row Statistics rounded-3"><div className="col">Statistics</div> </div>
                    <div className="row buttons">
                        <div className="row m-2">
                            <Link className="col-3 py-4 p-3 me-4 border bg-dark-subtle text-dark fw-bold border rounded-3 text-decoration-none">85 customers</Link>
                            <Link className="col-3 py-4 p-3 me-4 border bg-dark-subtle text-dark fw-bold border rounded-3 text-decoration-none">20 Workers</Link>
                            <Link className="col-3 py-4 p-3 me-4 border bg-dark-subtle text-dark fw-bold border rounded-3 text-decoration-none">3 Types Services</Link>
                        </div>
                        <div className="row m-2 text-center">
                            <Link className="col-3 py-4 p-3 me-4 border bg-dark-subtle text-dark fw-bold border rounded-3 text-decoration-none">53 Visitiors</Link>
                            <Link className="col-3 py-4 p-3 border bg-dark-subtle text-dark fw-bold border rounded-3 text-decoration-none">$23 Earnings</Link>
                        </div>
                    </div>                    
                </div>        
            </div>
            <div className="bg-dark p-3 my-2 mx-5 rounded-3 manage">
                <h2 className="m-2 text-white pb-4">Manage Your Subcribers</h2>
                <div className="row justify-content-center">
                    <Link className="bs-cards text-decoration-none text-black mx-5 mb-3 col-4">
                        <div className="card">
                            <img src={customerimg} className="card-img-top" alt="..." height="300px" width="500px" />
                            <div className="card-body">
                                <h5 className="card-title text-center">CUSTOMERS</h5>
                            </div>
                        </div>
                    </Link>
                    <Link className="bs-cards text-decoration-none text-black mx-5 mb-3 col-4">
                        <div className="card">
                            <img src={serviceproviderimg} className="card-img-top" alt="..." height="300px" width="500px" />
                            <div className="card-body">
                                <h5 className="card-title text-center">Workers</h5>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="d-flex justify-content-center py-5">
      <div className="px-2">
        <a href="abc" className="btn btn-users bg-danger text-white">
          <i className="fas fa-users"></i>
          Users
        </a>
      </div>
      <div className="px-2">
        <a href="abc" className="btn btn-traffic bg-info text-white">
          <i className="fas fa-chart-line"></i>
          Traffic
        </a>
      </div>
      <div className="px-2">
        <a href="abc" className="btn btn-revenue bg-warning text-white">
          <i className="fas fa-dollar-sign"></i>
          Revenue
        </a>
      </div>
      <div className="px-2">
        <a href="abc" className="btn btn-tools bg-success text-white">
          <i className="fas fa-tools"></i>
          Services
        </a>
      </div>
      <div className="px-2">
        <a href="/admin/pastbroadcast" className="btn btn-messages bg-primary text-white">
          <i className="fas fa-envelope"></i>
          Messages
        </a>
      </div>
    </div>
            <h1 className="fs-1 fw-bold text-center border rounded-3 m-5 p-5">Increase New Services To Provide</h1>
            <h1 className="fs-1 fw-bold text-center border rounded-3 m-5 p-5">Add New Terms & Conditions</h1>
        </div>
    );
}