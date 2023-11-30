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
    const category = e.target.category.value;
    const thumbnail = e.target.thumbnail.value;
    const date = new Date();
    const forumInfo = {
      name: user?.displayName,
      email: user?.email,
      thumbnail,
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
            <span className="label-text">Thumbnail Image URL..</span>
          </div>
          <input
            type="text"
            name="thumbnail"
            required
            placeholder="Thumbnail URL.."
            className="input input-bordered input-accent w-full"
          />
        </label>
        <label className="form-control w-full mb-8">
          <div className="label">
            <span className="label-text">Your Forum Description Here..</span>
          </div>
          <textarea
            className="textarea textarea-accent w-full"
            name="forumDescription"
            required
            placeholder="Bio"
          ></textarea>
        </label>

        <label className="form-control w-full mb-8">
          <div className="label">
            <span className="label-text">Forum Category</span>
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

export default AddNewForum;
