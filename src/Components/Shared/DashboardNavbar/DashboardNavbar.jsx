import { Link, NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/Auth/useAuth';
import Swal from 'sweetalert2';
import DarkWhite from '../../DarkWhiteTheme/DarkWhite';
import { RiMenu2Line } from 'react-icons/ri';

const DashboardNavbar = () => {
  const { logOut, user } = useAuth();
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut();
    // Logged out
    Swal.fire('Logged Out', 'Log Out Success', 'success');
    navigate('/');
  };

  //   const navElement = (
  //     <>
  //       <li>
  //         <NavLink to={'/'}>Home</NavLink>
  //       </li>
  //       <li>
  //         <NavLink to={'/gallery'}>Gallery</NavLink>
  //       </li>
  //       <li>
  //         <NavLink to={'/trainer'}>Trainer</NavLink>
  //       </li>
  //       <li>
  //         <NavLink to={'/classes'}>Classes</NavLink>
  //       </li>
  //       <li>
  //         <NavLink to={'/community'}>Community</NavLink>
  //       </li>
  //     </>
  //   );

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
    <>
      <div>
        <div className="navbar bg-base-200 fixed z-20 max-w-screen-xl	mx-auto top-0 rounded-lg">
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
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-semibold"
              >
                {/* {navElement} */}
              </ul>
            </div>
            <Link to={'/dashboard'}>
              <img className="h-12" src="/logo.png" alt="Logo" />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-semibold">
              {/* {navElement} */}
            </ul>
          </div>
          <div className="navbar-end">
            <div className="mr-4 lg:mr-5">
              <DarkWhite></DarkWhite>
            </div>

            {user ? undefined : (
              <ul className="menu menu-sm menu-horizontal font-semibold">
                {loginAndLogOutButton}
              </ul>
            )}
            {user && (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost">
                  <RiMenu2Line size={25}></RiMenu2Line>
                  <div className="w-10 avatar">
                    <img
                      className="rounded-full"
                      src={user?.photoURL}
                      alt="Profile_Image"
                    />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-60"
                >
                  <li>
                    <Link to={'/profile'} className="justify-between">
                      {user?.displayName} Profile
                      <span className="badge">New</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={'/dashboard'}>Dashboard</Link>
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
    </>
  );
};

export default DashboardNavbar;
