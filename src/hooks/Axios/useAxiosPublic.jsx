import axios from 'axios';

const axiosPublic = axios.create({
  baseURL: 'https://fitness-tracker-server-a12.vercel.app',
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
