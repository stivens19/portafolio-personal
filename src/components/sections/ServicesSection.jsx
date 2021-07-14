import React from 'react';
import ServicesCards from './../ui/ServicesCards';


const ServicesSection = () => {
    return (
        <>
            <section className="services__container p-main-service" id="services">
                <div className="services__description">
                    <span className="text-secondary">Servicios</span>
                    <h3>Mis Servicios</h3>
                    <p>Desarrollo de aplicaciones web modernas</p>
                    <div className="separador"></div>
                </div>
                <ServicesCards />
                <svg xmlns="http://www.w3.org/2000/svg" className="svg-services" viewBox="0 0 1440 320">
                <path fill="#0099ff" fillOpacity="0.1" d="M0,160L34.3,133.3C68.6,107,137,53,206,32C274.3,11,343,21,411,53.3C480,85,549,139,617,154.7C685.7,171,754,149,823,128C891.4,107,960,85,1029,106.7C1097.1,128,1166,192,1234,234.7C1302.9,277,1371,299,1406,309.3L1440,320L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
                </svg>
            </section>
            


        </>
    );
}

export default ServicesSection;
