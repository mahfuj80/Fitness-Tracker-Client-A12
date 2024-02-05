import ForumPageCard from '../../Components/ForumPage/ForumPageCard';
import Loader from '../../Components/Shared/Loading/Loader';
import NoDataAvailable from '../../Components/Shared/NoDataAvailable/NoDataAvailable';
import SectionTitle from '../../Components/Shared/SectionTitle/SectionTitle';
import useForums from '../../hooks/User/userForums';

const Community = () => {
  const [forum, dataLoading] = useForums();
  const forums = forum;

  if (dataLoading) {
    return <Loader></Loader>;
  }
  if (forum.length < 1) {
    return (
      <>
        <SectionTitle
          shortTitle={'Forum'}
          longTitle={'All Forums Here..'}
          description={
            'Engage in Vibrant Discussions and Build Connections on Our Forum Page: A Dynamic Online Community for Sharing Knowledge, Seeking Advice, and Connecting with Like-Minded Individuals Worldwide.'
          }
        ></SectionTitle>
        <NoDataAvailable
          message={'No Forum Available Right Now'}
        ></NoDataAvailable>
      </>
    );
  }
  return (
    <>
      <SectionTitle
        shortTitle={'Forum'}
        longTitle={'All Forums Here..'}
        description={
          'Engage in Vibrant Discussions and Build Connections on Our Forum Page: A Dynamic Online Community for Sharing Knowledge, Seeking Advice, and Connecting with Like-Minded Individuals Worldwide.'
        }
      ></SectionTitle>
      <div className="grid justify-center items-center grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 px-4">
        {forums?.map((forum) => (
          <ForumPageCard key={forum?._id} forum={forum}></ForumPageCard>
        ))}
      </div>
      <nav aria-label="Page navigation example" className="ml-4 my-8">
        <ul className="inline-flex -space-x-px text-base h-10">
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Previous
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              1
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              2
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-current="page"
              className="flex items-center justify-center px-4 h-10 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
            >
              3
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              4
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              5
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Community;
