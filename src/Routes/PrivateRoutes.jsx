import { PropTypes } from 'prop-types';
import useAuth from '../hooks/Auth/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
// import Loader from '../Components/Shared/Loading/Loader';

const PrivetRoutes = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();

  // if (loading) {
  //   return <Loader></Loader>;
  // }

  if (user) {
    return children;
  }
  return <Navigate to={'/login'} state={location.pathname}></Navigate>;
};

PrivetRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PrivetRoutes;
