import { useQuery } from '@tanstack/react-query';
import useAuth from '../Auth/useAuth';
import useAxiosSecure from '../Axios/useAxiosSecure';

const useAdminStats = () => {
  const { loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    data: adminStats = {},
    isPending: dataLoading,
    refetch,
  } = useQuery({
    queryKey: ['adminStats'],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/admin-stats`);
      return res?.data;
    },
  });
  return [adminStats, dataLoading, refetch];
};
export default useAdminStats;
