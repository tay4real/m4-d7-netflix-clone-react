import React from "react"
import {Carousel, Col} from "react-bootstrap"

class Gallery extends React.Component {
  state = {
    movies: [], //array of objects
  }

  componentDidMount = async () => {
    let query = this.props.saga
    await this.getMovies(query)
    console.log(this.state.movies)
  }

  getMovies = async (query) => {
    //fetch from server all movie objects of a saga or genre
    //set the constructor according to the resul

    let response = await fetch(
      `http://www.omdbapi.com/?apikey=a0871843&s=${query}`
    )

    if (response.ok) {
      let result = await response.json() //search object
      console.log(result)
      this.setState({movies: result.Search})
    } else {
      alert("something went wrong")
    }
  }

  render() {
    return (
        <Col xs="4" >
            <Carousel >
            
              {this.state.movies.map((movie) => (
                <Carousel.Item key={movie.imdbID}>
                  <img
                    className="d-block w-100"
                    style={{objectFit:"cover", width: 20 + "vw", height: 35 + "vw", objectPosition: "top"}}
                    src={movie.Poster}
                    alt="First slide"
                  />
                  <Carousel.Caption style={{width: 20 + "vw",
background: "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 80%)", position: "relative", left: "0", bottom: 6 + "vw"}}>
                    <h3 style={{overflow: "hidden", whiteSpace:"nowrap", textOverflow:"ellipsis"}}>{movie.Title}</h3>
                    <p>{movie.Year} </p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
    )
  }
}

export default Gallery