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
      {
        path: 'user',
      },
    ],
  },
]);
