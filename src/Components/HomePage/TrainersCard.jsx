/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';

const TrainersCard = ({ name, title, description, img }) => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto">
      <div className="flex flex-col items-center pb-10">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg mt-8"
          src={img}
          alt="Trainer_Image"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {name}
        </h5>
        <h5 className="mb-1 text-base font-medium text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="text-sm mx-2 text-center text-gray-500 dark:text-gray-400">
          {description}
        </p>
        <div className="mt-4 md:mt-6">
          <Link
            to={'/'}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrainersCard;
