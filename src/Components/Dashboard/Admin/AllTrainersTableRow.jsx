/* eslint-disable react/prop-types */
const AllTrainersTableRow = ({ trainer, index }) => {
  return (
    <div>
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
        <th>{}</th>
        <th>
          <button className="btn btn-ghost">{trainer.startDate}</button>
        </th>
      </tr>
    </div>
  );
};

export default AllTrainersTableRow;
