import React from 'react';
import PropTypes from 'prop-types';
import '../styles/project.scss';

const ProjectComponent = ({ projectName, projectDescription, imgUrl, deployUrl, repoUrl, techstack }) => {
    return (
        <div>
            <div className="project-box">
                <h3 className="project-box__title"> { projectName } </h3>

                <div className="project-box__content">
                    <div>
                        {
                            imgUrl !== "" ?
                                <figure className="project-box__content__img">
                                    <img alt='Imagen ilustrativa del proyecto' src={ imgUrl }></img>
                                </figure>
                                :
                                null
                        }
                        <ul className="project-box__content__tech">
                            {
                                techstack.map((tech) => {
                                    return (
                                        <div className='tech-box'>
                                            <li>{ tech }</li>
                                        </div>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    <p className="project-box__content__description">
                        { projectDescription }
                        <br></br>
                        <br></br>
                        {
                            repoUrl !== "" ?
                                <a href={ repoUrl } rel='noreferrer' target='_blank'>GitHub</a>
                                :
                                null
                        }
                        {
                            deployUrl === "" ?
                                null
                                :
                                <a href={ deployUrl } rel='noreferrer' target='_blank'>Ver</a>
                        }
                    </p>
                </div>
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
