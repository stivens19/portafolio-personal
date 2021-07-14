import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { auth } from '../firebase/firebase';
import DashboardPage from './../components/pages/DashboardPage';


const DashboardRoute = () => {
    return (
        <>
            <div className="container mt-2">
                <Switch>
                    <Route exact path="/dashboard" component={DashboardPage} />
                    <Redirect to="/dashboard" />
                </Switch>
            </div>

        </>
    );
}

export default DashboardRoute;

