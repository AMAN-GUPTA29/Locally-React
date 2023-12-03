import React from 'react'
import 'bootstrap'
import { Link } from 'react-router-dom'
import '../CSS/Navbar.css'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand text-warning" to="/"><b>Locally</b></Link>
        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#expandme" >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="expandme">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-link active mx-4"><Link to="/seller/sellerView" >Home</Link></li>
            <li className="nav-link active mx-4"><Link to="/seller/services" >Your Services</Link></li>
            <li className="nav-link active mx-4"><Link to="/chat" >Chat</Link></li>
            <li className="nav-link active mx-4"><Link to="/seller/profile" >Profile</Link></li>
            <li className="nav-link active mx-4"><Link to="/seller/request" >Requests</Link></li>
            <li className="nav-link active mx-4"><Link to="/seller/broadcast" >Notifications</Link></li>
            <li className="nav-lisnk active mx-4"><Link to="/logout" >Logout</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
