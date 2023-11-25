import TrainersCard from '../../../Components/HomePage/TrainersCard';

const OurTrainers = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <TrainersCard
        name={'Alexander'}
        title={'Personalized Fitness Architect'}
        description={
          'Craft your unique fitness blueprint with tailored workout plans and expert guidance, ensuring your journey is as individual as you are.'
        }
        img={
          'https://img.freepik.com/free-photo/serious-attractive-man-is-doing-exercises-with-training-apparatus-dark-gym-club_613910-14549.jpg?w=740&t=st=1700904017~exp=1700904617~hmac=d88c95daff0801388324c8ecf5dc587b1c6f0097cd97a417f9e3d621845f894e'
        }
      ></TrainersCard>
      <TrainersCard
        name={'Benjamin'}
        title={'Empowerment Coach'}
        description={
          'Transform your mindset and physique under the guidance of an empowerment coach. Cultivate self-confidence and resilience through personalized fitness routines and motivational support.'
        }
        img={
          'https://img.freepik.com/free-photo/muscular-man-looking-dumbbell_1163-796.jpg?w=360&t=st=1700904008~exp=1700904608~hmac=cfc6717fae575519f3dd62f0adf62bc6302129bf96825a42d4996cb9464953bb'
        }
      ></TrainersCard>
      <TrainersCard
        name={'Christopher'}
        title={'Holistic Health Specialist'}
        description={
          'Embrace a holistic approach to health with a specialist who integrates fitness, nutrition, and mindfulness. Achieve optimal well-being with personalized strategies for a balanced life.'
        }
        img={
          'https://qph.cf2.quoracdn.net/main-qimg-5f67663d43e1dd4f72afd791d2d2a519-lq'
        }
      ></TrainersCard>
    </div>
  );
};

export default OurTrainers;
