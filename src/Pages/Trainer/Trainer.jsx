import { Link } from 'react-router-dom';
import SectionTitle from '../../Components/Shared/SectionTitle/SectionTitle';
import TrainerCard from '../../Components/TrainerPage/TrainerCard';
import useTrainers from '../../hooks/Trainers/useTrainers';
import Loader from '../../Components/Shared/Loading/Loader';

const Trainer = () => {
  const [trainers, loading] = useTrainers();

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <div className="py-4">
      <SectionTitle
        shortTitle={'Trainer'}
        longTitle={'Meet Our Trainers'}
        description={
          'Meet our expert trainers, each with a unique blend of passion and expertise. Explore their profiles for personalized fitness guidance, motivating sessions, and a journey to a healthier, stronger you.'
        }
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {trainers?.map((trainer) => (
          <TrainerCard key={trainer?._id} trainer={trainer}></TrainerCard>
        ))}
      </div>
      <div className="hero bg-base-200 mt-4  w-[90%] mx-auto md:w-[80%] rounded-lg">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Become Our Team Member</h1>
            <p className="py-6">
              Join our dynamic team! Elevate your career with opportunities for
              growth, collaboration, and impact. Become a valued member as we
              work together to inspire and shape a healthier future.
            </p>
            <Link to={'/be-trainer'}>
              <button className="btn btn-primary">Be a Trainer</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trainer;
