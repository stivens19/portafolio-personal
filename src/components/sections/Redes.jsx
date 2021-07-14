import React from 'react';

const Redes = () => {
    return (
        <>
            <footer className="redes__container p-main-service">
                <div className="footer__bg">
                    <div className="footer__large">
                        <h3 className="text-secondary"><span className="navbar__logo-item">{'<Stivens Espinoza />'}</span></h3>
                        <div className="separador"></div>
                        <div className="social__buttons">
                            <a href="https://www.facebook.com/stivens70espinoza/" target="_blank" rel="noopener noreferrer" className="icon__social"><i className="fab fa-facebook-f"></i></a>

                            <a href="https://twitter.com/StivensE19/" target="_blank" rel="noopener noreferrer" className="icon__social"><i className="fab fa-twitter"></i></a>

                            <a href="https://github.com/stivens19" target="_blank" rel="noopener noreferrer" className="icon__social"><i className="fab fa-github"></i></a>

                            <a href="https://www.linkedin.com/in/stivens-espinoza-11954b184/" target="_blank" rel="noopener noreferrer" className="icon__social"><i className="fab fa-linkedin-in"></i></a>

                            <a href="https://www.instagram.com/stivens_espinoza/?hl=es-la" target="_blank" rel="noopener noreferrer" className="icon__social"><i className="fab fa-instagram"></i></a>

                            <a href="https://www.pinterest.es/pin/17873729761029915/" target="_blank" rel="noopener noreferrer" className="icon__social"><i className="fab fa-youtube"></i></a>

                        </div>
                    </div>

                </div>
                <div className="footer__small">
                    <p>Todos los derechos reservado &copy; Stivens Espinoza 2021</p>
                </div>
            </footer>
        </>
    );
}

export default Redes;
