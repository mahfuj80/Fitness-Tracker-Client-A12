import { useQuery } from '@tanstack/react-query';
import useAuth from '../Auth/useAuth';
import useAxiosSecure from '../Axios/useAxiosSecure';

const useAppliedTrainers = () => {
  const { loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    data: appliedTrainers = [],
    isPending: dataLoading,
    refetch,
  } = useQuery({
    queryKey: ['appliedTrainers'],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/admin/applied-trainers`);
      return res?.data;
    },
  });
  return [appliedTrainers, dataLoading, refetch];
};
export default useAppliedTrainers;
