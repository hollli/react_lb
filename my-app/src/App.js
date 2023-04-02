import logo from './logo.svg';
import './App.css';
import {Button} from "react-bootstrap";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Blog from "./pages/Blog";
import React from "react";
import Header from "./Header";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <div> <h1> Ni hao bracho!</h1>
              <div className="btn-group">
                  <a href="http://localhost:3000/About">
                      <Button className="button">About</Button>
                  </a>
                  <a href="http://localhost:3000/Contacts" >
                      <Button className="button">Contacts</Button>
                  </a>
                  <a href="http://localhost:3000/Blog" >
                      <Button className="button">Blog</Button>
                  </a>
            </div>
          </div>
      </header>
        <Router>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contacts" element={<Contacts/>}/>
            <Route path="/blog" element={<Blog/>}/>
        </Routes>
    </Router>
    </div>

  );
}

export default App;
