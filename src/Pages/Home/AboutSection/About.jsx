import aboutImage from '../../../assets/images/About/about.jpg';

const About = () => {
  return (
    <div className="flex flex-col md:flex-row  dark:bg-gray-900 w-[100vw]">
      <div className="w-full md:w-1/2">
        <img
          className="object-cover w-full h-full bg-no-repeat md:ml-8 rounded-lg"
          src={aboutImage}
          alt="Image"
        />
      </div>
      <div className="bg-[#212a39] text-white md:w-1/2 p-4 mx-4 md:-ml-20 -mt-20 rounded-lg md:my-10 h-[80%]">
        <p>About Us</p>
        <div className="mt-2">
          <h1 className="text-2xl font-bold">
            Here is all You need to know About us.
          </h1>
          <h1 className="font-bold mt-4 text-center text-lg">Our Mission</h1>
          <p>
            Elaborate on your mission and what sets your company apart.
            Emphasize the impact or value you aim to bring to your audience.
          </p>
          <h1 className="font-bold mt-4 text-center text-lg">Why Choose Us?</h1>
          <ul className="list-disc ml-6">
            <li>
              Expertise: Our team brings years of experience and expertise to
              deliver top-notch [services/products].
            </li>
            <li>
              Innovation: We are committed to staying at the forefront of
              [industry/field] trends, ensuring you receive the latest and best.
            </li>
          </ul>
          <h1 className="font-bold mt-2 text-center mb-4 text-lg">
            Meet the Team
          </h1>
          <div className="grid grid-cols-4 w-fit mx-auto gap-8 mb-8">
            <div className="avatar block">
              <div className="w-20 rounded">
                <img
                  src="https://qph.cf2.quoracdn.net/main-qimg-5f67663d43e1dd4f72afd791d2d2a519-lq"
                  alt="Team_Member_Image"
                />
              </div>
              <p className="font-semibold text-center">Christopher</p>
            </div>
            <div className="avatar block">
              <div className="w-20 rounded">
                <img
                  src="https://img.freepik.com/free-photo/muscular-man-looking-dumbbell_1163-796.jpg?w=360&t=st=1700904008~exp=1700904608~hmac=cfc6717fae575519f3dd62f0adf62bc6302129bf96825a42d4996cb9464953bb"
                  alt="Team_Member_Image"
                />
              </div>
              <p className="font-semibold text-center">Benjamin</p>
            </div>
            <div className="avatar block">
              <div className="w-20 rounded">
                <img
                  src="https://img.freepik.com/free-photo/serious-attractive-man-is-doing-exercises-with-training-apparatus-dark-gym-club_613910-14549.jpg?w=740&t=st=1700904017~exp=1700904617~hmac=d88c95daff0801388324c8ecf5dc587b1c6f0097cd97a417f9e3d621845f894e"
                  alt="Team_Member_Image"
                />
              </div>
              <p className="font-semibold text-center">Alexander</p>
            </div>
            <div className="avatar block">
              <div className="w-20 rounded">
                <img
                  src="https://plus.unsplash.com/premium_photo-1661265933107-85a5dbd815af?q=80&w=1418&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Team_Member_Image"
                />
              </div>
              <p className="font-semibold text-center">Sophia</p>
            </div>
          </div>
          <p className="mt-2 text-center">
            Thank you for choosing [Fitness Tracker]. We look forward to being a
            part of your [customer/client] journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
