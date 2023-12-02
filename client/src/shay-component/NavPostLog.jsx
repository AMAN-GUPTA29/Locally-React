import React from "react";
import logo from './assets/imgs/logo.png'
import './assets/Navbar.css'

export default () => {
    return (
        <header class="headeer">
            <a href="/customerView">
                <img class="loggo" alt="Startup logo" src={logo} />
            </a>

            <nav class="maiin-naav">
                <ul class="maiin-naav-lisst">
                    <li><a class="maiin-naav-linnk" href="/chat" target="_blank">Chat</a></li>
                    <li><a class="maiin-naav-linnk" href="/customerrequest">MyRequest</a></li>
                    <li><a class="maiin-naav-linnk" href="/history">History</a></li>
                    <li><a class="maiin-naav-linnk" href="/broadcast">Notifications</a></li>
                    <li><a class="maiin-naav-linnk" href="/logout">Logout</a></li>
                    <li><a class="maiin-naav-linnk naav-ctta" href="/profile">Profile</a></li>
                </ul>
            </nav>
        </header>
    )
}