import React from "react"
import { useState } from "react";

import { Col, Modal, Row } from "react-bootstrap"
import "../netflix.css"
import video from "../assets/lietomecut.mp4"
import LogoShow from "../assets/lietome.png"
import Poster from "../assets/endeposter.jpg"
import CommentList from "./CommentList"

const Header = () => {
    const [lgShow, setLgShow] = useState(false);
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true)
    return (


        <div className="d-flex" style={{ position: "absolute", top: 0 + "vh", width: 100 + "vw", height: 95 + "vh", overflow: "hidden" }}>
            <video id="trailer" width="100%" height="auto" style={{ objectFit: "cover", zIndex: 0 }} autoPlay muted className="d-flex">
                <source src={video} type="video/mp4" />
            </video>
            <div className="d-flex" style={{ position: "absolute", top: 11 + "vw", marginLeft: 3 + "vw" }}>
                <img id="logo" alt="" src={LogoShow} style={{ position: "relative", display: "flex", width: 30 + "vw" }} />
                <div style={{ position: "absolute", top: 15 + "vw", width: 15 + "vw" }}>
                    <div className="d-flex justify-content-between" style={{ width: 100 + "vw" }}>
                        <div style={{ position: "absolute", width: 100 + "vw", marginTop: -2 + "vw" }} id="watchNow"
                            className="watchNow d-flex">
                            Stream season 3 now:</div>
                    </div>
                    <button onClick={handleShow} type="button"
                        className="btn btn-netflix d-flex justify-content-center content-align-middle"><svg width="1.5em"
                            height="1.5em" viewBox="0 0 16 16" className="bi bi-play-fill " fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                        </svg><span>Play</span></button>
                    <CommentList show={show} size={"lg"} onHide={() => setShow(false)} />
                    <button onClick={() => setLgShow(true)} className="btn btn-netflix d-flex justify-content-center align-middle" style={{ left: 11 + "vw" }}><svg
                        width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-plus" fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                            d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg><span>More Info</span></button>
                    <Modal
                        size="xl"
                        show={lgShow}
                        onHide={() => setLgShow(false)}
                        aria-labelledby="example-modal-sizes-title-lg"

                    >
                        <Modal.Header closeButton>
                        </Modal.Header>
                        <Modal.Body>
                            <Row>
                                <Col>
                                    <img src={Poster} alt="" className="w-100" style={{ paddingLeft: 4 + "vw", paddingRight: 4 + "vw" }} />

                                    <h3 style={{ zIndex: 4, padding: 4 + "vw", paddingBottom: 0 + "vw" }}> Lie to Me (2009 - 2011)</h3><br />
                                    <hr />
                                    <h6 style={{ zIndex: 4, paddingLeft: 4 + "vw", paddingRight: 4 + "vw" }}>Plot:</h6>
                                    <p style={{ zIndex: 4, paddingLeft: 4 + "vw", paddingRight: 4 + "vw" }}>
                                        Lie to me is an American crime drama television series. It originally ran on the Fox network from January 21, 2009, to January 31, 2011.
                                        In the show, Dr. Cal Lightman (Tim Roth) and his colleagues in The Lightman Group accept assignments from third parties (commonly local and federal law enforcement), and
                                        assist in investigations, reaching the truth through applied psychology: interpreting microexpressions, through the Facial Action Coding System, and body language.
                                        The show is inspired by the work of Paul Ekman, a specialist on facial expressions and a professor emeritus of psychology
                                        at the University of California San Francisco School of Medicine. Ekman has been an advisor to police departments and anti-terrorism groups.
                                        He was a scientific consultant in the production of the series. The lead character of Lie to Me, Cal Lightman, is based on Ekman.
                                    </p>
                                    <hr />
                                    <h6 style={{ zIndex: 4, paddingLeft: 4 + "vw", paddingRight: 4 + "vw" }}>Cast:</h6>
                                    <p style={{ zIndex: 4, paddingLeft: 4 + "vw", paddingRight: 4 + "vw" }}>	Tim Roth, Kelli Williams, Brendan Hines, Monica Raymund, Hayley McFarland, Mekhi Phifer</p>
                                </Col>
                            </Row>
                        </Modal.Body>
                    </Modal>
                    <div style={{ position: "absolute", top: 4 + "vw", width: 200 + "%" }} className="description"><span id="description">
                        Doctor Cal Lightman is a scientist that specializes in body language and facial expressions,
                        putting his knowledge to the service of justice and authorities.
                        He often collaborates with FBI. He is the founder of the Lightman Group, where he is helped by her
                        associate Foster and their collaborators Loker and Torres.
                            </span>

                    </div>
                </div>
            </div>
        </div >

    )

}

export default Header
