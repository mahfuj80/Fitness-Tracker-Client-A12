import { FaGoogle } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import useAuth from '../../hooks/Auth/useAuth';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../hooks/Axios/useAxiosPublic';

const SocialLogin = () => {
  const axiosPublic = useAxiosPublic();
  const { googleSignIn, githubSignIn } = useAuth();
  const navigate = useNavigate();
  const handleGoogle = () => {
    googleSignIn()
      .then((result) => {
        console.log(result?.user);
        const userInfo = {
          name: result?.user?.displayName,
          email: result?.user?.email,
          image: result?.user?.photoURL,
          role: 'user',
        };
        axiosPublic.post('/users', userInfo).then((res) => {
          Swal.fire('Logged In', 'You Successfully Logged In', 'success');
          console.log(res?.data);
          navigate(location?.state ? location.state : '/');
        });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        Swal.fire('Something Went Wrong!!', `${errorMessage}`, 'error');
      });
  };

  const handleGithub = () => {
    githubSignIn()
      .then((result) => {
        console.log(result?.user);
        const userInfo = {
          name: result?.user?.displayName,
          email: result?.user?.email,
          image: result?.user?.photoURL,
          role: 'user',
        };
        axiosPublic.post('/users', userInfo).then((res) => {
          Swal.fire('Logged In', 'You Successfully Logged In', 'success');
          console.log(res?.data);
          navigate(location?.state ? location.state : '/');
        });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        Swal.fire('Something Went Wrong!!', `${errorMessage}`, 'error');
      });
  };
  return (
    <div className="px-8 pb-8 text-center flex gap-2 flex-col">
      <p className="text-xl font-bold mb-3">Sign in with</p>
      <div className="flex gap-4 items-center justify-center">
        <button onClick={handleGoogle} className="btn btn-primary text-white">
          <FaGoogle size={32}></FaGoogle>
        </button>
        <button onClick={handleGithub} className="btn btn-primary text-white">
          <FaGithub size={32}></FaGithub>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
