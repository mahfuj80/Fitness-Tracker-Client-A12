/* eslint-disable react/prop-types */
const SectionTitle = ({ shortTitle, longTitle, description }) => {
  return (
    <div className="-mx-4 flex flex-wrap mt-12">
      <div className="w-full px-4">
        <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
          <span className="mb-2 block text-lg font-semibold text-primary">
            {shortTitle}
          </span>
          <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
            {longTitle}
          </h2>
          <p className="text-base text-body-color">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
