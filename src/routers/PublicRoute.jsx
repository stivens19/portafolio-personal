import { Redirect, Route } from 'react-router';
import PropTypes from 'prop-types';

const PublicRoute = ({
    component: Component,
    ...rest
}) => {
    return (
        <Route {...rest}
            component={props => (
                <Component {...props} />
            )}
            
        />
    );
}
PublicRoute.propTypes = {
    component: PropTypes.func.isRequired
}
export default PublicRoute;

