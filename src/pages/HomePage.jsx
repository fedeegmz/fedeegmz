import '../assets/styles/HomePage.scss';

import React from 'react';
// import PropTypes from 'prop-types';

import TitlesComponent from '../components/titles';
import AboutMeComponent from '../components/aboutMe';
import ProjectComponent from '../components/project';

import wardProjectData from '../assets/data/wardProjectData';
import shopsocialProjectData from '../assets/data/shopsocialProjectData';
import bsaleairlineProjectData from '../assets/data/bsaleairlineProjectData';


function HomePage() {
    return (
        <div className="main-app">
            <section className="titles">
                <TitlesComponent></TitlesComponent>    
            </section>
            <AboutMeComponent></AboutMeComponent>
            <main>
                <h2 className="projects-title">Proyectos</h2>
                <div className="d-flex flex-wrap">
                    <ProjectComponent
                        data = { wardProjectData }
                    ></ProjectComponent>
                    <ProjectComponent
                        data = { shopsocialProjectData }
                    ></ProjectComponent>
                    <ProjectComponent
                        data = { bsaleairlineProjectData }
                    ></ProjectComponent>

                </div>
            </main>
        </div>
    )};

// HomePage.propTypes = {}

export default HomePage;
