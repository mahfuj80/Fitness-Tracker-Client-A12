import SectionTitle from '../../../Components/Shared/SectionTitle/SectionTitle';
import About from '../AboutSection/About';
import Banner from '../BannerSection/Banner';
import Blogs from '../BlogsSection/Blogs';
import Faq from '../FaqSection/Faq';
import FeaturedClasses from '../FeaturedClassesSection/FeaturedClasses';
import Featured from '../FeaturedSection/Featured';
import Newsletter from '../NewsletterSection/Newsletter';
import OurTrainers from '../OurBestTrainersSection/OurTrainers';
import Review from '../SuccessStoriesSection/SuccessStories';

const Home = () => {
  return (
    <div>
      <Banner></Banner>

      {/* Featured Sections */}
      <SectionTitle
        shortTitle={'Featured'}
        longTitle={'Our Featured Programs'}
        description={
          'Explore our curated Fitness Fusion: Sculpting Body and Mind series, showcasing transformative workouts, expert insights, and wellness inspiration for all.'
        }
      ></SectionTitle>
      <Featured></Featured>

      {/* TODO */}
      {/* About Section */}
      <SectionTitle
        shortTitle={'About'}
        longTitle={'Know About Us'}
        description={
          'Explore our fitness haven, where passion meets expertise. Elevate your journey with tailored workouts, expert guidance, and a supportive community, thriving together.'
        }
      ></SectionTitle>
      <About></About>

      {/* TODO */}
      {/* Featured Classes Section */}
      <SectionTitle
        shortTitle={'Classes'}
        longTitle={'Our Featured Classes'}
        description={
          'Discover transformation fitness in our featured classes. From dynamic musculation to serene yoga, each class offers expert guidance for holistic well-being.'
        }
      ></SectionTitle>
      <FeaturedClasses></FeaturedClasses>

      {/* TODO CHANGES */}
      {/* Success Stories Section */}
      <SectionTitle
        shortTitle={'Success'}
        longTitle={'What Our Customer Says'}
        description={
          'Read firsthand accounts of satisfied customers praising the precision and convenience of their fitness tracker experiences on this website.'
        }
      ></SectionTitle>
      <Review></Review>

      {/* TODO Blog / Latest Article */}
      <SectionTitle
        shortTitle={'Blogs'}
        longTitle={'Read Our Latest Article'}
        description={
          'Stay informed and inspired with our latest articles. Explore health tips, workout routines, and wellness insights for a vibrant lifestyle.'
        }
      ></SectionTitle>
      <Blogs></Blogs>

      {/* TODO Newsletter Section */}
      <Newsletter></Newsletter>

      {/* Our Best Team Section */}
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
