import SectionTitle from '../../../Components/Shared/SectionTitle/SectionTitle';
import Faq from '../FaqSection/Faq';
import OurTrainers from '../OurBestTrainersSection/OurTrainers';
import Review from '../ReviewSection/Review';

const Home = () => {
  return (
    <div>
      {/* Review Section */}
      <SectionTitle
        shortTitle={'Review'}
        longTitle={'What Our Customer Says'}
        description={
          'Read firsthand accounts of satisfied customers praising the precision and convenience of their fitness tracker experiences on this website.'
        }
      ></SectionTitle>
      <Review></Review>

      {/* Our Best Trainers Section */}
      <SectionTitle
        shortTitle={'Trainers'}
        longTitle={'Our Best Trainers'}
        description={
          "Jim's trainers excel with personalized fitness plans, motivating clients to achieve goals through expert guidance, making workouts enjoyable and effective."
        }
      ></SectionTitle>
      <OurTrainers></OurTrainers>

      {/* Faq Sections */}
      <SectionTitle
        shortTitle={'Faq'}
        longTitle={'Any Questions? Look Here'}
        description={
          'If you have any questions or need assistance, this is the place to find answers. For inquiries or any clarifications, this is your go-to resource.'
        }
      ></SectionTitle>
      <Faq></Faq>
    </div>
  );
};

export default Home;
