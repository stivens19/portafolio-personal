import React from 'react'

export default function CardProject({ img, description, etiquetas, url_project, url_repo }) {
    return (
        <div className="project animate__animated animate__flipInX">
            <img src={img} alt={description} />
            <div className="description__project">
                <h4 className="project__title">{description}</h4>
                <div>
                {
                    etiquetas &&(
                    etiquetas.map(etiqueta => (
                        
                            <span className="slug" key={etiqueta}>{etiqueta}</span>
                        
                    )))
                }
                </div>

                <a target="_blank" rel="noreferrer" className="ver_page" href={url_project}>Ver sitio</a>
                <a target="_blank" rel="noreferrer" href={url_repo} className="button_github"><i className="fab fa-github"></i></a>
            </div>

        </div>
    )
}
