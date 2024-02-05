import FitnessClassCard from '../../Components/HomePage/FitnessClassCard';
import Loader from '../../Components/Shared/Loading/Loader';
import NoDataAvailable from '../../Components/Shared/NoDataAvailable/NoDataAvailable';
import SectionTitle from '../../Components/Shared/SectionTitle/SectionTitle';
import useClasses from '../../hooks/User/useClasses';

const Classes = () => {
  const [classes, dataLoading] = useClasses();

  if (dataLoading) {
    return <Loader></Loader>;
  }
  if (classes.length < 1) {
    return <NoDataAvailable message={'No Classes Available'}></NoDataAvailable>;
  }
  return (
    <>
      <SectionTitle
        shortTitle={'Classes'}
        longTitle={'All Classes Here'}
        description={
          'Explore a world of learning on our Classes Page. From expert-led workshops to diverse subjects, our classes cater to all levels of enthusiasts. Enjoy flexible scheduling, interactive sessions, and certification opportunities'
        }
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {classes?.map((fitnessClass) => (
          <FitnessClassCard
            key={fitnessClass?._id}
            fitnessClass={fitnessClass}
          ></FitnessClassCard>
        ))}
      </div>
    </>
  );
};

export default Classes;
