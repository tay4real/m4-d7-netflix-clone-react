import React from "react"
import {Row, Col} from "react-bootstrap"

class Gallery extends React.Component {
  state = {
    movies: [], //array of objects
  }

  componentDidMount = async () => {
    console.log(this.props.saga)
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

          <Row className="my-4 text-center row-cols-1 row-cols-md-2 row-cols-lg-4 row-cols-xl-6">   
            {this.state.movies.map((movie) => (
                <Col key={movie.imdbID}>
                  <img
                    className="d-block w-100"
                    src={movie.Poster}
                    alt={movie.Title}
                  />
                  
                </Col>
              ))}       
          </Row>  
    )
  }
}

export default Gallery