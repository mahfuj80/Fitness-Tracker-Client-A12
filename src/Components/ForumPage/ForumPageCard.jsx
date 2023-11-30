/* eslint-disable react/prop-types */
import { BiLike } from 'react-icons/bi';
import { BiSolidDislike } from 'react-icons/bi';

const ForumPageCard = ({ forum }) => {
  console.log(forum);
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl pt-4 border dark:border-gray-700">
        <figure>
          <div className="avatar">
            <div className="w-24 mask mask-squircle">
              <img src={forum?.image} />
            </div>
          </div>
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">
            {forum?.name}
            <div className="badge badge-secondary uppercase">
              {forum?.userRole}
            </div>
          </h2>
          <h2 className="card-title">{forum?.title}</h2>
          <p>{forum?.description.slice(0, 100)}...</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline py-4 cursor-pointer">
              <BiLike size={23}></BiLike>{' '}
              <span className="pl-1">{forum?.like}</span>
            </div>
            <div className="badge badge-outline py-4 cursor-pointer">
              <BiSolidDislike size={23}></BiSolidDislike>{' '}
              <span className="pl-1">{forum?.dislike}</span>
            </div>
            <div className="badge badge-outline py-4 cursor-pointer">
              Details
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForumPageCard;
