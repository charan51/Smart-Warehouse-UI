import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Element, isAuthenticated }) => {
    return isAuthenticated ? <Element /> : <Navigate to="/login" replace />;
  };

export default PrivateRoute;