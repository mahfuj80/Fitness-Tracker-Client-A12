import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../Axios/useAxiosPublic';

const useTrainers = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: trainers = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ['trainers'],
    queryFn: async () => {
      const res = await axiosPublic.get('/trainers');
      return res?.data;
    },
  });
  return [trainers, loading, refetch];
};
export default useTrainers;
