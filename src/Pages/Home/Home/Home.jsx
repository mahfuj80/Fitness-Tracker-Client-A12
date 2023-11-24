import SectionTitle from '../../../Components/Shared/SectionTitle/SectionTitle';
import OurTrainers from '../OurTrainersSection/OurTrainers';
import Review from '../ReviewSection/Review';

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <Review></Review>
      <SectionTitle
        shortTitle={'Trainers'}
        longTitle={'Our Best Trainers'}
        description={
          "Jim's trainers excel with personalized fitness plans, motivating clients to achieve goals through expert guidance, making workouts enjoyable and effective."
        }
      ></SectionTitle>
      <OurTrainers></OurTrainers>
    </div>
  );
};

export default Home;
