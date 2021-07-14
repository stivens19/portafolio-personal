import React, { useReducer } from 'react';
import AppRouter from './routers/AppRouter';
import { MainContext } from './main/MainContext';
import { MainReducer } from './main/mainReducer';

const initialState=()=>{
    return {
        userfir:{},
        isActive:false,
        services:[
            {
                id:1,
                classIcon:'fab fa-github',
                title:'Desarrollo Web',
                description:'Desarrollo de aplicaciones web a medida'
            },
            {
                id:2,
                classIcon:'fas fa-palette',
                title:'Diseño Web',
                description:'Diseño de interfaces web interactivas.'
            },
            {
                id:3,
                classIcon:'fas fa-chalkboard-teacher',
                title:'Asesoria',
                description:'Asesoria en desarrollo web.'
            },
            {
                id:4,
                classIcon:'fab fa-google',
                title:'SEO',
                description:'Posicionamiento web'
            }
        ]
    }
}
const PortafolioApp = () => {
    const [main, dispatch] = useReducer(MainReducer, {},initialState)
    return (
        <MainContext.Provider value={{ 
            main,
            dispatch
         }}>
            <AppRouter />
        </MainContext.Provider>
        
        
    );
}

export default PortafolioApp;
