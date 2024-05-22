import '../assets/styles/mainApp.scss';

import React from 'react';
import PropTypes from 'prop-types';

import TitlesComponent from './titles';
import AboutMeComponent from './aboutMe';
import ContactComponent from './contact';
import ProjectComponent from './project';
import { ProjectInfo } from '../models/projectInfo.class';


const ward = new ProjectInfo(
    "Grupo Ward",
    "Ward es un proyecto privado que consiste en una REST API implementada con Python/FastAPI. Contiene varios endpoints. Para crear, leer y autorizar (con JWT) usuarios; crear, leer y actualizar canales que contienen videos (YouTube) y podcasts (Spotify); crear y leer noticias; y asignar diversos permisos a usuarios.",
    "",
    "",
    "https://grupoward.com",
    "Python, FastAPI, MongoDB, Javascript, React JS"
);

const shopSocial = new ProjectInfo(
    "Shop Social",
    "Shop Social es una REST API que permite navegar entre tiendas online, ver sus productos, agregar productos al carrito y comprar la lista de prodcutos previamente agregados. Está hecha en Python con FastAPI, y MongoDB para la base de datos. Para poder hacer uso de todos los endpoints, es necesario crear un usuario para hacer login. Una vez hecho login se envía un access token, este JWT se utiliza para autorizar al cliente.",
    "https://i.ibb.co/vjhRjpp/shop-social.png",
    "https://github.com/fedeegmz/shop-social",
    "",
    "Javascript, HTML, CSS"
);

const bsaleAirline = new ProjectInfo(
    "Bsale Airline",
    "Bsale Airline es una REST API implementada con Python/FastAPI. Contiene un único endpoint que lee los datos de pasajeros de una base de datos MySQL, y asigna asientos en un avión a esos pasajeros. Cumple ciertos requisitos, como que los pasajeros menores de 18 años tengan un asiento al lado de un mayor responsable, que a los pasajeros que compraron su boleto en una misma compra se le asignen asientos cercanos, etc. Además contiene tests con Pytest para verificar el correcto funcionamiento del sistema.",
    "https://i.ibb.co/sJJ2Qm6/bsale-airline.png",
    "https://github.com/fedeegmz/bsale-airline",
    "",
    "Python, FastAPI, MySQL"
);


function MainApp() {
    return (
        <div className="main-app">
            <section className="titles">
                <TitlesComponent></TitlesComponent>    
            </section>
            {/* <section className="personal-info"> */}
                <AboutMeComponent></AboutMeComponent>
            {/* </section> */}
            <main>
                <h2 className="projects-title">Proyectos</h2>
                <div className="d-flex flex-wrap">
                    <ProjectComponent
                        projectName={ ward.name }
                        projectDescription={ ward.description }
                        imgUrl={ ward.imgUrl }
                        repoUrl={ ward.repoUrl }
                        deployUrl={ ward.deployUrl }
                        techstack={ ward.techstack }
                    ></ProjectComponent>
                    <ProjectComponent
                        projectName={ shopSocial.name }
                        projectDescription={ shopSocial.description }
                        imgUrl={ shopSocial.imgUrl }
                        repoUrl={ shopSocial.repoUrl }
                        deployUrl={ shopSocial.deployUrl }
                        techstack={ shopSocial.techstack }
                    ></ProjectComponent>
                    <ProjectComponent
                        projectName={ bsaleAirline.name }
                        projectDescription={ bsaleAirline.description }
                        imgUrl={ bsaleAirline.imgUrl }
                        repoUrl={ bsaleAirline.repoUrl }
                        deployUrl={ bsaleAirline.deployUrl }
                        techstack={ bsaleAirline.techstack }
                    ></ProjectComponent>
                </div>
            </main>
        </div>
    )};

// MainApp.propTypes = {}

export default MainApp;
