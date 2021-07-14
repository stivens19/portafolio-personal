import React from 'react';
import Carousel from '../ui/Carousel';

//import "react-responsive-carousel/lib/styles/carousel.min.css";
//import { Carousel } from "react-responsive-carousel";

const Skills = () => {

    return (
        <>
        <section className="skills__container p-main-service" id="skills">
            <div className="about__description">
                <h3>Skills</h3>
                <p>Las principales tecnologías en las que me desempeño y se suman más.</p>
                <div className="separador"></div>
            </div>
            <div className="skills__me">
                <Carousel />
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="svg-skills" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="0.1" d="M0,192L48,192C96,192,192,192,288,213.3C384,235,480,277,576,256C672,235,768,149,864,122.7C960,96,1056,128,1152,117.3C1248,107,1344,53,1392,26.7L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </section>
        </>
    );
}

export default Skills;
