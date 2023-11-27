import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const useGallery = ({ category }) => {
  const axiosPublic = useAxiosPublic();
  const {
    data: galleryImages = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ['galleryImages', category],
    queryFn: async () => {
      const res = await axiosPublic.get(`/galleryImages?category=${category}`);
      return res?.data;
    },
  });
  return [galleryImages, loading, refetch];
};
export default useGallery;
