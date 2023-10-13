import React from 'react';
import '../styles/aboutMe.scss';

const AboutMeComponent = () => {
    return (
        <div className="about">
            <p>
            Mi nombre es Federico Gomez, tengo 22 años y soy desarrollador Backend con Python.
            Entre las tecnologías que manejo se encuentran FastAPI, Django, Django Rest Framework (DRF), MongoDB, PostgreSQL.
            Ingresando a mi perfil en la plataforma LinkedIn tendrán acceso total tanto a mi información personal como a mis datos acedémicos, 
            información que les permitirá adentrarse en la formación que he adquirido y continuo adquiriendo constantemente, 
            ya que considero sumamente necesario la formación constante y actualizada.
            En la sección de proyectos se pueden ver diferentes implementaciones, donde se reflejan estas habilidades y conocimientos; 
            y en GitHub se encuentran más proyectos, como implementaciones de estructuras de datos en Python, juegos, apps web, etc. 
            <br></br>
            Personalmente disfruto a la hora de aprender cosas nuevas y considero a los desafíos diarios como retos que se me presentan a la hora de llevar a cabo un proyecto, 
            buscando siempre la forma de resolverlo de la manera más eficiente, aplicando todas las herramientas que tengo.
            </p>
        </div>
    )
}

export default AboutMeComponent;