import React from 'react';

const CardService = ({classIcon,title,description}) => {
    return (
        <div className="services__item">
            <div className="services__icon">
                <i className={`${classIcon}`}></i>
            </div>
            <h3 className="service__title">{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default CardService;
