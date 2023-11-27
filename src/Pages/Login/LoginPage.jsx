import { useLottie } from 'lottie-react';
import loginAnimation from './animation/login_animation.json';
import Swal from 'sweetalert2';
import { useEffect } from 'react';
import useAuth from '../../hooks/Auth/useAuth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import logo from '/logo.png';
import { FaGoogle } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import SectionTitle from '../../Components/Shared/SectionTitle/SectionTitle';

const LoginPage = () => {
  const { googleSignIn, githubSignIn, loginUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();

  // For Lottie Animation
  const options = {
    animationData: loginAnimation,
    loop: true,
  };

  const { View } = useLottie(options);

  useEffect(() => {
    if (user) {
      navigate(location?.state ? location.state : '/');
      return;
    }
  }, [navigate, user, location]);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    loginUser(email, password)
      .then(() => {
        // Signed in
        Swal.fire('Logged In', 'You Successfully Logged In', 'success');
        navigate(location?.state ? location.state : '/');
      })
      .catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        Swal.fire('Something Went Wrong!!', `${errorMessage}`, 'error');
      });
  };

  const handleGoogle = () => {
    googleSignIn()
      .then(() => {
        // Signed in
        Swal.fire('Logged In', 'You Successfully Logged In', 'success');
        navigate(location?.state ? location.state : '/');
      })
      .catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        Swal.fire('Something Went Wrong!!', `${errorMessage}`, 'error');
      });
  };

  const handleGithub = () => {
    githubSignIn()
      .then(() => {
        // Signed in
        Swal.fire('Logged In', 'You Successfully Logged In', 'success');
        navigate(location?.state ? location.state : '/');
      })
      .catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        Swal.fire('Something Went Wrong!!', `${errorMessage}`, 'error');
      });
  };
  return (
    <div className="container mx-auto">
      <Helmet>
        <title>Fitness-Tracker | Login</title>
      </Helmet>
      <img className="w-fit mx-auto h-20 mt-8 -mb-7" src={logo} alt="logo" />
      <SectionTitle
        longTitle={'Login Now!!'}
        description={
          'Provide Valid Email and Password That you previously used for REgistration. For login. Or, Login with your Github/Google Instant.'
        }
      ></SectionTitle>
      <div className="hero min-h-screen bg-base-100 lg:pb-20 pb-10 -mt-12">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <div>{View}</div>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <button className="label-text-alt link link-hover">
                    Forgot password?
                  </button>
                </label>
              </div>
              <div className="form-control mt-6">
                <p className="mb-2">
                  New Here Please
                  <Link className="text-green-600 underline" to={'/register'}>
                    Register
                  </Link>
                </p>
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Login"
                ></input>
              </div>
            </form>
            <div className="px-8 pb-8 text-center flex gap-2 flex-col">
              <p className="text-xl font-bold mb-3">Sign in with</p>
              <div className="flex gap-4 items-center justify-center">
                <button
                  onClick={handleGoogle}
                  className="btn btn-primary text-white"
                >
                  <FaGoogle size={32}></FaGoogle>
                </button>
                <button
                  onClick={handleGithub}
                  className="btn btn-primary text-white"
                >
                  <FaGithub size={32}></FaGithub>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
