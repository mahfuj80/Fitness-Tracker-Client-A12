import { useLottie } from 'lottie-react';
import errorAnimation from './animation/404_error.json';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const ErrorPage = () => {
  const options = {
    animationData: errorAnimation,
    loop: true,
  };

  const { View } = useLottie(options);

  return (
    <div>
      <div>
        <Helmet>
          <title>Fitness Tracker | Error</title>
        </Helmet>
        <div className="h-full min-h-screen w-full flex items-center justify-center bg-slate-100">
          <div className="text-center w-fit mx-auto bg-[#13192a] p-10 rounded-lg space-y-3">
            <div className="w-[80%] pb-4 mx-auto">{View}</div>
            <Link to={'/'}>
              <button className="btn btn-sm lg:btn-lg btn-primary font-bold">
                Go Back to Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
