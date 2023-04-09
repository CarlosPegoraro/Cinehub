import { createBrowserRouter, Navigate } from "react-router-dom";
import { DefaultLayout } from "./components/DefaultLayout";
import { GuestLayout } from "./components/GuestLayout";
import { Dashboard } from "./views/Dashboard";
import { Login } from "./views/Login";
import { NotFound } from "./views/NotFound";
import { Singup } from "./views/Singup";
import { Users } from "./views/Users";

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout/>,
    children: [
      {
        path: '/',
        element: <Navigate to="/users"/>
      },
      {
        path: '/users',
        element: <Users/>
      },
      {
        path: '/dashboard',
        element: <Dashboard/>
      },
    ]
  },
  {
    path: '/',
    element: <GuestLayout/>,
    children: [
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/singup',
        element: <Singup/>
      },
    ]
  },
  {
    path: '*',
    element: <NotFound/>
  },

])

export default router;
