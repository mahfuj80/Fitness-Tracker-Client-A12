import ForumPageCard from '../../Components/ForumPage/ForumPageCard';
import Loader from '../../Components/Shared/Loading/Loader';
import SectionTitle from '../../Components/Shared/SectionTitle/SectionTitle';
import useAuth from '../../hooks/Auth/useAuth';
import useForums from '../../hooks/User/userForums';

const Community = () => {
  const { loading } = useAuth();
  const [forum, dataLoading] = useForums();
  const forums = forum;

  if (dataLoading || loading) {
    return <Loader></Loader>;
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
    </>
  );
};

export default Community;
