import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const isAuthenticated = localStorage.getItem('authToken') !== null;
  console.log( isAuthenticated )
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
  };

export default PrivateRoute;