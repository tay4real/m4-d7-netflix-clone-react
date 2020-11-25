import React from 'react'
import { Alert, Button, Col, Form, Row, Spinner } from 'react-bootstrap'

class AddComment extends React.Component {
    state = {
        comments: {
            comment: '',
            rate: '',
            elementId: 'tt1756545',
        },
        show: false,
        errMessage: '',
        loading: false
    }

    handleClose = () =>  this.setState({ show: false })
    handleShow = () => this.setState({ show: true })
  
    updateCommentsField = (e) => {
        let comments = { ...this.state.comments } // creating a copy of the current state
        let currentId = e.currentTarget.id // 'name', 'phone', etc.

        if (currentId === 'smoking') {
            reservation[currentId] = e.currentTarget.checked
        } else {
            reservation[currentId] = e.currentTarget.value // e.currentTarget.value is the keystroke
        }
        
        this.setState({ reservation: reservation })
    }

    addComments = async (e) => {
        e.preventDefault();
        this.setState({ loading: true })
        try {
            let response = await fetch('https://striveschool-api.herokuapp.com/api/comments',
                {
                    method: 'POST',
                    body: JSON.stringify(this.state.comments),
                    headers: new Headers({
                        "Content-Type": "application/json",
                        Authorization:
                        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFiY2M5NDRiY2RlMTAwMTc2MTZhOTYiLCJpYXQiOjE2MDUwOTQ1NDksImV4cCI6MTYwNjMwNDE0OX0.JMToVdUvDxcKoie5yISpJXvFS_X7OxsS8cbw33i1oV0",
                    })
                })
            if (response.ok) {
                alert('Comment Added!')
                this.setState({
                    comments: {
                        comment: '',
                        rate: '',
                        elementId: 'tt1756545',
                    },
                    errMessage: '',
                    loading: false,
                })
            } else {
                console.log('an error occurred')
                let error = await response.json()
                this.setState({
                    errMessage: error.message,
                    loading: false,
                })
            }
        } catch (e) {
            console.log(e) // Error
            this.setState({
                errMessage: e.message,
                loading: false,
            })
        }
    }

    render() {
        return (
            <Modal show={this.state.show} onHide={this.handleClose}>
                {
                    this.state.errMessage && (
                        <Alert variant="danger">
                            We encountered a problem with your request
                            {this.state.errMessage}
                        </Alert>
                    )
                }
                {
                    this.state.loading && (
                        <div className="d-flex justify-content-center my-5">
                            Reserving your table, please wait
                            <div className="ml-2">
                                <Spinner animation="border" variant="success" />
                            </div>
                        </div>
                    )
                }
                  
        <Modal.Header closeButton>
          <Modal.Title>Add Comments</Modal.Title>
        </Modal.Header>
        <Form className="w-100 mb-5" onSubmit={this.addComments}>
            <Modal.Body>
            <Row>
                        <Col md={9}>
                            <Form.Group>
                                <Form.Label htmlFor="comment">Comment</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="comment"
                                    id="comment"
                                    placeholder="Your Comment"
                                    value={this.state.comments.comment}
                                    onChange={this.updateCommentsField}
                                    required
                                />
                            </Form.Group>
                        </Col>
                        <Col md={3}>
                            <Form.Group>
                                <Form.Label htmlFor="rate">
                                    Rate Movie
                            </Form.Label>
                                <Form.Control
                                    as="select"
                                    name="rate"
                                    id="rate"
                                    value={this.state.comments.rate}
                                    onChange={this.updateCommentsField}
                                >
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                   
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
            </Modal.Body>
            <Modal.Footer>
            
            <Button variant="primary" onClick={this.handleClose}>
                Submit
            </Button>
            </Modal.Footer>
        </Form>
        
      </Modal>
           
        )
    }
}

export default AddComment