import '../assets/styles/projectComponent.scss';
import React from 'react';
import PropTypes from 'prop-types';

const ProjectComponent = ({ projectName, projectDescription, imgUrl, deployUrl, repoUrl, techstack }) => {
    return (
        <div className="card project-box" style={{width: "25rem"}}>
            {
                imgUrl !== "" && <img src={ imgUrl } className="card-img-top" alt="Imagen ilustrativa del proyecto"/>
            }
            <div className="card-body">
                <h5 className="card-title">{ projectName }</h5>
                <p className="card-text">
                    { projectDescription }
                    <br />
                    <strong>[{techstack}]</strong>
                </p>
                {
                    repoUrl !== "" ?
                        <a
                            className = "btn btn-primary"
                            href = { repoUrl }
                            rel = "noreferrer"
                            target = "_blank"
                        >GitHub</a>
                        :
                        null
                }
                {
                    deployUrl === "" ?
                        null
                        :
                        <a
                            className = "btn btn-primary"
                            href = { deployUrl }
                            rel = "noreferrer"
                            target = "_blank"
                        >Ver</a>
                        
                }
            </div>
        </div>
    );
};

ProjectComponent.propTypes = {
    projectName: PropTypes.string.isRequired,
    projectDescription: PropTypes.string.isRequired,
    imgUrl: PropTypes.string,
    deployUrl: PropTypes.string,
    repoUrl: PropTypes.string,
    techstack: PropTypes.array.isRequired
};

export default ProjectComponent;
