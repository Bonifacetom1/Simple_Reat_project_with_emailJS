import React from "react";
import NavBar from "../components/Navbar"
import Group1 from "../components/Group1";
import Play1 from "../components/Play1";
import Story from "../components/Story";
import Marquee from "../components/Marquee";

function welcome() {
    return(
        <div className="container-fluid">
        <div className="head">
            <h1 className="page-title">GREEN BLOG</h1>
            <p className="title-para">...where the calmness of nature is felt</p>
        </div>
        <NavBar/>
        <Group1/>
        <Play1/>
        <Story/>
        <Marquee/>
        </div>
        
    )
}
export default welcome