import React from "react";
import {Link , Outlet} from "react-router-dom";
import "./admincss/navbar.css"

export default function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top py-3 rounded-bottom-5">
    <div className="container-fluid">
      <a className="navbar-brand ps-4 text-warning locally" href="/">LOCALLY</a>
      <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#expandme" >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="expandme">
          <div className="navbar-nav">
              <Link className="nav-link active mx-4" to="/adminland">Home</Link>
              <Link className="nav-link active mx-4" to="/admincustomer">Customers</Link>
              <Link className="nav-link active mx-4" to="/adminworker">Workers</Link>
              <Link className="nav-link active mx-4" to="/adminbroadcast">Broadcast</Link>
              <Link className="nav-link active mx-4" to="">Past Broadcast</Link>
              <Link className="nav-link border rounded-3 me-3 active position-absolute end-0 me-5" to="">Logout</Link>
              <Outlet/>
            </div>
        </div>
    </div>
</nav>
    );
}
