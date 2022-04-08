import React from "react"
import About from "../components/About"
import Navbar from "../components/Navbar"
import Marquee from "../components/Marquee"
import { Card } from "react-bootstrap"

function About_us() {
    return(
        <div className="container-fluid">
        <div className="head">
            <h1 className="page-title">GREEN BLOG</h1>
            <p className="title-para">...where the calmness of nature is felt</p>
        </div>
        <Navbar/>
        <About/>
        
        <Marquee/>
        </div>
        
    )
}
export default About_us