import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root.jsx';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import Orders from './components/Orders/Orders.jsx';
import PriVateRoute from './components/routes/PriVateRoute.jsx';
import Profile from './components/Profile.jsx';
import Dashboard from './components/Dashboard.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/orders',
        element:<PriVateRoute><Orders></Orders></PriVateRoute>
        
      },
      {
        path:'/profile',
        element:<PriVateRoute><Profile></Profile></PriVateRoute>
      },
      {
        path:'/dashboard',
        element:<PriVateRoute><Dashboard></Dashboard></PriVateRoute>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>

  </React.StrictMode>,
)
