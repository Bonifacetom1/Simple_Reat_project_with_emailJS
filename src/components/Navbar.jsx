import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink,Link } from "react-router-dom";
import React, {useState} from "react";
function NavBar() {

  const style = { margin: "0" };
  const rightNavLink = { margin: "0px 4% 0px auto", background:"rgb(201, 233, 223)" };


    const [bgcolor, setBgcolor] = useState('');
    const [textcolor, setTextcolor] = useState('');    
    
    function handleHighlightTab() {
        setBgcolor('green');
        setTextcolor('black');
    }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="#">Navbar</a> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            {/* <ul className="navbar-nav" style={rightNavLink}>
              <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/Products">Our Categories</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/Locations">Our Locations</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/About_us">About Us</Link>
              </li>
              
            </ul> */}

            <ul className="navbar-nav bg-light" style={rightNavLink}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "link-active" : "link")}
      >
        Home
      </NavLink>
      <NavLink
        to="/Products"
        className={({ isActive }) => (isActive ? "link-active" : "link")}
      >
        Our Categories
      </NavLink>
      <NavLink
        to="/Locations"
        className={({ isActive }) => (isActive ? "link-active" : "link")}
      >
        Locations
      </NavLink>
      <NavLink
        to="/About_us"
        className={({ isActive }) => (isActive ? "link-active" : "link")}
      >
        About Us
      </NavLink>
    </ul>
          </div>
        </div>
      </nav>
    </div>
// {/* <li className="nav-item">
//           <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
//         </li> */}
    // <nav>
    // <ul className="navbar-nav" style={rightNavLink}>
    //   <NavLink
    //     to="/"
    //     className={({ isActive }) => (isActive ? "link-active" : "link")}
    //   >
    //     Home
    //   </NavLink>
    //   <NavLink
    //     to="/Products"
    //     className={({ isActive }) => (isActive ? "link-active" : "link")}
    //   >
    //     About
    //   </NavLink>
    //   <NavLink
    //     to="/Locations"
    //     className={({ isActive }) => (isActive ? "link-active" : "link")}
    //   >
    //     Contact
    //   </NavLink>
    // </ul>
      
    // </nav>
  );
}
export default NavBar;
