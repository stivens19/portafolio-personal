import React, { useContext} from 'react';
import { NavLink, useLocation } from 'react-router-dom'
import { Link } from "react-scroll";
import { MainContext } from './../../../main/MainContext';
const MenuList = () => {
    const {pathname}=useLocation() 
    const { main } = useContext(MainContext);
    return (
        <div className={`navbar__menu ${!main.isActive && 'd-none'}`}>
            <ul className={`${(pathname === '/portafolio') && 'flex-nav'} navbar__menu-list animate__animated animate__zoomInRight`}>
                <li className="navbar__menu-list-item animate__animated animate__zoomInUp">
                    <NavLink className="navbar__menu-link" to="/inicio">inicio</NavLink>
                </li>
                {
                    (!(pathname === '/portafolio'))&& (
                        <>
                            <li className={`navbar__menu-list-item animate__animated animate__zoomInUp `}>
                                <Link activeClass="navbar__menu-link-active" className="navbar__menu-link pointer" to="services"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}>servicios</Link>
                            </li>
                            <li className="navbar__menu-list-item animate__animated animate__zoomInUp">
                                <Link activeClass="navbar__menu-link-active" className="navbar__menu-link pointer" to="about"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}>sobre mi</Link>
                            </li>
                            <li className="navbar__menu-list-item animate__animated animate__zoomInUp">
                                <Link activeClass="navbar__menu-link-active" className="navbar__menu-link pointer" to="skills"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}>skills</Link>
                            </li>
                            <li className="navbar__menu-list-item animate__animated animate__zoomInUp">
                                <Link activeClass="navbar__menu-link-active" className="navbar__menu-link pointer" to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}>contacto</Link>
                            </li>
                        </>
                    )
                }

                <li className="navbar__menu-list-item animate__animated animate__zoomInUp">
                    <NavLink className="navbar__menu-link" to="/portafolio">portafolio</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default MenuList;
