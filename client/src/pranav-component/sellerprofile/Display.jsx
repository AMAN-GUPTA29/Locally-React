import React from "react";
import About from './_About'
import Footer from '../../shay-component/Footer'
import NavPostLog from "../../shay-component/NavPostLog";
import Header from "./_Header"
import Contact from "./_Contact"
import Service from "./_Service";
import './../css/display.css'
import './../css/steller.css'
import './../css/footer-pranav.css'
import './../css/themify-icons.css'

export default () => {
    return (
        <div>
            <NavPostLog />
            <Header url_id="1" name="Anmol" tag="Auto" like="2" dislike="11" />
            
            <About name="Anmol" tag="plumber" description="Very good plumber has had an experience of plumbing annd other minor jobs involved inn it since 15 years , has fixed many water spoilts and destroyed many households."/>
            <Service/>
            <Contact source="https://snazzymaps.com/embed/61257"/>
            <Footer />
        </div>
    )
}