import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/Auth/useAuth';
import { useEffect } from 'react';
import logo from '/logo.png';
import SectionTitle from '../../Components/Shared/SectionTitle/SectionTitle';
import loginAnimation from './animation/login_animation.json';
import { useLottie } from 'lottie-react';
import useAxiosPublic from '../../hooks/Axios/useAxiosPublic';

const RegisterPage = () => {
  const { user, createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate(location?.state ? location.state : '/');
      return;
    }
  }, [navigate, user]);

  // For Lottie Animation
  const options = {
    animationData: loginAnimation,
    loop: true,
  };

  const { View } = useLottie(options);

  const handleResister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const image = form.get('image');
    const email = form.get('email');
    const password = form.get('password');

    // Check password lengthfir
    // if (password.length < 6) {
    //   Swal.fire({
    //     title: 'Error!',
    //     text: 'Password should be at least 6 characters long.',
    //     icon: 'error',
    //     confirmButtonText: 'Ok',
    //   });
    //   return;
    // }

    // // Check for capital letter
    // if (!/[A-Z]/.test(password)) {
    //   Swal.fire({
    //     title: 'Error!',
    //     text: 'Password should contain at least one capital letter.',
    //     icon: 'error',
    //     confirmButtonText: 'Ok',
    //   });
    //   return;
    // }

    // // Check for special character
    // if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    //   Swal.fire({
    //     title: 'Error!',
    //     text: 'Password should contain at least one special character.',
    //     icon: 'error',
    //     confirmButtonText: 'Ok',
    //   });
    //   return;
    // }

    console.log(name);

    createUser(email, password)
      .then((result) => {
        const loggedUser = result && result.user; // Check if result and result.user are defined
        if (loggedUser) {
          updateUserProfile(name, image)
            .then(() => {
              // create user entry in the database
              const userInfo = {
                name,
                email,
              };
              console.log(userInfo);
              useAxiosPublic.post('/users', userInfo).then((res) => {
                if (res?.data?.insertedId) {
                  console.log('user added to the database');
                  e.reset();
                  Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User Successfully Created',
                    showConfirmButton: false,
                    timer: 1500,
                  });
                  navigate(location?.state ? location.state : '/');
                }
              });
            })
            .catch((error) => {
              // Handle Errors here.
              const errorMessage = error.message;
              Swal.fire('Something Went Wrong!!', `${errorMessage}`, 'error');
            });
        } else {
          console.error('User is undefined in the result object');
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Error: User is undefined',
            showConfirmButton: false,
            timer: 1500,
          });
        }
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
        <title>Fitness-Tracker | Register</title>
      </Helmet>
      <img className="w-fit mx-auto mt-8 -mb-8" src={logo} alt="logo" />
      <SectionTitle
        longTitle={'Register Now!'}
        description={
          'Please Provide Your Email And Password and Name For Registration.'
        }
      ></SectionTitle>

      <div className="hero min-h-screen bg-base-100 md:pb-20 pb-10 -mt-12">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">{View}</div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleResister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image URL</span>
                </label>
                <input
                  type="text"
                  placeholder="image url"
                  name="image"
                  className="input input-bordered"
                  required
                />
              </div>
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
                  Already have an account{' '}
                  <Link className="text-green-600 underline" to={'/login'}>
                    Login
                  </Link>
                </p>
                <input
                  type="submit"
                  className="btn btn-primary"
                  value={'Resister'}
                ></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
