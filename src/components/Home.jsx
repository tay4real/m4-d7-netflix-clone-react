import React, { Component } from "react";

import { Container, Row, Col, Carousel } from "react-bootstrap";
import Header from "./Header";
import Gallery from "./Gallery";
import Results from "./Results"



class Home extends Component {
    state = {
        movies: [],
        
      }
    
      
      fetchMovies = async (query) => {
        let response = await fetch(
          `http://www.omdbapi.com/?apikey=a0871843&s=${query}`
        )
        let result = await response.json()
        console.log(result)
        let res = await result
        console.log(res)
        this.setState({movies: res.Search})
      }
    
      onChange =  (e) => {
        if(e.target.value.length >= 3){
          console.log(e.target.value) 
        }
      }
    
    
      onKeyDown =  (e) => {
        // when someone pressed any button
        if(e.target.value.length >= 3 && e.key === "Enter"){
          e.preventDefault()
          this.fetchMovies(e.target.value)
        }
      }
      
  render() {
    console.log(this.state.movies)
    return (
    <> 
        <Header />
      <Container>
      
      <Row className="mt-5">
      <h4>Trending now</h4>
        <Carousel className="m-0 p-0">  
          <Carousel.Item>
            <Gallery saga="Harry Potter" />
          </Carousel.Item>
          <Carousel.Item>
            <Gallery saga="Lord of the Rings" />
          </Carousel.Item>
          <Carousel.Item>
            <Gallery saga="Star Wars" />
          </Carousel.Item>
        </Carousel>
      </Row>
          
        <Row>
            <Col>
            {
            this.state.movies.length > 0 && 
            <h2 >Search Results:</h2> }
            <Results results = {this.state.movies }/>
            </Col>
        </Row>
      </Container>
    </>
    );
  }
}

export default Home;
