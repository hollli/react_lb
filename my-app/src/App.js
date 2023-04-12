import logo from './logo.svg';
import wife from './img/linkmainpage.png';
import './css/App.css';
import Button from 'react-bootstrap/Button';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Blog from "./pages/Blog";
import React from "react";
// import './css/App.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

    return (
        <div className="App">
            <header className="App-header">

                <a href="http://localhost:3000/">
                    <img src={wife} className="wife" alt="logo"/>
                </a>
                <div className="links">
                    <a href="http://localhost:3000/About">
                        <Button className="button" id="idAbout">About</Button>
                    </a>
                    <a href="http://localhost:3000/Contacts">
                        <Button className="button">Contacts</Button>
                    </a>
                    <a href="http://localhost:3000/Blog">
                        <Button className="button">Blog</Button>
                    </a>
                </div>
                <div className="panel">
                    <h1> Ni hao bracho!</h1>
                    <div className="btn-group">
                        <input variant="outline-info" placeholder="Search" type="text" className="App "/>
                        <Button className="button">Search</Button>

                    </div>
                </div>
            </header>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                    <Route path="/blog" element={<Blog/>}/>
                </Routes>
            </Router>
        </div>

    );
}

export default App;