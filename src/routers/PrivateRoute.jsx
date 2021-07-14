import { Redirect, Route } from 'react-router';
import PropTypes from 'prop-types';

const PrivateRoute = ({
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
PrivateRoute .propTypes = {
    component: PropTypes.func.isRequired
}
export default PrivateRoute;


