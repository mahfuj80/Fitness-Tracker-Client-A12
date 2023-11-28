import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home/Home';
import LoginPage from '../Pages/Login/LoginPage';
import RegisterPage from '../Pages/Register/RegisterPage';
import ErrorPage from '../Pages/Error/ErrorPage';
import Dashboard from '../Layout/Dashboard';
import Community from '../Pages/Community/Community';
import Gallery from '../Pages/Gallery/GalleryImage';
import Trainer from '../Pages/Trainer/Trainer';
import Profile from '../Pages/Profile/Profile';
import Classes from '../Pages/Classes/Classes';
import BeTrainer from '../Pages/BeTrainer/BeTrainer';
import PrivetRoutes from './PrivateRoutes';
import TrainerDetails from '../Pages/TrainerDetails/TrainerDetails';
import AdminDashboard from '../Pages/Dashboard/Admin/AdminDashboard/AdminDashboard';
import UsersDashboard from '../Pages/Dashboard/Users/UsersDashboard/UsersDashboard';
import TrainersDashboard from '../Pages/Dashboard/Trainers/TrainersDashboard/TrainersDashboard';
import ActivityLog from '../Pages/Dashboard/Users/ActivityLog/ActivityLog';
import RecommendedClasses from '../Pages/Dashboard/Users/RecommendedClasses/RecommendedClasses';
import AllSubscribers from '../Pages/Dashboard/Admin/AllSubscribers/AllSubscribers';
import AllTrainers from '../Pages/Dashboard/Admin/AllTrainers/AllTrainers';
import AppliedTrainers from '../Pages/Dashboard/Admin/AppliedTrainers/AppliedTrainers';
import AdminRoutes from './AdminRoutes';
import Balance from '../Pages/Dashboard/Admin/Balance/Balance';
import ManageSlots from '../Pages/Dashboard/Trainers/ManageSlots/ManageSlots';
import TrainersRoutes from './TrainersRoutes';
import ManageMembers from '../Pages/Dashboard/Trainers/ManageMembers/ManageMembers';
import AddNewForum from '../Pages/Dashboard/Trainers/AddNewForum/AddNewForum';
import AddNewClass from '../Pages/Dashboard/Trainers/AddNewClass/AddNewClass';
import UserRoutes from './UserRoutes';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/gallery',
        element: <Gallery></Gallery>,
      },
      {
        path: '/classes',
        element: <Classes></Classes>,
      },
      {
        path: '/community',
        element: <Community></Community>,
      },
      {
        path: '/trainer',
        element: <Trainer></Trainer>,
      },
      {
        path: '/trainer/:id',
        element: <TrainerDetails></TrainerDetails>,
      },
      {
        path: '/be-trainer',
        element: (
          <PrivetRoutes>
            <BeTrainer></BeTrainer>
          </PrivetRoutes>
        ),
      },
      {
        path: '/profile',
        element: <Profile></Profile>,
      },
      {
        path: '/login',
        element: <LoginPage></LoginPage>,
      },
      {
        path: '/register',
        element: <RegisterPage></RegisterPage>,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      // users Path
      {
        path: '/dashboard/user',
        element: (
          <PrivetRoutes>
            <UserRoutes>
              <UsersDashboard></UsersDashboard>
            </UserRoutes>
          </PrivetRoutes>
        ),
      },
      {
        path: '/dashboard/activity-logs',
        element: (
          <PrivetRoutes>
            <UserRoutes>
              <ActivityLog></ActivityLog>
            </UserRoutes>
          </PrivetRoutes>
        ),
      },
      {
        path: '/dashboard/recommended-classes',
        element: (
          <PrivetRoutes>
            <UserRoutes>
              <RecommendedClasses></RecommendedClasses>
            </UserRoutes>
          </PrivetRoutes>
        ),
      },
      // Trainers Path
      {
        path: '/dashboard/trainer',
        element: (
          <PrivetRoutes>
            <TrainersRoutes>
              <TrainersDashboard></TrainersDashboard>
            </TrainersRoutes>
          </PrivetRoutes>
        ),
      },
      {
        path: '/dashboard/add-new-class',
        element: (
          <PrivetRoutes>
            <TrainersRoutes>
              <AddNewClass></AddNewClass>
            </TrainersRoutes>
          </PrivetRoutes>
        ),
      },
      {
        path: '/dashboard/add-new-forum',
        element: (
          <PrivetRoutes>
            <TrainersRoutes>
              <AddNewForum></AddNewForum>
            </TrainersRoutes>
          </PrivetRoutes>
        ),
      },
      {
        path: '/dashboard/manage-members',
        element: (
          <PrivetRoutes>
            <TrainersRoutes>
              <ManageMembers></ManageMembers>
            </TrainersRoutes>
          </PrivetRoutes>
        ),
      },

      {
        path: '/dashboard/manage-slots',
        element: (
          <PrivetRoutes>
            <TrainersRoutes>
              <ManageSlots></ManageSlots>
            </TrainersRoutes>
          </PrivetRoutes>
        ),
      },

      //Admin Path
      {
        path: '/dashboard/admin',
        element: (
          <PrivetRoutes>
            <AdminRoutes>
              <AdminDashboard></AdminDashboard>
            </AdminRoutes>
          </PrivetRoutes>
        ),
      },
      {
        path: '/dashboard/all-subscribers',
        element: (
          <PrivetRoutes>
            <AdminRoutes>
              <AllSubscribers></AllSubscribers>
            </AdminRoutes>
          </PrivetRoutes>
        ),
      },
      {
        path: '/dashboard/all-trainers',
        element: (
          <PrivetRoutes>
            <AdminRoutes>
              <AllTrainers></AllTrainers>
            </AdminRoutes>
          </PrivetRoutes>
        ),
      },
      {
        path: '/dashboard/applied-trainers',
        element: (
          <PrivetRoutes>
            <AdminRoutes>
              <AppliedTrainers></AppliedTrainers>
            </AdminRoutes>
          </PrivetRoutes>
        ),
      },
      {
        path: '/dashboard/balance',
        element: (
          <PrivetRoutes>
            <AdminRoutes>
              <Balance></Balance>
            </AdminRoutes>
          </PrivetRoutes>
        ),
      },
    ],
  },
]);
