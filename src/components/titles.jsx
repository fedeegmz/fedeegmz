import '../assets/styles/titlesComponent.scss';

import React from 'react';


const TitlesComponent = () => {
    
    return (
        <section className="titles">
            <div>
                <h1 className="name">Federico Gomez</h1>
                <h2 className="username">@fedeegmz</h2>
            </div>
            <h2 className="profession">Backend Developer</h2>
            <h3 className="tech-stack">Python - FastAPI - Django - Django Rest Framework - MongoDB - PostgreSql</h3>
        </section>
    )
}

export default TitlesComponent;
