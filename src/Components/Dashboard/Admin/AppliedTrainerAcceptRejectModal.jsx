/* eslint-disable react/prop-types */

import { FaEdit } from 'react-icons/fa';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/Axios/useAxiosSecure';

const AppliedTrainerAcceptRejectModal = ({ trainer, index, refetch }) => {
  const axiosSecure = useAxiosSecure();
  //  Accept This
  const handleAppliedTrainerAccept = (id, email) => {
    document.getElementById(email).click();
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: 'Are you sure?',
        text: 'You want to Make Trainer?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes Accept',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          // /admin/accept-applied-trainer/:id
          axiosSecure
            .post(`/admin/accept-applied-trainer/${id}`, trainer)
            .then((res) => {
              if (res.data.acknowledge) {
                refetch();
                swalWithBootstrapButtons.fire({
                  title: 'Accepted',
                  text: `You Make ${trainer?.fullName} Trainer`,
                  icon: 'success',
                });
              }
            });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: 'Cancelled',
            text: `Please Recheck ${trainer?.name} & try again`,
            icon: 'error',
          });
        }
      });
  };

  // Handle Reject Trainer
  const handleAppliedTrainerReject = (id, email) => {
    document.getElementById(email).click();
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: 'Are you sure?',
        text: 'You want to Make Trainer?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes Accept',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          console.log(id);
          refetch();

          swalWithBootstrapButtons.fire({
            title: 'Deleted!',
            text: `You Make ${trainer?.fullName} Trainer`,
            icon: 'success',
          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: 'Cancelled',
            text: `Please Recheck ${trainer?.name} & try again`,
            icon: 'error',
          });
        }
      });
  };

  return (
    <>
      <tr>
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
        <th>
          <button
            onClick={() =>
              document.getElementById(`${trainer?._id}`).showModal()
            }
            className="btn btn-ghost"
          >
            <FaEdit size={20}></FaEdit>
          </button>
        </th>
      </tr>

      <dialog
        id={`${trainer?._id}`}
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <div className="card bg-base-100">
            <div className="card-body items-center text-center">
              <h2 className="card-title text-2xl">{trainer?.fullName}</h2>
              <div className="avatar">
                <div className="w-24 rounded">
                  <img src={trainer?.profileImage} />
                </div>
              </div>
              <div className="flex text-xl">
                <span className="font-bold">Skills: </span>
                {trainer?.skills?.map((skill) => (
                  <span key={skill}>{skill},</span>
                ))}
              </div>
              <p className="text-xl">
                <span className="font-bold">Title:</span> {trainer?.title}
              </p>
              <p className="text-xl">
                <span className="font-bold">Experience:</span>{' '}
                {trainer?.experience} years
              </p>
              <p className="text-xl">
                <span className="font-bold">Email:</span> {trainer?.email}
              </p>
              <p className="text-xl">
                <span className="font-bold">Age:</span> {trainer?.age}
              </p>
              <div className="flex gap-2">
                <Link to={trainer?.socialLinks.facebookLink}>
                  <button className="btn btn-md btn-ghost">
                    <FaFacebook size={25}></FaFacebook>
                  </button>
                </Link>
                <Link to={trainer?.socialLinks.instagramLink}>
                  <button className="btn btn-md btn-ghost">
                    <FaInstagram size={25}></FaInstagram>
                  </button>
                </Link>
                <Link to={trainer?.socialLinks.xLink}>
                  <button className="btn btn-md btn-ghost">
                    <FaTwitter size={25}></FaTwitter>
                  </button>
                </Link>
              </div>
              <h2 className="card-title text-2xl">Want to Train</h2>
              <div className="flex gap-4 flex-wrap border-2 p-2 rounded-lg justify-center items-center">
                {trainer?.classes?.map((singleClass) => (
                  <div key={singleClass?.category}>
                    <div>
                      <h1 className="text-xl font-bold">
                        {singleClass?.category}
                      </h1>
                      <p className="text-sm">
                        <span className="font-bold">From:</span>
                        {singleClass?.startTime}
                        <span className="font-bold">To:</span>
                        {singleClass?.endTime}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="card-actions">
                <button
                  onClick={() =>
                    handleAppliedTrainerAccept(trainer?._id, trainer?.email)
                  }
                  className="btn btn-primary"
                >
                  Accept
                </button>
                <button
                  onClick={() =>
                    handleAppliedTrainerReject(trainer?._id, trainer?.email)
                  }
                  className="btn bg-red-600 text-white hover:bg-red-800"
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button
                id={trainer?.email}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default AppliedTrainerAcceptRejectModal;
