import { useQuery } from '@tanstack/react-query';
import useAuth from '../Auth/useAuth';
import useAxiosSecure from '../Axios/useAxiosSecure';

const useAdminStats = () => {
  const { user, loading } = useAuth();
  console.log(!loading, user);
  const axiosSecure = useAxiosSecure();
  const {
    data: adminStats = '',
    isPending: dataLoading,
    refetch,
  } = useQuery({
    queryKey: ['adminStats'],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/admin-stats`);
      console.log(res.data);
      return res?.data;
    },
  });
  return [adminStats, dataLoading, refetch];
};
export default useAdminStats;
