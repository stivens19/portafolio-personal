import React from 'react';
import About from '../sections/About';
import Contact from '../sections/Contact';
import Redes from '../sections/Redes';
import Banner from '../ui/Banner';
import ServicesSection from './../sections/ServicesSection';
import Skills from './../sections/Skills';

const MainPage = () => {
    return (
        <>
            <div className="mt-1">
                <Banner />
                <ServicesSection />
                <About />
                <Skills />
                <Contact />
                <Redes />
            </div>

        </>
    );
}

export default MainPage;
