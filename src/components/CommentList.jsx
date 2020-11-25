import React from "react"

import "../netflix.css"
import { Modal, Button, Form } from "react-bootstrap"

function CommentList(props) {
  let state = {
    comment: null,
    rate: null,
    elementId: "tt1756545",
  }
  const updateCommentField = (e) => {
    let comment = { ...state.comment }
    let currentId = e.currentTarget.id
    comment[currentId] = e.currentTarget.value
    state = {
      comment: comment,
      rate: "0",
      elementId: "tt1756545",
    }
    console.log(state)
  }
  const addComment = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          body: JSON.stringify(state),
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2ZDI4MTk4MzViMDAwMTc1ODRmYjYiLCJpYXQiOjE2MDU4MTY5NjEsImV4cCI6MTYwNzAyNjU2MX0.GqpTeLvk8Z8aMgxS8ZmTrQLFMDzjQ1FT-s1F39SH75I",
              "Content-Type": "application/json"
            },
        }
      )
      let comments = response.json()
      
    } catch (error) {
      console.log(error)
    }
    try {
      let commlist = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2ZDI4MTk4MzViMDAwMTc1ODRmYjYiLCJpYXQiOjE2MDU4MTY5NjEsImV4cCI6MTYwNzAyNjU2MX0.GqpTeLvk8Z8aMgxS8ZmTrQLFMDzjQ1FT-s1F39SH75I",
            },
        }
      )
      let list = commlist.json()
      console.log(list)
      
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <Modal
      size={props.size}
      show={props.show}
      onHide={props.onHide}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>Ops, no comments yet :)</Modal.Header>
      <Modal.Body>
        <Form.Group>
          <Form.Label>Comment</Form.Label>
          <Form.Control
            as="textarea"
            className="w-100"
            label="Check me out"
            rows={7}
            onChange={updateCommentField}
            placeholder="Type your comment"
            id="comment"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Rating:</Form.Label>
          <Form.Control
            as="select"
            name="rating"
            id="rating"
            value={state.rating}
            onChange={updateCommentField}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </Form.Control>
        </Form.Group>

        <Button variant="primary" type="button" onClick={addComment()}>
          Add Comment
        </Button>
      </Modal.Body>
    </Modal>
  )
}
export default CommentList