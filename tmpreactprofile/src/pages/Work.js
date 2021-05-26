import React from "react";
import ProjectCard from "../components/ProjectCard"

// import ChecklistDropdown from "./components/ChecklistDropdown"

const Work = () => {
    // functions for handling search and checkboxes
    return (

        <div>
        <section id="Work" className="py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="row">

                        <ProjectCard />

                    </div>
                </div>
            </div>
        </section>
        </div>


    );
};

export default Work;