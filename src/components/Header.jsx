import React from "react"
import { useState } from "react";

import { Carousel } from "react-bootstrap"
import "../netflix.css"
import slide1 from "../assets/carousel/slide1.jpg"
import slide2 from "../assets/carousel/slide2.jpg"
import slide3 from "../assets/carousel/slide3.jpg"


const Header = () => {
  
    return (

        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slide1}
      alt="First slide"
    />
   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slide2}
      alt="Third slide"
    />

   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slide3}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
    )

}

export default Header
