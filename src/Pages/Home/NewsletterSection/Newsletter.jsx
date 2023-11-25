import { useRef, useState } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import toast from 'react-hot-toast';

const Newsletter = () => {
  const axiosPublic = useAxiosPublic();
  const inputRef = useRef(null);
  const [error, setError] = useState('');
  const handleNewsLetter = () => {
    const value = {
      email: inputRef.current.value,
    };
    if (value?.email === '') {
      setError('Please Provide email');
      return;
    } else if (/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(value?.email)) {
      setError('');
      axiosPublic.post('/news-letter', value).then((res) => {
        if (res?.data?.insertedId) {
          toast.success('Added!!!! You Will Notify');
          inputRef.current.value = '';
        }
      });
    } else {
      setError('Please Provide Valid Email Address');
    }
  };
  return (
    <div className="hero  bg-base-200 rounded-lg">
      <div className="hero-content text-center">
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold">Subscribe Our Newsletter</h1>
          <p className="py-6">
            Join our newsletter and be the first to know about new product
            release, discounts and useful resources!
          </p>

          <label
            htmlFor="input-group-1"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Email
            <p className="text-red-600">{error}</p>
          </label>
          <div className="relative mb-6">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
              </svg>
            </div>
            <input
              ref={inputRef}
              required
              type="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="yourEmail@gamil.com"
            />
          </div>

          <button
            onClick={handleNewsLetter}
            className="btn btn-sm md:btn md:btn-primary btn-primary"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
