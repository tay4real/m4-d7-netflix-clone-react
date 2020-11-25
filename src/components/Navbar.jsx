import React from "react"


import "../netflix.css"
import Logo from "../assets/netflix-logo-png-2562.png"
import SearchBar from "./SearchBar"

import { Navbar } from "react-bootstrap" //why do I need to import all of them?

class NetflixNavBar extends React.Component {
  render() {
    return (
      <Navbar
        expand="lg"
        text="light"
        className="justify-content-between text-light"
        style={{
          backgroundColor: "transparent",
          zIndex: "4",
          position: "sticky",
          top: 0,
        }}
      >
        <div className="d-flex" style={{ margin: 1 + "vw" }}>
          <svg
            width="1.8vw"
            height="3vh"
            viewBox="0 0 16 16"
            className="bi bi-list"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
          <span
            className="badge badge-danger badge-pill d-flex justify-content-center"
            style={{
              position: " absolute",
              top: 2.5 + "vh",
              fontSize: 0.6 + "vw",
              marginLeft: 1.3 + "vw",
            }}
          >
            1
          </span>

          <img
            src={Logo}
            style={{ width: 5.5 + "vw", marginLeft: 1 + "vw" }}
            alt="NetflixLogo"
          />
        </div>
        <div
          className="d-flex"
          style={{
            margin: 1 + "vw" + 0.4 + "vw",
          }}
        >
          {" "}
          <svg
            width="1.5em"
            height="1.5em"
            viewBox="0 0 16 16"
            style={{ marginRight: 1 + "vw", marginTop: 0.5 + "vw" }}
            className="bi bi-search"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
            />
            <path
              fillRule="evenodd"
              d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
            />
          </svg>
          <SearchBar
            onKeyDown={this.props.onKeyDown}
            onChange={this.props.onChange}
          />
        </div>
      </Navbar>
    )
  }
}
export default NetflixNavBar