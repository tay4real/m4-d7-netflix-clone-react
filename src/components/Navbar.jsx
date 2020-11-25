import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, withRouter } from 'react-router-dom'


import "../styles.css"
import Logo from "../assets/netflix-logo-png-2562.png"
import SearchBar from "./SearchBar"



class NavBar extends React.Component {
  render() {
    return (
   
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
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
            
          </Nav>
          <SearchBar
            onKeyDown={this.props.onKeyDown}
            onChange={this.props.onChange}
          />
          
        </Navbar.Collapse>
      </Navbar>
    
    )
  }
}
export default withRouter(NavBar); 