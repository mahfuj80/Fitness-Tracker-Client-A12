import { useQuery } from '@tanstack/react-query';
import useAuth from '../Auth/useAuth';
import useAxiosSecure from '../Axios/useAxiosSecure';

const useAllTrainers = () => {
  const { loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    data: allTrainers = [],
    isPending: dataLoading,
    refetch,
  } = useQuery({
    queryKey: ['allTrainers'],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/admin/all-trainers`);
      return res?.data;
    },
  });
  return [allTrainers, dataLoading, refetch];
};
export default useAllTrainers;
