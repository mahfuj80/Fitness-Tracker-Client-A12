import { PropTypes } from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';
import useUserRole from '../hooks/User/useUserRole';
import useAuth from '../hooks/Auth/useAuth';
import Loader from '../Components/Shared/Loading/Loader';

const TrainersRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const [role, dataLoading] = useUserRole();
  const userRole = role?.role;
  const isAdmin = userRole === 'admin';
  const location = useLocation();
  if (loading || dataLoading) {
    return <Loader></Loader>;
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to={'/'} state={{ from: location }} replace></Navigate>;
};

TrainersRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TrainersRoutes;
