import { useQuery } from '@tanstack/react-query';
import useAuth from '../Auth/useAuth';
import useAxiosSecure from '../Axios/useAxiosSecure';

const useAllUsers = () => {
  const { user, loading } = useAuth();
  console.log(!loading, user);
  const axiosSecure = useAxiosSecure();
  const {
    data: allUsers = '',
    isPending: dataLoading,
    refetch,
  } = useQuery({
    queryKey: ['allUsers'],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/admin/all-users`);
      console.log(res.data);
      return res?.data;
    },
  });
  return [allUsers, dataLoading, refetch];
};
export default useAllUsers;
