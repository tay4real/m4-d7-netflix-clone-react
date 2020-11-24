import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, withRouter } from 'react-router-dom'


import "../styles.css"
import Logo from "../assets/netflix-logo-png-2562.png"
import SearchBar from "./SearchBar"



const NavBar = (props) => {

    
    return (
   
  <Navbar collapseOnSelect expand="md" bg="dark" variant="dark"  >
        <Link to="/">
          <Navbar.Brand>
          <img
            src={Logo}
            style={{ width: 5.5 + "vw", marginLeft: 1 + "vw" }}
            alt="NetflixLogo"
          />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/tvshows">
              <div className={props.location.pathname === '/tvshows' ? 'nav-link active' : 'nav-link'}>TV Shows</div>
            </Link>
            <Link to="/movies">
              <div className={props.location.pathname === '/movies' ? 'nav-link active' : 'nav-link'}>Movies</div>
            </Link>
            <Link to="/recent">
              <div className={props.location.pathname === '/recent' ? 'nav-link active' : 'nav-link'}>Recently Added</div>
            </Link>
            <Link to="/mylist">
              <div className={props.location.pathname === '/mylist' ? 'nav-link active' : 'nav-link'}>My List</div>
            </Link>
          </Nav>
          <SearchBar
            onKeyDown={props.onKeyDown}
            onChange={props.onChange}
          />
          <div className="d-flex my-3 my-md-0">
          <i className="fa fa-search icons mr-3"></i>
          <div id="kids">KIDS</div>
          <i className="fa fa-bell icons mx-3"></i>
          <i className="fa fa-user icons mx-3"></i>
        </div>
          
        </Navbar.Collapse>
      </Navbar>
    )
  
}
export default withRouter(NavBar); 