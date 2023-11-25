/* eslint-disable react/prop-types */
const FeaturedCard = ({ featuredItem }) => {
  return (
    <div className="w-full mx-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 pt-8 ">
      <div className="flex flex-col items-center pb-10">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={featuredItem?.img}
          alt="Featured_Card_Image"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {featuredItem?.title}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400 text-center px-4">
          {featuredItem?.description}
        </span>
      </div>
    </div>
  );
};

export default FeaturedCard;
