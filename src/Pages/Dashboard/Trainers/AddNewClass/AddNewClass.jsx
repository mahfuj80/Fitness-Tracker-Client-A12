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
  const handleclassSubmit = (e) => {
    e.preventDefault();
    const title = e.target.classTitle.value;
    const description = e.target.classDescription.value;
    const category = e.target.category.value;
    const date = new Date();
    const classInfo = {
      name: user?.displayName,
      email: user?.email,
      image: user?.photoURL,
      title,
      description,
      userRole: role.role,
      date,
      category,
      like: 0,
      dislike: 0,
    };

    if (category === '0') {
      return toast.error('Please Select Category');
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
        onSubmit={handleclassSubmit}
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
            <span className="label-text">Your class Description Here..</span>
          </div>
          <textarea
            className="textarea textarea-accent w-full"
            name="classDescription"
            required
            placeholder="Bio"
          ></textarea>
        </label>

        <label className="form-control w-full mb-8">
          <div className="label">
            <span className="label-text">class Category</span>
          </div>
          <select
            required
            name="category"
            className="select select-bordered border-accent"
            defaultValue={'0'}
          >
            <option value={'0'}>Pick one</option>
            <option value={'body'}>Body</option>
            <option value={'health'}>Health</option>
            <option value={'Nature'}>Nature</option>
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
