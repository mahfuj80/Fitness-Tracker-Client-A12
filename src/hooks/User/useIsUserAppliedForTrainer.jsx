import { useQuery } from '@tanstack/react-query';
import useAuth from '../Auth/useAuth';
import useAxiosSecure from '../Axios/useAxiosSecure';

const useIsUserAppliedForTrainer = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    data: isApplied = '',
    isPending: dataLoading,
    refetch,
  } = useQuery({
    queryKey: ['isApplied'],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/applied-trainers/${user?.email}`);
      console.log(res.data);
      return res?.data;
    },
  });
  return [isApplied, dataLoading, refetch];
};
export default useIsUserAppliedForTrainer;
