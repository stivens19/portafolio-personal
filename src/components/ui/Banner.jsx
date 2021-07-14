import React from 'react';
import Writer from './Writter';

const Banner = () => {

    return (
        <div className=" p-main banner__container animate__animated animate__fadeIn">
            <div className="banner__item">
                <div className="banner__social-buttons">
                    <a href="https://www.facebook.com/stivens70espinoza/" target="_blank" rel="noopener noreferrer" className="btn btn-social"><i className="fab fa-facebook-f"></i></a>

                    <a href="https://twitter.com/StivensE19/" target="_blank" rel="noopener noreferrer" className="btn btn-social"><i className="fab fa-twitter"></i></a>

                    <a href="https://github.com/stivens19" target="_blank" rel="noopener noreferrer" className="btn btn-social"><i className="fab fa-github"></i></a>

                    <a href="https://www.linkedin.com/in/stivens-espinoza-11954b184/" target="_blank" rel="noopener noreferrer" className="btn btn-social"><i className="fab fa-linkedin-in"></i></a>

                    <a href="https://www.instagram.com/stivens_espinoza/?hl=es-la" target="_blank" rel="noopener noreferrer" className="btn btn-social"><i className="fab fa-instagram"></i></a>
                    
                </div>
                <div className="banner__description mt-2">
                    {/*<h1 className="banner__title">Hola, Soy Stivens Espinoza</h1>*/}
                    <Writer text="Hola, Soy Stivens Espinoza" classElements="banner__title" />
                    <p>Soy un desarrollador web fullstack apasionado por el mundo tecnológico y la programación.</p>
                    <div className="banner__buttons">
                        <a href="./" className="btn banner__button">Descargar CV</a>
                        <a href="./" className="btn banner__button-whatsapp"><i className="fab fa-whatsapp"></i></a>
                    </div>
                </div>
            </div>
            <div className="banner__image banner__item">
                <img src="./imgs/banner-development.svg" alt="banner-immage" />
            </div>

            <svg className="svg-container" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="0.1" d="M0,320L80,282.7C160,245,320,171,480,144C640,117,800,139,960,122.7C1120,107,1280,53,1360,26.7L1440,0L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
        </div>
    );
}

export default Banner;


