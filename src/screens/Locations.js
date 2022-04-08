import React from "react"
import LocationsNG from "../components/LocationsNG"
import Navbar from "../components/Navbar"
import Marquee from "../components/Marquee"
import { Card } from "react-bootstrap"

function Locations() {
    return(
        <div className="container-fluid">
        <div className="head">
            <h1 className="page-title">GREEN BLOG</h1>
            <p className="title-para">...where the calmness of nature is felt</p>
        </div>
        <Navbar/>
       
            <LocationsNG/>
        
        
        <Marquee/>
        </div>
        
    )
}
export default Locations