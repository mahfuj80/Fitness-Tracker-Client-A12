import AppliedTrainerAcceptRejectModal from '../../../../Components/Dashboard/Admin/AppliedTrainers/AppliedTrainerAcceptRejectModal';
import Loader from '../../../../Components/Shared/Loading/Loader';
import NoDataAvailable from '../../../../Components/Shared/NoDataAvailable/NoDataAvailable';
import SectionTitle from '../../../../Components/Shared/SectionTitle/SectionTitle';
import useAppliedTrainers from '../../../../hooks/Admin/useAppliedTrainers';
import useAuth from '../../../../hooks/Auth/useAuth';

const AppliedTrainers = () => {
  const { loading } = useAuth();
  const [appliedTrainers, dataLoading, refetch] = useAppliedTrainers();

  if (loading || dataLoading) {
    return <Loader></Loader>;
  }

  if (appliedTrainers?.length < 1) {
    return (
      <NoDataAvailable
        message={'No one Applied To Be A trainer'}
      ></NoDataAvailable>
    );
  }

  return (
    <>
      <div>
        <SectionTitle longTitle={'Applied To Be a Trainer'}></SectionTitle>
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {appliedTrainers?.map((trainer, index) => (
              <AppliedTrainerAcceptRejectModal
                key={trainer?._id}
                trainer={trainer}
                index={index}
                refetch={refetch}
              ></AppliedTrainerAcceptRejectModal>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AppliedTrainers;
