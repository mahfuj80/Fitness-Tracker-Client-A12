import Loader from '../../../../Components/Shared/Loading/Loader';
import NoDataAvailable from '../../../../Components/Shared/NoDataAvailable/NoDataAvailable';
import useAllTrainers from '../../../../hooks/Admin/useAllTrainers';
import useAuth from '../../../../hooks/Auth/useAuth';

const AllTrainers = () => {
  const { loading } = useAuth();
  const [allTrainers, dataLoading] = useAllTrainers();

  console.log(allTrainers);
  if (loading || dataLoading) {
    return <Loader></Loader>;
  }

  if (allTrainers.length < 1) {
    return <NoDataAvailable message={'No Trainer Available'}></NoDataAvailable>;
  }

  return (
    <div>
      <h1>This is AllTrainers Page</h1>
    </div>
  );
};

export default AllTrainers;
