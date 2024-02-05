import { Link, useParams } from 'react-router-dom';
import useSingleTrainer from '../../hooks/Trainers/useSingleTrainer';
import Loader from '../../Components/Shared/Loading/Loader';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6';

const TrainerDetails = () => {
  const { id } = useParams();
  const [trainer, loading] = useSingleTrainer({ id });
  console.log(trainer?.classes);
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
        {trainer?.classes?.map((cls) => (
          <>
            <div
              href="#"
              className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
            >
              <div className="text-left rtl:text-right">
                <div className="mb-1 text-xs">
                  From: {cls?.startTime} To: {cls?.endTime}
                </div>
                <div className="-mt-1 font-sans text-sm font-semibold text-center">
                  {cls?.category}
                </div>
                <div className=" flex items-center justify-center">
                  <button className="btn btn-sm mt-4">Book Now</button>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default TrainerDetails;
