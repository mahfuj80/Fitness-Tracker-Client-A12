import { Link, NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';
import DarkWhite from '../../DarkWhiteTheme/DarkWhite';

const Navbar = () => {
  const { logOut, user } = useAuth();
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut();
    // Logged out
    Swal.fire('Logged Out', 'Log Out Success', 'success');
    navigate('/');
  };

  const navElement = (
    <>
      <li>
        <NavLink to={'/'}>Home</NavLink>
      </li>
      <li>
        <NavLink to={'/about'}>About</NavLink>
      </li>
    </>
  );

  const loginAndLogOutButton = (
    <>
      <li className="font-semibold">
        <NavLink to={'/login'}>Login</NavLink>
      </li>
      <li className="font-semibold">
        <NavLink to={'/register'}>Sign Up</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-200">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navElement}
            </ul>
          </div>
          <Link to={'/'}>
            <img className="h-12" src="/logo.png" alt="Logo" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navElement}</ul>
        </div>
        <div className="navbar-end">
          <div className="mr-4 lg:mr-5">
            <DarkWhite></DarkWhite>
          </div>
          {user ? undefined : (
            <ul className="menu menu-sm menu-horizontal">
              {loginAndLogOutButton}
            </ul>
          )}
          {user && (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} alt="Profile_Image" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to={'/profile'} className="justify-between">
                    {user?.displayName}
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li>
                  <Link to={'/settings'}>Settings</Link>
                </li>
                <li>
                  {user && <button onClick={handleLogOut}>Log Out</button>}
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
