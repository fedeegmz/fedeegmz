import '../assets/styles/contactComponent.scss';

import React from 'react';


const ContactComponent = () => {
    
    return (
        <div className='contact'>
            <div className="contact__item">
                <a
                    href="https://www.linkedin.com/in/federico00gomez/"
                    rel='noreferrer'
                    target='_blank'
                >
                    <i className="bi bi-linkedin"></i>
                </a>
            </div>
            <div className="contact__item">
                <a
                    href="https://github.com/fedeegmz"
                    rel='noreferrer'
                    target='_blank'
                >
                    <i className="bi bi-github"></i>
                </a>
            </div>
            <div className="contact__item">
                <i className="bi bi-geo-alt"></i>
                <span>Cordoba, Córdoba, Argentina</span>
            </div>
        </div>
    );
}

export default ContactComponent;
