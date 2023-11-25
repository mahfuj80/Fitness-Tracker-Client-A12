/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';

const FitnessClassCard = ({ fitnessClass }) => {
  return (
    <div className="card mx-auto card-compact bg-base-100 shadow-xl">
      <figure>
        <img
          className="h-[250px] rounded-xl w-full object-cover p-4"
          src={fitnessClass?.image}
          alt="Class_Image"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{fitnessClass?.title}</h2>
        <p>{fitnessClass?.description}</p>
        <p className="font-bold">{fitnessClass?.date}</p>
        <div className="card-actions justify-end">
          <Link>
            <button className="btn btn-primary">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FitnessClassCard;
