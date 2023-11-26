import FitnessClassCard from '../../../Components/HomePage/FitnessClassCard';
import fitnessClasses from './ClassesData/ClassesData';

const FeaturedClasses = () => {
  // console.log(fitnessClasses);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {fitnessClasses?.map((fitnessClass) => (
        <FitnessClassCard
          key={fitnessClass?.id}
          fitnessClass={fitnessClass}
        ></FitnessClassCard>
      ))}
    </div>
  );
};

export default FeaturedClasses;
