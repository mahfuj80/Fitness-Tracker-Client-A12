import { Link } from 'react-router-dom';

const OurTrainers = () => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col items-center pb-10">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
          alt="Bonnie image"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          Bonnie Green
        </h5>
        <h5 className="mb-1 text-base font-medium text-gray-900 dark:text-white">
          Bonnie Green
        </h5>
        <p className="text-sm mx-2 text-center text-gray-500 dark:text-gray-400">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi eaque
          neque alias amet nulla asperiores fugit, voluptatem necessitatibus
          dolore eligendi!
        </p>
        <div className="mt-4 md:mt-6">
          <Link className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurTrainers;
