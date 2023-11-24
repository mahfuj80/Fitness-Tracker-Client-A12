import { useLottie } from 'lottie-react';
import loginAnimation from './animation/login_animation.json';
const LoginPage = () => {
  const options = {
    animationData: loginAnimation,
    loop: true,
  };

  const { View } = useLottie(options);

  return (
    <div>
      <h2>This Is Login Page</h2>
      {View}
    </div>
  );
};

export default LoginPage;
