import Loader from '../../../../Components/Shared/Loading/Loader';
import SectionTitle from '../../../../Components/Shared/SectionTitle/SectionTitle';
import useAllSubscribers from '../../../../hooks/Admin/useAllSubscribers';
import useAuth from '../../../../hooks/Auth/useAuth';

const AllSubscribers = () => {
  const [allSubscribers, dataLoading] = useAllSubscribers();
  const { loading } = useAuth();
  console.log(allSubscribers);

  if (loading || dataLoading) {
    return <Loader></Loader>;
  }
  return (
    <div>
      <SectionTitle
        shortTitle={'Subscribers'}
        longTitle={'Subscribed For NewsLetter'}
        description={
          'Below there have Email Address How Wanted to get Update about This Website. And Interest Abut Gym.'
        }
      ></SectionTitle>

      <div className="overflow-x-auto mx-4">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Join Date</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {allSubscribers?.map((subscriber, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{subscriber?.email}</td>
                <td>{subscriber?.date.slice(0, 16)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSubscribers;
