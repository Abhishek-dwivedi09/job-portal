import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/shared/Navbar';
import './index.css';
import { Signature } from 'lucide-react';
import Login from './components/auth/login';
import Signup from './components/auth/signup';
import Home from './components/Home';
import Jobs from './components/Jobs';
import PostJob from './components/PostedJobs'
import Browse from './components/Browse';
import Profile from './components/Profile';
import JobDescription from './components/JobDescription';
import CreateJobs from './components/admin/CreateJobs'
import ProtectedRoute from './components/admin/ProtectedRoute'
import Applicants from './components/admin/Applicants'


const appRouter = createBrowserRouter([

  {
  path:'/',
  element:<Home/>
  },

  {
    path:'/login',
    element:<Login/>
    },

    {
      path:'/signup',
      element:<Signup/>
      },
      {
        path:'/jobs',
        element:<Jobs/>
        },
        {
          path: "/description/:id",
          element: <JobDescription />
        },
        {
          path:'/browse',
          element:<Browse/>
          },
          {
            path:'/profile',
            element:<Profile/>
            },
            // Admin Dashboard Route Started
  {
    path:"/admin/jobs",
    element:<ProtectedRoute><PostJob/></ProtectedRoute> 
  },
  {
    path:"/admin/jobs/create",
    element:<ProtectedRoute><CreateJobs/></ProtectedRoute> 
  },
  {
    path:"/admin/jobs/:id/applicants",
    element:<ProtectedRoute><Applicants/></ProtectedRoute> 
  },
]
);

function App(){
  return (
    <>
   <RouterProvider router = {appRouter}/>

    </>
  )
}

export default App
