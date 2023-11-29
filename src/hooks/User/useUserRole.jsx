import { useQuery } from '@tanstack/react-query';
import useAuth from '../Auth/useAuth';
import useAxiosSecure from '../Axios/useAxiosSecure';

const useUserRole = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    data: role = '',
    isPending: dataLoading,
    refetch,
  } = useQuery({
    queryKey: ['role'],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/role/${user?.email}`);
      return res?.data;
    },
  });
  return [role, dataLoading, refetch];
};
export default useUserRole;
