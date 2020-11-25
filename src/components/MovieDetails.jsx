import React from 'react'
import { Badge, Card, Col, Container, Row } from 'react-bootstrap'
import {MovieComments} from './MovieComments'


class MovieDetails extends React.Component {
    state = {
        movie: null
    }

    componentDidMount() {
        let movieIdFromTheSearchBar = this.props.match.params.stefano;
        let correctMovieToLoad = allTheMovies.find(movie => movie.id.toString() === movieIdFromTheSearchBar)
        this.setState({
            dish: correctMovieToLoad
        })
    }

    render() {
        return (
            <Container>
                {this.state.movie &&
                    <div>
                        <Row className="my-2">
                            <Col md={3}>
                                <img src={'/' + this.state.movie.image} alt="dish" className="img-fluid" />
                            </Col>
                            <Col md={9}>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>{this.state.movie.name}</Card.Title>
                                        <Card.Subtitle>
                                            <Badge variant="danger">{this.state.movie.label}</Badge>
                                        </Card.Subtitle>
                                        <Card.Text>
                                            {this.state.movie.description}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <MovieComments selectedMovie={this.state.movie} />
                    </div>}
                {!this.state.dish && <h1>LOADING ...</h1>}
            </Container>
        )
    }
}

export default MovieDetails