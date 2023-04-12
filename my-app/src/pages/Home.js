import React, {Component} from 'react';
import '../css/allPage.css';
import '../css/Home.css';

import {Button, Card, CardImg, Container} from "react-bootstrap";
// import CarouselBoxHk from '../Components/CarouselBoxHk.js'
class Home extends Component {
    render() {
        return (
            <Container>
                <div className="container1">
                    <div className="carousel">
                        <div className="carousel__face"/>
                        <div className="carousel__face"/>
                        <div className="carousel__face"/>
                        <div className="carousel__face"/>
                        <div className="carousel__face"/>
                        <div className="carousel__face"/>
                        <div className="carousel__face"/>
                        <div className="carousel__face"/>
                        <div className="carousel__face"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Card className="m-4 text-center" bg="light" border="primary">
                            <Card.Img
                                className="img"
                                variant="top"
                                src="https://www.pngplay.com/wp-content/uploads/12/Anime-Profile-Pictures-Transparent-Free-PNG.png"
                            />
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>
                                    ༼ つ ◕_◕ ༽つ
                                </Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col">
                        <Card className="m-4 text-center" bg="light">
                            <Card.Img
                                className="img"
                                variant="top"
                                src="https://cdn.vox-cdn.com/thumbor/Ndb49Uk3hjiquS041NDD0tPDPAs=/0x169:1423x914/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/7342855/microsoftteams.0.jpg"
                            />
                            <Card.Body>
                                <Card.Title>Naturalists</Card.Title>
                                <Card.Text>
                                    ༼ つ ◕_◕ ༽つ
                                </Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col">
                        <Card className="m-4 text-center" bg="light">
                            <Card.Img
                                className="img"
                                variant="top"
                                src="https://www.kv.by/sites/default/files/pictures/userpictures/2019/11/29/2359/foto6_1.jpg"
                            />
                            <Card.Body>
                                <Card.Title>Marketers</Card.Title>
                                <Card.Text>
                                    ༼ つ ◕_◕ ༽つ
                                </Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </Container>
        );
    }
}

export default Home;