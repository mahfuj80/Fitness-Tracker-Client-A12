/* eslint-disable react/prop-types */
const AllTrainersTableRow = ({ trainer, index }) => {
  const startDate = trainer?.startDate;
  const presentDate = new Date();
  const date1 = new Date(startDate);
  const date2 = new Date(presentDate);

  // Calculate the difference in milliseconds
  const timeDifference = date2 - date1;

  // Convert milliseconds to days
  const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  const handleTrainersPayment = () => {
    console.log('handle Trainers Payment');
  };

  return (
    <>
      <tr key={trainer?._id}>
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
        <td className="font-bold text-lg">{trainer?.experience} Years</td>
        <th>{daysDifference} Days</th>
        <th>
          <button
            onClick={() => handleTrainersPayment()}
            className={
              daysDifference >= 30 ? 'btn btn-primary' : 'btn btn-disabled'
            }
          >
            Pay
          </button>
        </th>
        <th>
          {daysDifference > 30 ? (
            <>
              <span className="px-2 py-1 bg-red-400 text-white hover:bg-red-600 rounded-lg">
                Pending
              </span>
            </>
          ) : (
            <>
              <span className="px-2 py-1 bg-green-400 text-white hover:bg-green-600 rounded-lg">
                Paid
              </span>
            </>
          )}
        </th>
      </tr>
    </>
  );
};

export default AllTrainersTableRow;
