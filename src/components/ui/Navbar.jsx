import React, { useContext, useState } from 'react';
//import { NavLink } from 'react-router-dom'
import { MainContext } from './../../main/MainContext';
import { types } from './../../types/types';
import MenuList from './complements/MenuList';
import { animateScroll as scroll } from "react-scroll";
const Navbar = () => {
    const {main,dispatch} = useContext(MainContext);
    const [navbar, setNavbar] = useState(false);
    const handleMenu=()=>{
        dispatch({
            type:types.menu,
            payload:!main.isActive
        })
    }
    const changeMenu=()=>{
        if(window.scrollY > 20){
            setNavbar(true)
        }else{
            setNavbar(false)
        }
    }
    window.addEventListener('scroll',changeMenu)
    return (
        <nav className={`navbar__container ${navbar && 'p-fixed'}`}>
            <div className="navbar__logo animate__animated animate__fadeIn">
                <span className="navbar__logo-item">{'<SE />'}</span>
                <span className="navbar__button pointer" onClick={handleMenu}><i className="fas fa-bars"></i></span>
            </div>
            <MenuList />
            {
                navbar && <div className="float-button pointer animate__animated animate__bounceIn" onClick={()=>scroll.scrollToTop()}>
                <i className="fas fa-chevron-up"></i>
           </div>
            }

        </nav>
    );
}

export default Navbar;
