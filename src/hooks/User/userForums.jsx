import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../Axios/useAxiosPublic';

const useForums = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: forums = [],
    isPending: dataLoading,
    refetch,
  } = useQuery({
    queryKey: ['forums'],
    queryFn: async () => {
      const res = await axiosPublic.get(`/forum`);
      return res?.data;
    },
  });
  return [forums, dataLoading, refetch];
};
export default useForums;
