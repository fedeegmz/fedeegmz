import '../assets/styles/projectComponent.scss';

import React from 'react';
import PropTypes from 'prop-types';

import { ProjectInfo } from '../models/projectInfo.class';


const ProjectComponent = ({ data }) => {
    
    return (
        <div className="card project-box" style={{width: "25rem"}}>
            <div className="card-body">
                <h5 className="card-title">{ data.name }</h5>
                <p className="card-text">
                    { data.description && data.description }
                    { data.description && <br /> }
                    
                    { data.techstack.map(
                        item =>
                            <span
                                className = "badge rounded-pill text-bg-dark"
                                style = {{"margin": "2px"}}
                            >
                                {item}
                            </span>)
                    }
                    
                </p>
                
                {
                    data.repoUrl &&
                        <a
                            className = "btn btn-primary"
                            href = { data.repoUrl }
                            rel = "noreferrer"
                            target = "_blank"
                        >GitHub</a>
                }
                {
                    data.deployUrl &&
                        <a
                            className = "btn btn-primary"
                            href = { data.deployUrl }
                            rel = "noreferrer"
                            target = "_blank"
                        >Ver</a>
                        
                }
            </div>
        </div>
    );
};

ProjectComponent.propTypes = {
    data: PropTypes.instanceOf(ProjectInfo)
};

export default ProjectComponent;
