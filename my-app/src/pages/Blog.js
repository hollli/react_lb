import React, {Component} from 'react';
import '../css/allPage.css';
import '../css/Blog.css';
import {Col} from "react-bootstrap";
import {Button, Card, CardImg, Container, ListGroup} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Blog extends Component {
    render() {
        return (
            <div className="container">
                <div className="con1">
                    <div className="d-flex align-items-center me-5">
                        <div className="flex-shrink-0">
                            <img
                                width={150}
                                height={150}
                                className="mr-3"
                                src="https://images.wallpaperscraft.com/image/single/deer_mountains_art_142079_3840x2160.jpg"
                                alt="photo"/>
                        </div>
                        <div className="flex-grow-1 ms-3">
                            <h5>Blog post</h5>
                            <p>
                                Lorem
                            </p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center me-5">
                        <div className="flex-shrink-0">
                            <img
                                width={150}
                                height={150}
                                className="mr-3"
                                src="https://images.wallpaperscraft.com/image/single/craft_art_bad_weather_97072_1920x1080.jpg"
                                alt="photo"/>
                        </div>
                        <div className="flex-grow-1 ms-3">
                            <h5>Blog post</h5>
                            <p>
                                Lorem
                            </p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center me-5">
                        <div className="flex-shrink-0">
                            <img
                                width={150}
                                height={150}
                                className="mr-3"
                                src="https://images.wallpaperscraft.com/image/single/tree_shine_art_137305_3840x2160.jpg"
                                alt="photo"/>
                        </div>
                        <div className="flex-grow-1 ms-3">
                            <h5>Blog post</h5>
                            <p>
                                Lorem
                            </p>

                        </div>

                    </div>
                </div>
                <div className="con2">
                    <Col md="3"><h5 className="text-center mt-5">Categories</h5> <Card> <ListGroup variant="flush">
                        <ListGroup.Item>category 1</ListGroup.Item>
                        <ListGroup.Item>category 2</ListGroup.Item>
                        <ListGroup.Item>category 3</ListGroup.Item>
                        <ListGroup.Item>category 4</ListGroup.Item>
                        <ListGroup.Item>category 5</ListGroup.Item>
                    </ListGroup>
                    </Card>
                    </Col>
                    <Card className="mt-3 bg-light">
                        <Card.Body>
                            <Card.Title>Slide widget</Card.Title>
                            <Card.Text> Lorem </Card.Text>
                        </Card.Body> </Card>
                </div>
            </div>
        );
    }
}

export default Blog;