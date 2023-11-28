import { Link, useParams } from 'react-router-dom';
import useSingleTrainer from '../../hooks/Trainers/useSingleTrainer';
import Loader from '../../Components/Shared/Loading/Loader';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6';

const TrainerDetails = () => {
  const { id } = useParams();
  const [trainer, loading] = useSingleTrainer({ id });
  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="avatar">
        <div className="w-24 rounded-full">
          <img src={trainer?.profileImage} />
        </div>
      </div>

      <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
        {trainer?.fullName}
      </h5>
      <h5 className="mb-2 text-lg font-semibold -mt-2 text-gray-900 dark:text-white">
        {trainer?.title}
      </h5>
      <p className="mb-5 text-base md:w-[70%] px-8 mx-auto text-gray-500 sm:text-lg dark:text-gray-400">
        Explore our experienced trainers profiles. Discover their specialties,
        years of expertise, and personalized training approaches. Connect with
        your ideal fitness mentor for a transformative wellness journey.
      </p>
      <div className="grid gap-6 mb-6 md:grid-cols-2 text-left px-12 md:w-[90%] mx-auto mt-8 bg-gray-200 dark:text-white dark:bg-gray-950 rounded-lg  py-8">
        <div className="text-2xl font-semibold">
          Age : <span className="font-bold">{trainer?.age}</span>
        </div>
        <div className="text-2xl font-semibold">
          Available Time in a Day :{' '}
          <span className="font-bold">{trainer?.availableTimeInDay} Hours</span>
        </div>
        <div className="text-2xl font-semibold">
          Available Time in a Week :{' '}
          <span className="font-bold">
            {trainer?.availableTimeInWeek} Hours
          </span>
        </div>
        <div className="text-2xl font-semibold">
          <span>
            Skills :
            {trainer?.skills.map((skill) => (
              <span key={skill} className="mr-2 text-xl font-bold">
                {' '}
                {skill},
              </span>
            ))}
          </span>
        </div>
        <div className="text-2xl font-semibold">
          Available Time in a Week :{' '}
          <span className="font-bold">{trainer?.experience} Years.</span>
        </div>
        <div className="text-2xl font-semibold">
          <Link to={trainer?.socialLinks?.facebookLink}>
            <button
              type="button"
              className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center inline-flex items-center me-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
            >
              <FaFacebook size={25}></FaFacebook>
              <span className="sr-only">Icon description</span>
            </button>
          </Link>
          <Link to={trainer?.socialLinks?.instagramLink}>
            <button
              type="button"
              className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center inline-flex items-center me-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
            >
              <FaInstagram size={25}></FaInstagram>
              <span className="sr-only">Icon description</span>
            </button>
          </Link>
          <Link to={trainer?.socialLinks?.xLink}>
            <button
              type="button"
              className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center inline-flex items-center me-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
            >
              <FaTwitter size={25}></FaTwitter>
              <span className="sr-only">Icon description</span>
            </button>
          </Link>
        </div>
      </div>
      <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
        <a
          href="#"
          className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
        >
          <svg
            className="me-3 w-7 h-7"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="apple"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path
              fill="currentColor"
              d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
            ></path>
          </svg>
          <div className="text-left rtl:text-right">
            <div className="mb-1 text-xs">Download on the</div>
            <div className="-mt-1 font-sans text-sm font-semibold">
              Mac App Store
            </div>
          </div>
        </a>
        <a
          href="#"
          className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
        >
          <svg
            className="me-3 w-7 h-7"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="google-play"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
            ></path>
          </svg>
          <div className="text-left rtl:text-right">
            <div className="mb-1 text-xs">Get in on</div>
            <div className="-mt-1 font-sans text-sm font-semibold">
              Google Play
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default TrainerDetails;
