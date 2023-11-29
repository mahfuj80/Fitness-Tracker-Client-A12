import { useQuery } from '@tanstack/react-query';
import useAuth from '../Auth/useAuth';
import useAxiosSecure from '../Axios/useAxiosSecure';

const useAllSubscribers = () => {
  const { user, loading } = useAuth();
  console.log(!loading, user);
  const axiosSecure = useAxiosSecure();
  const {
    data: allSubscribers = '',
    isPending: dataLoading,
    refetch,
  } = useQuery({
    queryKey: ['allSubscribers'],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/admin/all-users`);
      console.log(res.data);
      return res?.data;
    },
  });
  return [allSubscribers, dataLoading, refetch];
};
export default useAllSubscribers;
