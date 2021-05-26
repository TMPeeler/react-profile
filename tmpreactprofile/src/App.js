import React from "react";

import Header from "../src/components/Header"
import Hero from "../src/components/Hero"
import ProjectCard from "../src/components/ProjectCard"
import Footer from "../src/components/Footer"
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 min-vh-100">
                    <Header/>
                    <Hero/>
                    <ProjectCard/>
                    <Footer/>
                </div>
            </div>
        </div>



    )

}

export default App;