import FitnessClassCard from '../../../Components/HomePage/FitnessClassCard';
import Loader from '../../../Components/Shared/Loading/Loader';
import NoDataAvailable from '../../../Components/Shared/NoDataAvailable/NoDataAvailable';
import useClasses from '../../../hooks/User/useClasses';

const FeaturedClasses = () => {
  const [classes, dataLoading] = useClasses();

  // get the latest 5 Blogs From Forum
  let fitnessClasses;
  if (classes.length > 5) {
    fitnessClasses = classes.slice(classes.length - 6, classes.length);
  } else {
    fitnessClasses = classes;
  }

  if (dataLoading) {
    return <Loader></Loader>;
  }

  if (classes.length < 1) {
    return (
      <NoDataAvailable
        message={'No Class Available Right Now'}
      ></NoDataAvailable>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {fitnessClasses?.map((fitnessClass) => (
          <FitnessClassCard
            key={fitnessClass?._id}
            fitnessClass={fitnessClass}
          ></FitnessClassCard>
        ))}
      </div>
    </>
  );
};

export default FeaturedClasses;
