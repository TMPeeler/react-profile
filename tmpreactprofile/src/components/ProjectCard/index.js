import React from "react";
import Projects from "../../projects.json"

const ProjectCard = () => {

    return (
        <div>
            {Projects.map((project) => (
                <div class="col my-3">
                    <div class="card bg-warning">
                        <div class="d-flex justify-content-center align-items-center">
                            <a href={project.repo}
                                class=" text-decoration-none justify-content-center">
                                <h1 class="text-center">{project.name}</h1>
                                <img src={project.pic} alt="screenshot of operating site"
                                    width="300" height="300" /></a>
                        </div>
                        <a href={project.link} className="text-center text-decoration-none">Link to deployed site</a>
                    </div>
                </div>

            ))}
        </div>
    );
};

export default ProjectCard;