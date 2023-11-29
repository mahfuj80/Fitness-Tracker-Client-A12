import Loader from '../../../../Components/Shared/Loading/Loader';
import NoDataAvailable from '../../../../Components/Shared/NoDataAvailable/NoDataAvailable';
import SectionTitle from '../../../../Components/Shared/SectionTitle/SectionTitle';
import useAppliedTrainers from '../../../../hooks/Admin/useAppliedTrainers';
import useAuth from '../../../../hooks/Auth/useAuth';
import { FaEdit } from 'react-icons/fa';

const AppliedTrainers = () => {
  const { loading } = useAuth();
  const [appliedTrainers, dataLoading] = useAppliedTrainers();

  if (loading || dataLoading) {
    return <Loader></Loader>;
  }

  if (appliedTrainers?.length < 1) {
    return (
      <NoDataAvailable
        message={'No one Applied For Be A trainer'}
      ></NoDataAvailable>
    );
  }

  console.log(appliedTrainers);

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
              <tr key={index}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={trainer?.profileImage} alt="Trainer_Image" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{trainer?.fullName}</div>
                      <div className="text-sm opacity-50">{trainer?.title}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {trainer?.skills?.map((skill) => (
                    <span key={skill}>{skill},</span>
                  ))}
                </td>
                <td className="font-bold text-lg">
                  {trainer?.experience} Years
                </td>
                <th>
                  <button className="btn btn-ghost">
                    <FaEdit size={20}></FaEdit>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AppliedTrainers;
