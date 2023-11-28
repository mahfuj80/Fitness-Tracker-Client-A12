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
        element: <UsersDashboard></UsersDashboard>,
      },
      {
        path: '/dashboard/activity-logs',
        element: <ActivityLog></ActivityLog>,
      },
      {
        path: '/dashboard/recommended-classes',
        element: <RecommendedClasses></RecommendedClasses>,
      },
      // Trainers Path
      {
        path: '/dashboard/trainer',
        element: <TrainersDashboard></TrainersDashboard>,
      },
      {
        path: '/dashboard/add-new-class',
        element: <TrainersDashboard></TrainersDashboard>,
      },
      {
        path: '/dashboard/add-new-forum',
        element: <TrainersDashboard></TrainersDashboard>,
      },
      {
        path: '/dashboard/manage-members',
        element: <TrainersDashboard></TrainersDashboard>,
      },

      {
        path: '/dashboard/manage-slots',
        element: <TrainersDashboard></TrainersDashboard>,
      },

      //Admin Path
      {
        path: '/dashboard/admin',
        element: <AdminDashboard></AdminDashboard>,
      },
      {
        path: '/dashboard/all-subscribers',
        element: <AllSubscribers></AllSubscribers>,
      },
      {
        path: '/dashboard/all-trainers',
        element: <AllTrainers></AllTrainers>,
      },
      {
        path: '/dashboard/applied-trainers',
        element: <AppliedTrainers></AppliedTrainers>,
      },
      {
        path: '/dashboard/balance',
        element: <AdminDashboard></AdminDashboard>,
      },
    ],
  },
]);
