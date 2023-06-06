import logo from './logo.svg';
import wife from './img/linkmainpage.png';
import './css/App.css';
import Button from 'react-bootstrap/Button';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Form} from "react-bootstrap";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Blog from "./pages/Blog";
import React, {useContext} from "react";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";
import {LangContext} from "./Components/LangContext";

function App() {
    const context = useContext(LangContext);
    return (
        <div className="App">
            <header className="App-header">
                <a href="http://localhost:3000/">
                    <img src={wife} className="wife" alt="logo"/>
                </a>
                <div className="links">
                    <a href="http://localhost:3000/About">
                        <Button className="button"
                                id="idAbout">{context.language === "eu" ? "About" : "Про нас"}</Button>
                    </a>
                    <a href="http://localhost:3000/Contacts">
                        <Button className="button">{context.language === "eu" ? "Contacts" : "Контакти"}</Button>
                    </a>
                    <a href="http://localhost:3000/Blog">
                        <Button className="button">{context.language === "eu" ? "Blog" : "Блог"}</Button>
                    </a>
                    <Header/>
                </div>
                <div className="panel">
                    <h1> Ni hao bracho!</h1>
                    <div className="btn-group">
                        <input variant="outline-info" placeholder={context.language === "eu" ? "Search" : "Пошук"}
                               type="text" className="App "/>
                        <Button className="button">{context.language === "eu" ? "Search" : "Пошук"}</Button>

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