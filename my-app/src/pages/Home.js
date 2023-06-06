import React, {Component, useContext} from 'react';
import '../css/allPage.css';
import '../css/Home.css';
import {LangContext} from "../Components/LangContext";
import {Button, Card, CardImg, Container} from "react-bootstrap";

const Home = () => {
    const context = useContext(LangContext);
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
                    <Card className="m-4 text-center" bg="light">
                        <Card.Img
                            className="img"
                            variant="top"
                            src="https://www.pngplay.com/wp-content/uploads/12/Anime-Profile-Pictures-Transparent-Free-PNG.png"
                        />
                        <Card.Body>
                            <Card.Title>{context.language === "eu" ? "Developers" : "Розробники"}</Card.Title>
                            <Card.Text>
                                {context.language === "eu" ? "༼ つ ◕_◕ ༽つ" : "(^◕ᴥ◕^) "}
                            </Card.Text>
                            <Button href="http://localhost:3000/About#Developers"
                                    variant="primary">{context.language === "eu" ? "About Developers" : "Про розробників"}</Button>
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
                            <Card.Title>{context.language === "eu" ? "Naturalists" : "Натуралісти"}</Card.Title>
                            <Card.Text>
                                {context.language === "eu" ? "༼ つ ◕_◕ ༽つ" : "(^◕ᴥ◕^) "}
                            </Card.Text>
                            <Button href="http://localhost:3000/About#Naturalists"
                                    variant="primary">{context.language === "eu" ? "About Naturalists" : "Про натуралістів"}</Button>
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
                            <Card.Title>{context.language === "eu" ? "Marketers" : "Маркетологи"}</Card.Title>
                            <Card.Text>
                                {context.language === "eu" ? "༼ つ ◕_◕ ༽つ" : "(^◕ᴥ◕^) "}
                            </Card.Text>
                            <Button href="http://localhost:3000/About#Marketers"
                                    variant="primary">{context.language === "eu" ? "About Marketers" : "Про маркетологів"}</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </Container>
    );
}
export default Home;