import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Navbar from './../components/ui/Navbar';
import MainPage from './../components/pages/MainPage';
import PortafolioPage from './../components/pages/PortafolioPage';
import LoginPage from './../components/pages/LoginPage';

const HomeRouter = () => {
    return (
        <>
            <Navbar />
            <div className="container mt-2">
                <Switch>
                    <Route exact path="/inicio" component={MainPage} />
                    <Route exact path="/portafolio" component={ PortafolioPage } />
                    <Route exact path="/login" component={ LoginPage } />
                    <Redirect to="/inicio" />
                </Switch>
            </div>

        </>
    );
}

export default HomeRouter;
