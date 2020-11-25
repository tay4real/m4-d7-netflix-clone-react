import React from "react"
import {Row, Col, Card} from "react-bootstrap"

const Results = (props) => {
  return (
    
    <Row style={{margin: 2 + "vw"}}>
      {props.results.map((res) => (
        
        <Col xs={2} key={res.imdbID}>
          <img src={res.Poster}  style={{objectFit: "cover", width: 100 + "%", height: "auto", margin : 1 + "vw"}} />
         
            </Col>
     
      ))}
    </Row>
  )
}

export default Results