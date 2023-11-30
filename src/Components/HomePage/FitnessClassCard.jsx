/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';

const FitnessClassCard = ({ fitnessClass }) => {
  return (
    <div className="card mx-auto card-compact bg-base-100 shadow-xl">
      <figure>
        <img
          className="h-[250px] rounded-xl w-full object-cover p-4"
          src={fitnessClass?.classThumbnail}
          alt="Class_Image"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{fitnessClass?.title}</h2>
        <p>{fitnessClass?.description}</p>
        <p className="font-bold">Work Days at {fitnessClass?.classTime}</p>
        <div className="card-actions justify-end">
          <Link to={'/trainer'}>
            <button className="btn btn-primary">Book</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FitnessClassCard;
