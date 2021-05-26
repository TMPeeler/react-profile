import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        
        <div className="d-flex justify-content-center">

                    <nav className="navbar navbar-expand-lg">
                   
                        <Link to="/" className="nav-link active fs-2 text-light">Home</Link>
                        <Link href="/Contact" className="nav-link active fs-2 text-light">Contact</Link>
                        <Link href="/Work" className="nav-link active fs-2 text-light">Work</Link>
                        
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle  text-light fs-2" href="projects"
                                        id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        Passion Projects
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDarkDropdownMenuLink">
                                        <li><a className="dropdown-item" href="music">Music</a></li>
                                        <li><a className="dropdown-item" href="audio">Audio Engineering</a></li>
                                        <li><a className="dropdown-item" href="visual">Visual</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>


    )

}

export default Header;