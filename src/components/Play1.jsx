import React from "react"
import ReactPlayer from "react-player"
import { ListGroup, Card } from "react-bootstrap";

function Play1() {
    const stylefb = {color:"#4267B2"}
    const styleTwitter = {color:"#1DA1F2"}
    const styleInsta = {color:"#f5c542"}
    return (
        <div className="">
            <div className="vid-container">
      <div className="player row" >

  <div className="col col-lg-1 col-md-1 col-sm-1 col-xs-2">
  <div className="margin-soc" variant=""><i style={stylefb} class="fab fa-facebook fa-1x"></i></div>
  <div className="margin-soc" variant=""><i style={styleTwitter} class="fab fa-twitter fa-1x"></i></div>
  <div className="margin-soc" variant=""><i style={styleInsta} class="fab fa-instagram fa-1x"></i></div>
</div>

  <div className="no-borders col col-lg-11 col-md-11 col-sm-11 col-xs-10">
        <ReactPlayer className=""
                url="https://www.youtube.com/watch?v=ug50zmP9I7s"
                />
  </div>
  
  
  
</div>

<div className="container">
<h4 className="prod-desc-title">How we did It</h4>
    <p className="prod-desc-p">
    Hi i'm Tom, I develop web apps with Node.js, Ejs, react.js, HTML, CSS and javascript. I love writing backend codes and I love handling the basic functionalities of a site when working with a team. I am easy going and transparent in my work. I put the happiness of my clients first in making sure I deliver my job on time. Hi i'm Tom, I develop web apps with Node.js, Ejs, react.js, HTML, CSS and javascript. I love writing backend codes and I love handling the basic functionalities of a site when working with a team. I am easy going and transparent in my work. I put the happiness of my clients first in making sure I deliver my job on time.
    Hi i'm Tom, I develop web apps with Node.js, Ejs, react.js, HTML, CSS and javascript. I love writing backend codes and I love handling the basic functionalities of a site when working with a team. I am easy going and transparent in my work. I put the happiness of my clients first in making sure I deliver my job on time. Hi i'm Tom, I develop web apps with Node.js, Ejs, react.js, HTML, CSS and javascript. I love writing backend codes and I love handling the basic functionalities of a site when working with a team. I am easy going and transparent in my work. I put the happiness of my clients first in making sure I deliver my job on time.
    </p>
</div>
        
      </div>
        </div>
      
    )
  }
  
  export default Play1
  