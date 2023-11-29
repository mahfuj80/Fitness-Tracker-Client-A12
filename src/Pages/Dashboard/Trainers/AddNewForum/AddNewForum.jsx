import toast from 'react-hot-toast';
import Loader from '../../../../Components/Shared/Loading/Loader';
import SectionTitle from '../../../../Components/Shared/SectionTitle/SectionTitle';
import useAuth from '../../../../hooks/Auth/useAuth';
import useAxiosSecure from '../../../../hooks/Axios/useAxiosSecure';
import useUserRole from '../../../../hooks/User/useUserRole';

const AddNewForum = () => {
  const { user, loading } = useAuth();
  const [role, dataLoading] = useUserRole();
  const axiosSecure = useAxiosSecure();
  const handleForumSubmit = (e) => {
    e.preventDefault();
    const title = e.target.forumTitle.value;
    const description = e.target.forumDescription.value;
    const date = new Date();
    const forumInfo = {
      email: user?.email,
      image: user?.photoURL,
      title,
      description,
      userRole: role.role,
      date,
    };
    axiosSecure.post('/forum', forumInfo).then((res) => {
      if (res?.data?.insertedId) {
        toast.success('Forum Added');
        const forumForm = document.getElementById('forumForm');
        forumForm.reset();
      }
    });
  };

  if (loading || dataLoading) {
    return <Loader></Loader>;
  }
  return (
    <>
      <SectionTitle
        shortTitle={'Forum'}
        longTitle={'Add New Forum'}
      ></SectionTitle>
      <form
        id="forumForm"
        onSubmit={handleForumSubmit}
        className="w-full md:px-8 px-4"
      >
        <label className="form-control w-full mb-8">
          <div className="label">
            <span className="label-text">Your Forum Title Here..</span>
          </div>
          <input
            type="text"
            name="forumTitle"
            required
            placeholder="Forum Title"
            className="input input-bordered input-accent w-full"
          />
        </label>
        <label className="form-control w-full mb-8">
          <div className="label">
            <span className="label-text">Your Forum Title Here..</span>
          </div>
          <textarea
            className="textarea textarea-accent w-full"
            name="forumDescription"
            required
            placeholder="Bio"
          ></textarea>
        </label>
        <div className="text-center mb-8">
          <input type="submit" value={'Submit'} className="btn btn-primary" />
        </div>
      </form>
    </>
  );
};

export default AddNewForum;
