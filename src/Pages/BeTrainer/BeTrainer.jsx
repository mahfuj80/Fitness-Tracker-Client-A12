import toast from 'react-hot-toast';
import Loader from '../../Components/Shared/Loading/Loader';
import SectionTitle from '../../Components/Shared/SectionTitle/SectionTitle';
import useAuth from '../../hooks/Auth/useAuth';

const BeTrainer = () => {
  const { user, loading } = useAuth();
  const handleBeTrainerForm = (e) => {
    e.preventDefault();
    let skills = [];
    const agree = e.target.agree.checked;
    const title = e.target.title.value;

    if (!agree) {
      toast.error('Please Accept The Trams And Condition');
      return;
    }

    if (title === '0') {
      toast.error('Please Select Title');
      return;
    }

    const fullName = e.target.fullName.value;
    const age = e.target.age.value;
    const email = e.target.email.value;
    const availableTimeInDay = e.target.availableTimeInDay.value;
    const availableTimeInWeek = e.target.availableTimeInWeek.value;
    const profileImage = e.target.profileImage.value;
    const facebookLink = e.target.facebookLink.value;
    const instagramLink = e.target.instagramLink.value;
    const xLink = e.target.xLink.value;
    const experience = e.target.experience.value;

    const motivation = e.target.motivation.checked;
    const flexibility = e.target.flexibility.checked;
    const instruction = e.target.instruction.checked;
    const expertise = e.target.expertise.checked;

    if (motivation) {
      const motivation = e.target.motivation.value;
      skills.push(motivation);
    }
    if (flexibility) {
      const flexibility = e.target.flexibility.value;
      skills.push(flexibility);
    }
    if (instruction) {
      const instruction = e.target.instruction.value;
      skills.push(instruction);
    }
    if (expertise) {
      const expertise = e.target.expertise.value;
      skills.push(expertise);
    }

    const trainerInfo = {
      fullName,
      email,
      age,
      profileImage,
      availableTimeInDay,
      availableTimeInWeek,
      skills,
      title,
      experience,
      socialLinks: {
        facebookLink,
        instagramLink,
        xLink,
      },
    };

    console.log(trainerInfo);
  };
  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <>
      <SectionTitle
        shortTitle={'Trainer'}
        longTitle={'Be A Trainer'}
        description={
          'Passionate about fitness? Join us as a trainer! Inspire clients, shape wellness journeys, and bepart of a dynamic team committed to fostering health and positive transformations. Let`s elevate together!'
        }
      ></SectionTitle>
      <div className="pb-12">
        <form onSubmit={handleBeTrainerForm} className="px-4">
          <div className="grid gap-6 mb-6 md:grid-cols-2 ">
            {/* Full Name */}
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Full-Name
              </label>
              <input
                type="text"
                id="first_name"
                name="fullName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
               focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Name"
                required
              />
            </div>
            {/* Age */}
            <div>
              <label
                htmlFor="Age"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Age
              </label>
              <input
                name="age"
                type="number"
                min={18}
                id="Age"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
               focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="18 <"
                required
              />
            </div>
            {/* Available Time In a Day */}
            <div>
              <label
                htmlFor="availableTimeInDay"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Available Time In a Day (Hour)
              </label>
              <input
                name="availableTimeInDay"
                type="number"
                id="availableTimeInDay"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
               focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="01-08"
                min={1}
                max={8}
                required
              />
            </div>
            {/* Available Time In a week */}
            <div>
              <label
                htmlFor="availableTimeInWeek"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Available Time In a Week (Hour)
              </label>
              <input
                name="availableTimeInWeek"
                type="number"
                id="availableTimeInWeek"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
               focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="01-56"
                max={56}
                min={4}
                required
              />
            </div>
            {/* Title */}
            <div>
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select Yor Title
              </label>
              <select
                id="title"
                name="title"
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected value={0}>
                  Choose Your Title
                </option>
                <option value="Fitness Architect">Fitness Architect</option>
                <option value="Strength Specialist">Strength Specialist</option>
                <option value="Wellness Coach">Wellness Coach</option>
                <option value="Holistic Trainer">Holistic Trainer</option>
                <option value="Body Transformation Expert">
                  Body Transformation Expert
                </option>
                <option value="Functional Fitness Guru">
                  Functional Fitness Guru
                </option>
              </select>
            </div>
            {/* Facebook Profile Link */}
            <div>
              <label
                htmlFor="facebookLink"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Facebook Profile Link
              </label>
              <input
                type="text"
                id="facebookLink"
                name="facebookLink"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
               focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Facebook Profile Link"
                required
              />
            </div>
            {/* Instagram Profile Link */}
            <div>
              <label
                htmlFor="instagramLink"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Instagram Profile Link
              </label>
              <input
                type="text"
                id="instagramLink"
                name="instagramLink"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
               focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Instagram Profile Link"
                required
              />
            </div>
            {/* x Profile LInk */}
            <div>
              <label
                htmlFor="xLink"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                X Profile Link
              </label>
              <input
                type="text"
                id="xLink"
                name="xLink"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
               focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="X Profile Link"
                required
              />
            </div>
            {/* Email Read Only */}
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email address (Read Only)
              </label>
              <input
                type="email"
                id="email"
                defaultValue={user?.email}
                disabled
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
             focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
              dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="john.doe@company.com"
                required
              />
            </div>
            {/* Years Of Experience */}
            <div>
              <label
                htmlFor="experience"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Years Of Experience
              </label>
              <input
                type="number"
                id="experience"
                name="experience"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
               focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Years Of Experience"
                required
                max={100}
              />
            </div>
          </div>
          {/* Profile Image */}
          <div className="mb-6">
            <label
              htmlFor="profileImage"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Profile Image URL
            </label>
            <input
              type="text"
              id="profileImage"
              defaultValue={user?.photoURL}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
             focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
              dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="url"
              required
            />
          </div>
          {/* Skills */}
          <div>
            <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
              Skills
            </h3>
            <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                <div className="flex items-center ps-3">
                  <input
                    id="motivation"
                    type="checkbox"
                    value="Motivation"
                    name="motivation"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="motivation"
                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Motivation
                  </label>
                </div>
              </li>
              <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                <div className="flex items-center ps-3">
                  <input
                    id="flexibility"
                    type="checkbox"
                    value="Flexibility"
                    name="flexibility"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="flexibility"
                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Flexibility
                  </label>
                </div>
              </li>
              <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                <div className="flex items-center ps-3">
                  <input
                    id="instruction"
                    type="checkbox"
                    value="Instruction"
                    name="instruction"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="instruction"
                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Instruction
                  </label>
                </div>
              </li>
              <li className="w-full dark:border-gray-600">
                <div className="flex items-center ps-3">
                  <input
                    id="expertise"
                    type="checkbox"
                    value="Expertise"
                    name="expertise"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="expertise"
                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Expertise
                  </label>
                </div>
              </li>
            </ul>
          </div>

          {/* Trams And Condition */}
          <div className="flex items-start my-6">
            <div className="flex items-center h-5">
              <input
                id="agree"
                type="checkbox"
                name="agree"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                // required
              />
            </div>
            <label
              htmlFor="agree"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              I agree with the{' '}
              <a
                href="#"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                terms and conditions
              </a>
              .
            </label>
          </div>
          {/* Submit Button */}
          <div className="text-center mb-4">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-12 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Apply
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default BeTrainer;
