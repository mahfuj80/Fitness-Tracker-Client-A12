import useAxiosPublic from './useAxiosPublic';

const useTrainers = async () => {
  const res = await useAxiosPublic.get('/trainers');
  const data = res?.data;
  return { data };
};

export default useTrainers;
