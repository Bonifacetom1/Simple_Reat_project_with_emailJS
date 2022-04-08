import React from "react"
import Pricing from "../components/Pricing"
import Navbar from "../components/Navbar"
import Marquee from "../components/Marquee"
import { Card } from "react-bootstrap"

function Products() {
    return(
        <div className="container-fluid">
        <div className="head">
            <h1 className="page-title">GREEN BLOG</h1>
            <p className="title-para">...where the calmness of nature is felt</p>
        </div>
        <Navbar/>
        
        <Pricing/>
        
        <Marquee/>
        </div>
        
    )
}
export default Products