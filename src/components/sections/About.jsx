import React from 'react';

const About = () => {
    return (
        <section className="about__container p-main-service" id="about">
            <div className="about__description">
                <h3 className="text-secondary">Sobre mi</h3>
                <p>Soy un estudiante de Ingenieria de Sistemas, desarrollador web y por las noches soy batman !!!</p>
                <div className="separador"></div>
            </div>    
            <div className="about__me">
                <div className="about__image">
                    <img src="./imgs/about.svg" alt="mi foto"/>
                </div>
                <div className="about__me-description">
                    <h3 className="text-secondary">HOLA A TODOS</h3>
                    <p>Soy un estudiante de Ingenieria de Sistemas y un apasionado por el desarrollo web, mi lenguaje de programación favorito es JavaScript,me gusta aprender en linea y tambien compartir mis conocimientos buscando mejorar día con día.</p>
                    <div className="about__info">
                        <div className="about__info-item">
                            <span className="atributo">Nombre: </span>
                            <p className="atributte">Stivens Espinoza Reina</p>
                        </div>
                        <div className="about__info-item">
                            <span className="atributo">Email: </span>
                            <p className="atributte">stivens70espinoza@gmail.com</p>
                            
                        </div>
                        <div className="about__info-item">
                            <span className="atributo">Celular: </span>
                            <p className="atributte">+51 931340718</p>
                        </div>
                        <div className="about__info-item">
                            <span className="atributo">Frelancer: </span>
                            <p className="atributte">Disponible</p>
                        </div>
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="svg-about" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="0.1" d="M0,96L80,112C160,128,320,160,480,165.3C640,171,800,149,960,165.3C1120,181,1280,235,1360,261.3L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            <img src="./imgs/batman.svg" className="svg-batman" alt=""/>

        </section>
    );
}

export default About;
