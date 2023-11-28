import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import Footer from '../Components/Shared/Footer/Footer';
import DashboardNavbar from '../Components/Shared/DashboardNavbar/DashboardNavbar';
import { MdClose } from 'react-icons/md';
import {
  FaHome,
  FaRunning,
  FaSignOutAlt,
  FaSubscript,
  FaUser,
} from 'react-icons/fa';
import useAuth from '../hooks/Auth/useAuth';
import Swal from 'sweetalert2';
import { RiDashboardFill } from 'react-icons/ri';
import useUserRole from '../hooks/User/useUserRole';
import Loader from '../Components/Shared/Loading/Loader';

const Dashboard = () => {
  const { logOut, loading } = useAuth();
  const [role, dataLoading] = useUserRole();
  const navigate = useNavigate();
  const userRole = role?.role;

  const handleLogOut = () => {
    logOut();
    // Logged out
    Swal.fire('Logged Out', 'Log Out Success', 'success');
    navigate('/');
  };

  const adminRoutes = (
    <>
      <li className="font-semibold dark:hover:bg-gray-700 rounded-lg">
        <NavLink to={'/dashboard/all-subscriber'}>
          <FaSubscript></FaSubscript> All Subscriber
        </NavLink>
      </li>

      <li className="font-semibold dark:hover:bg-gray-700 rounded-lg">
        <NavLink to={'/dashboard/all-trainers'}>
          <FaRunning></FaRunning> All Trainers
        </NavLink>
      </li>

      <li className="font-semibold dark:hover:bg-gray-700 rounded-lg">
        <NavLink to={'/dashboard/applied-trainers'}>
          <RiDashboardFill></RiDashboardFill> Applied Trainers
        </NavLink>
      </li>

      <li className="font-semibold dark:hover:bg-gray-700 rounded-lg">
        <NavLink to={'/dashboard/balance'}>
          <RiDashboardFill></RiDashboardFill> Applied Trainers
        </NavLink>
      </li>
    </>
  );

  const trainersRoutes = (
    <>
      <li className="font-semibold dark:hover:bg-gray-700 rounded-lg">
        <NavLink to={'/dashboard/manage-slots'}>
          <RiDashboardFill></RiDashboardFill> Manage Slots
        </NavLink>
      </li>

      <li className="font-semibold dark:hover:bg-gray-700 rounded-lg">
        <NavLink to={'/dashboard/manage-member'}>
          <FaUser></FaUser> Manage Member
        </NavLink>
      </li>

      <li className="font-semibold dark:hover:bg-gray-700 rounded-lg">
        <NavLink to={'/dashboard/add-new-forum'}>
          <RiDashboardFill></RiDashboardFill> Add New Forum
        </NavLink>
      </li>

      <li className="font-semibold dark:hover:bg-gray-700 rounded-lg">
        <NavLink to={'/dashboard/add-new-class'}>
          <RiDashboardFill></RiDashboardFill> Add New Class
        </NavLink>
      </li>
    </>
  );

  const usersRoutes = (
    <>
      <li className="font-semibold dark:hover:bg-gray-700 rounded-lg">
        <NavLink to={'/dashboard/activity-logs'}>
          <RiDashboardFill></RiDashboardFill> Activity Logs
        </NavLink>
      </li>

      <li className="font-semibold dark:hover:bg-gray-700 rounded-lg">
        <NavLink to={'/dashboard/recommended-classes'}>
          <RiDashboardFill></RiDashboardFill> Recommended Classes
        </NavLink>
      </li>

      <li className="font-semibold dark:hover:bg-gray-700 rounded-lg">
        <NavLink to={'/dashboard/payment-details'}>
          <RiDashboardFill></RiDashboardFill> Payment Details
        </NavLink>
      </li>

      <li className="font-semibold dark:hover:bg-gray-700 rounded-lg">
        <NavLink to={'/dashboard/add-new-class'}>
          <RiDashboardFill></RiDashboardFill>My Class
        </NavLink>
      </li>
    </>
  );

  const sidebarLinksTop = (
    <>
      <li className="font-semibold dark:hover:bg-gray-700 rounded-lg">
        <NavLink to={`/dashboard/${userRole}`}>
          <RiDashboardFill></RiDashboardFill> Dashboard
        </NavLink>
      </li>
      {userRole === 'user' && usersRoutes}
      {userRole === 'admin' && adminRoutes}
      {userRole === 'trainer' && trainersRoutes}
    </>
  );

  const sidebarLinksBottom = (
    <>
      <li className="font-semibold dark:hover:bg-gray-700 rounded-lg">
        <NavLink to={'/'}>
          <FaHome></FaHome> Home
        </NavLink>
      </li>
      <li className="font-semibold dark:hover:bg-gray-700 rounded-lg">
        <NavLink onClick={handleLogOut} to={'/'}>
          <FaSignOutAlt></FaSignOutAlt> Sign Out
        </NavLink>
      </li>
    </>
  );

  if (dataLoading || loading) {
    return <Loader></Loader>;
  }

  return (
    <div>
      <div className="drawer lg:drawer-open mt-[62px]">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <Outlet></Outlet>
        </div>
        <div className="drawer-side z-30 lg:z-0">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <div className="flex justify-between lg:hidden">
              <img className="h-12" src="/logo.png" alt="Logo" />
              <div>
                <input
                  id="my-drawer-2"
                  type="checkbox"
                  className="drawer-toggle"
                />
                <div className="drawer-content flex flex-col items-center justify-center">
                  {/* Page content here */}
                  <label
                    htmlFor="my-drawer-2"
                    className="btn btn-ghost drawer-button"
                  >
                    <MdClose size={32} />
                  </label>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between  min-h-[80vh]">
              <div>{sidebarLinksTop}</div>
              <div>
                <div className="divider"></div>
                {sidebarLinksBottom}
              </div>
            </div>
          </ul>
        </div>
      </div>
      <DashboardNavbar></DashboardNavbar>
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;
