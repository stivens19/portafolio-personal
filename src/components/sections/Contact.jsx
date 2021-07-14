import React from 'react'

export default function Contact() {
    return (
        <section className="contact__container p-main-service" id="contact">
            <div className="services__description">
                <span className="text-secondary">¿Tienes alguna pregunta?</span>
                <h3>Contactame</h3>
                <p>Si tienes alguna idea puedes contactarme por los siguientes medios</p>
                <div className="separador"></div>
            </div>
            <div className="contact_file">
                <div className="contact__column">
                    <div className="contact__icon maps">
                        <i className="fas fa-map-marked-alt"></i>
                    </div>
                    <div className="contact__description">
                        <h3>Ubicacion</h3>
                        <p>Perú - Junin - Satipo</p>
                    </div>
                </div>
                <div className="contact__column">
                    <div className="contact__icon whatsapp">
                        <i className="fab fa-whatsapp"></i>
                    </div>
                    <div className="contact__description">
                        <h3>Whatsapp</h3>
                        <p>+51 931340718</p>
                    </div>
                </div>
                <div className="contact__column">
                    <div className="contact__icon email">
                        <i className="far fa-envelope"></i>
                    </div>
                    <div className="contact__description">
                        <h3>Email</h3>
                        <p>stivens70espinoza@gamil.com</p>
                    </div>
                </div>
            </div>
            <form className="contact__form">
                <div className="first_date">
                <input type="text" className="contact__form-input" placeholder="Ingrese su Nombre" />
                <input type="email" className="contact__form-input" placeholder="Ingrese su Email" />
                </div>
                
                <input type="text" className="contact__form-input" placeholder="Ingrese el Asunto" />
                <textarea cols="30" className="contact__form-input" rows="10" placeholder="Ingrese Mensaje"></textarea>
                <button className="btn contact__btn pointer" type="submit">Enviar</button>
            </form>
        </section>
    )
}
