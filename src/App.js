import React from 'react';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Switch, Route} from 
"react-router-dom"
import './App.css';
import Home from "./components/pages/Home";
import Skills from "./components/pages/Skills";
import AboutMe from "./components/pages/AboutMe";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/skills" component={Skills} />
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/aboutme" component={Contact} />
        <Route path="/projects" component={Projects} />
        <Route path="/home" component={Home} />
      </Switch>
      <Footer />
      </Router>
    </>
  );
}

export default App;
