import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../Axios/useAxiosPublic';

const useSingleTrainer = ({ id }) => {
  const axiosPublic = useAxiosPublic();
  const {
    data: trainer = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ['trainer', id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/trainers/${id}`);
      return res?.data;
    },
  });
  return [trainer, loading, refetch];
};
export default useSingleTrainer;
