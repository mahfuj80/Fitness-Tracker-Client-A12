import { useLottie } from 'lottie-react';
import errorAnimation from './ErrorAnimation/404_error.json';
const ErrorPage = () => {
  const options = {
    animationData: errorAnimation,
    loop: true,
  };

  const { View } = useLottie(options);

  return (
    <div>
      <h2>This is error Page</h2>
      <div className="w-96">{View}</div>
    </div>
  );
};

export default ErrorPage;
