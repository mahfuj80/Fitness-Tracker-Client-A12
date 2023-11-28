import { NavLink, Outlet } from 'react-router-dom';
import Footer from '../Components/Shared/Footer/Footer';
import DashboardNavbar from '../Components/Shared/DashboardNavbar/DashboardNavbar';
import { MdClose } from 'react-icons/md';

const Dashboard = () => {
  const sidebarLinksTop = (
    <>
      <li className="font-semibold">
        <NavLink to={'/login'}>Login</NavLink>
      </li>
      <li className="font-semibold">
        <NavLink to={'/register'}>Sign Up</NavLink>
      </li>
    </>
  );
  const sidebarLinksBottom = (
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
            <div className="flex flex-col justify-between min-h-[80vh]">
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
