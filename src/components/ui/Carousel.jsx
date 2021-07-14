import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const skills = [
    {
        id: 1,
        image: './imgs/HTML5.svg',
        name: 'HTML5',
        description: 'HTML5 el lenguaje para la estructura de una web'
    },
    {
        id: 2,
        image: './imgs/CSS3.svg',
        name: 'CSS3',
        description: 'CSS3 para la apariencia de la web'
    },
    {
        id: 3,
        image: './imgs/Js.svg',
        name: 'JavaScript',
        description: 'Javascript el lenguaje para la interactividad con el usuario'
    },
    {
        id: 4,
        image: './imgs/Sass.svg',
        name: 'Sass',
        description: 'Sass para darle poder a css'
    },
    {
        id: 5,
        image: './imgs/bootstrap.svg',
        name: 'Bootstrap',
        description: 'Bootstrap el framework css para la construccion de interfaces responsivas'
    },
    {
        id: 6,
        image: './imgs/tailwind.svg',
        name: 'Tailwind',
        description: 'Tailwind el framework css para construccion de interfaces '
    },
    {
        id: 7,
        image: './imgs/figma.svg',
        name: 'Figma',
        description: 'Figma para el diseño de interfaces de usuario'
    },
    {
        id: 8,
        image: './imgs/jquery.svg',
        name: 'JQuery',
        description: 'JQuery libreria de javascript'
    },
    {
        id: 9,
        image: './imgs/jquerymobile.svg',
        name: 'JQuerymovile',
        description: 'JQueryMobile para mejora el trabajo con JQuery'
    },
    {
        id: 10,
        image: './imgs/firebase.svg',
        name: 'Firebase',
        description: 'Firebase es una plataforma para el desarrollo web'
    },
    {
        id: 11,
        image: './imgs/vue.svg',
        name: 'Vue',
        description: 'Vue es el framework js para la construccion de interfaces de usuario'
    },
    {
        id: 12,
        image: './imgs/vuetify.svg',
        name: 'Vuetify',
        description: 'Vuetify es un framework que combina vue con material design'
    },
    {
        id: 13,
        image: './imgs/react.svg',
        name: 'React',
        description: 'React es la libreria js para construccion de interfaces de usuario'
    },
    {
        id: 14,
        image: './imgs/php.svg',
        name: 'PHP',
        description: 'PHP el lenguaje del lado del servidor para la web'
    },
    {
        id: 15,
        image: './imgs/laravel-2.svg',
        name: 'Laravel',
        description: 'Laravel es el framework de php para crear aplicaciones web robustas'
    },
    {
        id: 16,
        image: './imgs/python.svg',
        name: 'Python',
        description: 'Python el lenguaje mas popular en machine learning y ciencia de datos'
    }
]
const Carousel = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        speed: 700,
        rows: 2,
        slidesPerRow: 2,
        autoplaySpeed: 2000,
        cssEase: "linear",
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="mt-carousel zi">
            <Slider {...settings}>
                {
                    skills.map(skill => (
                        <div className="carousel__item" key={skill.id}>
                            <img className="p" src={skill.image} alt={skill.name} />
                            <p className="carousel__item-description">{skill.name}</p>
                        </div>

                    ))
                }
            </Slider>
        </div>
    );
}

export default Carousel;
