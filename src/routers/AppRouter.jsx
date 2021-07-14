import { BrowserRouter as Router,Switch } from 'react-router-dom'

import React from 'react';
import DashboardRoute from './DashboardRoute';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import HomeRouter from './HomeRouter';
const AppRouter = () => {
    return (
        <Router>
            <div>
                {/*<Navbar />*/}
                <Switch>
                    <PrivateRoute exact path="/dashboard" component={ DashboardRoute } />
                    <PublicRoute exact  component={HomeRouter}  />
                    
                </Switch>
            </div>
            
        </Router>
    );
}

export default AppRouter;
