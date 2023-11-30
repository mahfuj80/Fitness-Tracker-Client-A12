import { useQuery } from '@tanstack/react-query';
import useAuth from '../Auth/useAuth';
import useAxiosSecure from '../Axios/useAxiosSecure';

const useClasses = () => {
  const { loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    data: classes = [],
    isPending: dataLoading,
    refetch,
  } = useQuery({
    queryKey: ['classes'],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/class`);
      return res?.data;
    },
  });
  return [classes, dataLoading, refetch];
};
export default useClasses;
