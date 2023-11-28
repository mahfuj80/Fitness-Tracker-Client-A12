/* eslint-disable react/prop-types */
const BeTrainerFormCategory = ({ title, name }) => {
  const startTime = `${name}StartTime`;
  const endTime = `${name}EndTime`;

  return (
    <div className="border-2 rounded-lg p-4">
      <div className="flex items-center justify-center gap-2  mt-2">
        <p className="text-center font-bold">{title}</p>
        <input type="checkbox" name={name} className="checkbox checkbox-md" />
      </div>
      <div className="flex justify-between gap-4 mt-4">
        <div className="w-1/2">
          <label
            htmlFor={startTime}
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            From
          </label>
          <select
            id={startTime}
            name={startTime}
            defaultValue={'0'}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value={'0'}>Select Start Time</option>
            <option value="5:00 am">5:00 am</option>
            <option value="6:00 am">6:00 am</option>
            <option value="7:00 am">7:00 am</option>
            <option value="8:00 am">8:00 am</option>
            <option value="9:00 am">9:00 am</option>
            <option value="4:00 pm">4:00 pm</option>
            <option value="5:00 pm">5:00 pm</option>
            <option value="6:00 pm">6:00 pm</option>
            <option value="7:00 pm">7:00 pm</option>
            <option value="8:00 pm">8:00 pm</option>
            <option value="9:00 pm">9:00 pm</option>
            <option value="10:00 pm">10:00 pm</option>
          </select>
        </div>
        <div className="w-1/2">
          <label
            htmlFor={endTime}
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            To
          </label>
          <select
            id={endTime}
            name={endTime}
            defaultValue={'0'}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value={'0'}>Select End Time</option>
            <option value="6:00 am">6:00 am</option>
            <option value="7:00 am">7:00 am</option>
            <option value="8:00 am">8:00 am</option>
            <option value="9:00 am">9:00 am</option>
            <option value="10:00 am">10:00 am</option>
            <option value="5:00 pm">5:00 pm</option>
            <option value="6:00 pm">6:00 pm</option>
            <option value="7:00 pm">7:00 pm</option>
            <option value="8:00 pm">8:00 pm</option>
            <option value="9:00 pm">9:00 pm</option>
            <option value="10:00 pm">10:00 pm</option>
            <option value="11:00 pm">11:00 pm</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default BeTrainerFormCategory;
