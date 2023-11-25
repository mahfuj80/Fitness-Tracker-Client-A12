import BlogsCard from '../../../Components/HomePage/BlogsCard';
import blogsArticle from './BlogsData/BlogsData';

const Blogs = () => {
  return (
    <div>
      {blogsArticle?.map((blogArticle) => (
        <BlogsCard key={blogArticle?.id} blogArticle={blogArticle}></BlogsCard>
      ))}
      <div className="w-fit mx-auto my-8">
        <button className="btn w-fit mx-auto btn-sm btn-primary md:btn-primary md:btn">
          View Blogs
        </button>
      </div>
    </div>
  );
};

export default Blogs;
