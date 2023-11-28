import { Outlet } from 'react-router-dom';
import Footer from '../Components/Shared/Footer/Footer';
import DashboardNavbar from '../Components/Shared/DashboardNavbar/DashboardNavbar';

const Dashboard = () => {
  return (
    <div>
      <DashboardNavbar></DashboardNavbar>
      <div className="mt-[64px] md:mt-[68px]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;
