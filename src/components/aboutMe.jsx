import React from 'react';
import ContactComponent from './contact';


const AboutMeComponent = () => {
    return (
        <div className="card">
            <div className="card-header">
                <ContactComponent></ContactComponent>
            </div>
            <div className="card-body">
                <h5 className="card-title">Sobre Mi</h5>
                <p className="card-text">
                Mi nombre es Federico Gomez, tengo 23 años y soy desarrollador Backend con Python.
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
                
                <a
                    className = "btn btn-primary"
                    href = "https://drive.google.com/file/d/19UVPWZJg2INxwVyzJ750pgKikKDfvi1h/view?usp=sharing"
                    rel = "noreferrer"
                    target = "_blank"
                >Descargar CV</a>
            </div>
        </div>
    )
}

export default AboutMeComponent;
