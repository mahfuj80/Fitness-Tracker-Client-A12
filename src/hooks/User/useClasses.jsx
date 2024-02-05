import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../Axios/useAxiosPublic';

const useClasses = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: classes = [],
    isPending: dataLoading,
    refetch,
  } = useQuery({
    queryKey: ['classes'],
    queryFn: async () => {
      const res = await axiosPublic.get(`/class`);
      return res?.data;
    },
  });
  return [classes, dataLoading, refetch];
};
export default useClasses;
