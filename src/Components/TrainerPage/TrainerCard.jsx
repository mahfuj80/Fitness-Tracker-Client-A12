import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
const TrainerCard = ({ trainer }) => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col items-center pb-10">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg mt-4"
          src={trainer?.profileImage}
          alt="Bonnie image"
        />
        <h5 className="mb-1 text-xl font-semibold text-gray-900 dark:text-white">
          {trainer?.fullName}
        </h5>
        <p className="text-gray-500 text-sm">
          {trainer?.experience} Of Experience
        </p>
        <div className="flex mt-2 md:mt-4">
          <Link
            to={trainer?.socialLinks?.facebookLink}
            className="inline-flex items-center px-2 py-1 mr-2  text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <FaFacebook size={25}></FaFacebook>
          </Link>
          <Link
            to={trainer?.socialLinks?.instagramLink}
            className="inline-flex items-center px-2 py-1 mr-2  text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <FaInstagram size={25}></FaInstagram>
          </Link>
          <Link
            to={trainer?.socialLinks?.xLink}
            className="inline-flex items-center px-2 py-1 mr-2  text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <FaTwitter size={25}></FaTwitter>
          </Link>
        </div>

        {/* Time Slot */}
        <div>
          <div className="mt-2">
            <p className="w-fit mx-auto">Available Time in Hour</p>
            <div className="flex gap-2 w-fit mx-auto">
              <p>
                From: <span className="font-bold">{trainer?.startTime}</span>
              </p>
              <p>
                To: <span className="font-bold">{trainer?.endTime}</span>
              </p>
            </div>
            <div className="flex h-3 px-8">
              <div
                className={
                  trainer?.classes?.length >= 1
                    ? 'border-2 border-gray-600 w-6 bg-blue-600'
                    : 'border-2 border-gray-600 w-6'
                }
              ></div>
              <div
                className={
                  trainer?.classes?.length >= 2
                    ? 'border-2 border-gray-600 w-6 bg-blue-600'
                    : 'border-2 border-gray-600 w-6'
                }
              ></div>
              <div
                className={
                  trainer?.classes?.length >= 3
                    ? 'border-2 border-gray-600 w-6 bg-blue-600'
                    : 'border-2 border-gray-600 w-6'
                }
              ></div>
              <div
                className={
                  trainer?.classes?.length >= 4
                    ? 'border-2 border-gray-600 w-6 bg-blue-600'
                    : 'border-2 border-gray-600 w-6'
                }
              ></div>
              <div
                className={
                  trainer?.classes?.length >= 5
                    ? 'border-2 border-gray-600 w-6 bg-blue-600'
                    : 'border-2 border-gray-600 w-6'
                }
              ></div>
              <div
                className={
                  trainer?.classes?.length >= 6
                    ? 'border-2 border-gray-600 w-6 bg-blue-600'
                    : 'border-2 border-gray-600 w-6'
                }
              ></div>
              <div
                className={
                  trainer?.classes?.length >= 7
                    ? 'border-2 border-gray-600 w-6 bg-blue-600'
                    : 'border-2 border-gray-600 w-6'
                }
              ></div>
              <div
                className={
                  trainer?.classes?.length >= 8
                    ? 'border-2 border-gray-600 w-6 bg-blue-600'
                    : 'border-2 border-gray-600 w-6'
                }
              ></div>
            </div>
          </div>
          <div className=" flex px-8 ml-2 -mt-1">
            <span className="w-6">1</span>
            <span className="w-6">2</span>
            <span className="w-6">3</span>
            <span className="w-6">4</span>
            <span className="w-6">5</span>
            <span className="w-6">6</span>
            <span className="w-6">7</span>
            <span className="w-6">8</span>
          </div>
        </div>
        {/* Know More Button */}
        <Link to={trainer?._id}>
          <button
            type="button"
            className="text-white bg-gradient-to-r mt-2 from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
          >
            Know More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TrainerCard;
