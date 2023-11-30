import { useQuery } from '@tanstack/react-query';
import useAuth from '../Auth/useAuth';
import useAxiosSecure from '../Axios/useAxiosSecure';

const useForums = () => {
  const { loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    data: forums = [],
    isPending: dataLoading,
    refetch,
  } = useQuery({
    queryKey: ['forums'],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/forum`);
      return res?.data;
    },
  });
  return [forums, dataLoading, refetch];
};
export default useForums;
