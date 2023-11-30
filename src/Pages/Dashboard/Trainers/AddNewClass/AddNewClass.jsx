import toast from 'react-hot-toast';
import Loader from '../../../../Components/Shared/Loading/Loader';
import SectionTitle from '../../../../Components/Shared/SectionTitle/SectionTitle';
import useAuth from '../../../../hooks/Auth/useAuth';
import useAxiosSecure from '../../../../hooks/Axios/useAxiosSecure';
import useUserRole from '../../../../hooks/User/useUserRole';

const AddNewClass = () => {
  const { user, loading } = useAuth();
  const [role, dataLoading] = useUserRole();
  const axiosSecure = useAxiosSecure();
  const handleClassSubmit = (e) => {
    e.preventDefault();
    const title = e.target.classTitle.value;
    const description = e.target.classDescription.value;
    const classTime = e.target.classTime.value;
    const classThumbnail = e.target.classThumbnail.value;
    const date = new Date();
    const classInfo = {
      name: user?.displayName,
      email: user?.email,
      image: user?.photoURL,
      title,
      description,
      classThumbnail,
      userRole: role.role,
      date,
      classTime,
    };

    if (classTime === '0') {
      return toast.error('Please Select classTime');
    }

    axiosSecure.post('/class', classInfo).then((res) => {
      if (res?.data?.insertedId) {
        toast.success('class Added');
        const classForm = document.getElementById('classForm');
        classForm.reset();
      }
    });
  };

  if (loading || dataLoading) {
    return <Loader></Loader>;
  }
  return (
    <>
      <SectionTitle
        shortTitle={'class'}
        longTitle={'Add New Class'}
      ></SectionTitle>
      <form
        id="classForm"
        onSubmit={handleClassSubmit}
        className="w-full md:px-8 px-4"
      >
        <label className="form-control w-full mb-8">
          <div className="label">
            <span className="label-text">Your class Title Here..</span>
          </div>
          <input
            type="text"
            name="classTitle"
            required
            placeholder="class Title"
            className="input input-bordered input-accent w-full"
          />
        </label>

        <label className="form-control w-full mb-8">
          <div className="label">
            <span className="label-text">Your class Thumbnail URL..</span>
          </div>
          <input
            type="text"
            name="classThumbnail"
            required
            placeholder="Thumbnail URL.."
            className="input input-bordered input-accent w-full"
          />
        </label>

        <label className="form-control w-full mb-8">
          <div className="label">
            <span className="label-text">Your class Description Here..</span>
          </div>
          <textarea
            className="textarea textarea-accent w-full"
            name="classDescription"
            required
            placeholder="Description..."
          ></textarea>
        </label>

        <label className="form-control w-full mb-8">
          <div className="label">
            <span className="label-text">class classTime</span>
          </div>
          <select
            required
            name="classTime"
            className="select select-bordered border-accent"
            defaultValue={'0'}
          >
            <option value={'0'}>Select Time</option>
            <option value="5:00 am">5:00 am</option>
            <option value="6:00 am">6:00 am</option>
            <option value="7:00 am">7:00 am</option>
            <option value="8:00 am">8:00 am</option>
            <option value="9:00 am">9:00 am</option>
            <option value="4:00 pm">4:00 pm</option>
            <option value="5:00 pm">5:00 pm</option>
            <option value="6:00 pm">6:00 pm</option>
            <option value="7:00 pm">7:00 pm</option>
            <option value="8:00 pm">8:00 pm</option>
            <option value="9:00 pm">9:00 pm</option>
            <option value="10:00 pm">10:00 pm</option>
          </select>
        </label>
        <div className="text-center mb-8">
          <input type="submit" value={'Submit'} className="btn btn-primary" />
        </div>
      </form>
    </>
  );
};

export default AddNewClass;
