import React from 'react'
import { Outlet,Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div>
            <nav>
                <h1>Services App</h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/addservices">Add Services</Link></li>
                </ul>
            </nav>   
            </div> 
    )
}
