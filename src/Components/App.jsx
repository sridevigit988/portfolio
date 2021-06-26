import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
import Contact from './Contacts/Contacts';
import NavBar from './NavBar/NavBar';
import GoHome from './GoHome/GoHome';
import './App.css';


const App = () => {
    return (
        <div>
<HashRouter>
<div>
    <NavBar/>
    <Route path="/" exact  component={Home}></Route>
    <Route path="/about" component={About}></Route>
    <Route path="/projects" component={Projects}></Route>
    <Route path="/skills" component={Skills}></Route>
    <Route path="/contact" component={Contact}></Route>
    <GoHome />
</div>
   
</HashRouter>

        </div>
        );
    };
    
    export default App;