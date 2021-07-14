import React, { useContext } from 'react';
import { MainContext } from './../../main/MainContext';
import CardService from './complements/CardService';

const ServicesCards = () => {
    const {main:{services}} = useContext(MainContext);
    return (
        <div className="services__flex-container">
            {
                services.map((service) => (
                    <CardService key={service.id} {...service} />
                ))
            }
        </div>
    );
}

export default ServicesCards;
