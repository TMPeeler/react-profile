import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../src/components/Header"
import Hero from "../src/components/Hero"
import ProjectCard from "../src/components/ProjectCard"
import Footer from "../src/components/Footer"
import Home from "../src/pages/Home"
import Contact from "../src/pages/Contact"
import Work from "../src/pages/Work"
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 min-vh-100">
                    <Header />
                    <Hero />

                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/home" component={Home}/>
                        <Route exact path="/work" component={Work}/>
                        <Route exact path="/contact" component={Contact}/>
                    </Switch>
                    <Footer />
                </div>
            </div>
        </div>

        </Router>

    )

}

export default App;