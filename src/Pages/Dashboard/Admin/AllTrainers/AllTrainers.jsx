import AllTrainersTableRow from '../../../../Components/Dashboard/Admin/AllTrainers/AllTrainersTableRow';
import Loader from '../../../../Components/Shared/Loading/Loader';
import NoDataAvailable from '../../../../Components/Shared/NoDataAvailable/NoDataAvailable';
import SectionTitle from '../../../../Components/Shared/SectionTitle/SectionTitle';
import useAllTrainers from '../../../../hooks/Admin/useAllTrainers';
import useAuth from '../../../../hooks/Auth/useAuth';

const AllTrainers = () => {
  const { loading } = useAuth();
  const [allTrainers, dataLoading] = useAllTrainers();

  console.log(allTrainers[0]?.startDate);
  if (loading || dataLoading) {
    return <Loader></Loader>;
  }

  if (allTrainers.length < 1) {
    return <NoDataAvailable message={'No Trainer Available'}></NoDataAvailable>;
  }

  return (
    <>
      <div>
        <SectionTitle longTitle={'All Trainer'}></SectionTitle>
      </div>
      <div className="overflow-x-auto mx-4">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-lg">
              <th>#</th>
              <th>Name, Image & Title</th>
              <th>Skills</th>
              <th>Experience</th>
              <th>Payment Due</th>
              <th>Pay</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {allTrainers?.map((trainer, index) => (
              <AllTrainersTableRow
                key={trainer?._id}
                trainer={trainer}
                index={index}
              ></AllTrainersTableRow>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllTrainers;
