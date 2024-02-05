import { Link } from 'react-router-dom';
import BlogsCard from '../../../Components/HomePage/BlogsCard';
import useForums from '../../../hooks/User/userForums';
import Loader from '../../../Components/Shared/Loading/Loader';
import NoDataAvailable from '../../../Components/Shared/NoDataAvailable/NoDataAvailable';

const Blogs = () => {
  const [forums, dataLoading] = useForums();

  // get the latest 5 Blogs From Forum
  let blogsArticle;
  if (forums.length > 5) {
    blogsArticle = forums.slice(forums.length - 6, forums.length);
  } else {
    blogsArticle = forums;
  }

  if (dataLoading) {
    return <Loader></Loader>;
  }

  if (forums.length < 1) {
    return (
      <NoDataAvailable
        message={'No Forum Available Right Now'}
      ></NoDataAvailable>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogsArticle?.map((blogArticle) => (
          <BlogsCard
            key={blogArticle?.id}
            blogArticle={blogArticle}
          ></BlogsCard>
        ))}
      </div>
      <div className="w-fit mx-auto my-8">
        <Link to={'/community'}>
          <button className="btn w-fit mx-auto btn-sm btn-primary md:btn-primary md:btn">
            View Blogs
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Blogs;
