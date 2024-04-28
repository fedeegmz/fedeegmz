import React from 'react';
import '../styles/contact.scss'

const ContactComponent = () => {
    return (
        <div className='contact'>
            <button>
                <a 
                    href="https://drive.google.com/file/d/19UVPWZJg2INxwVyzJ750pgKikKDfvi1h/view?usp=sharing"
                    rel='noreferrer'
                    target='_blank'
                >
                    Download CV
                </a>
            </button>
            <div className="contact__a">
                <a
                    href="https://www.linkedin.com/in/federico00gomez/"
                    rel='noreferrer'
                    target='_blank'
                >LinkedIn</a>
            </div>
            <div className="contact__a">
                <a
                    href="https://github.com/fedeegmz"
                    rel='noreferrer'
                    target='_blank'
                >GitHub</a>
            </div>
            <div className="contact__icon">
                <a
                    href="mailto:gomez00federico@gmail.com"
                    rel='noreferrer'
                    target='_blank'
                >
                    <img src="https://i.ibb.co/ZMMP40P/email.png" alt="Icono de Gmail"/>
                </a>
                <span>gomez00federico@gmail.com</span>
            </div>
            <div className="contact__icon">
                <a
                    href="tel:+542302216476"
                    rel='noreferrer'
                    target='_blank'
                >
                    <img src="https://i.ibb.co/m0kfsrr/whatsapp.png" alt="Icono de Whatsapp"/>
                </a>
                <span>(+54)2302 216 476</span>
            </div>
            <div className="contact__icon">
                <img src="https://i.ibb.co/hxNKhCh/ubicacion.png" alt="Icono de ubicacion"/>
                <span>Cordoba, Córdoba, Argentina</span>
            </div>
        </div>
    );
}

export default ContactComponent;
