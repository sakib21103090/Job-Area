import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Statistics from './Components/Statistics/Statistics';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';
import Blog from './Components/Blog/Blog';

import MainHomePage from './Components/MainHomePage/MainHomePage';

import JobDetail from './Components/JobDati/JobDetail';
import Home from './Components/Home/Home';
import Error from './Components/Error/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element:<MainHomePage></MainHomePage>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:() => fetch('/fakedata1.json')
      },
      {
        path:'Job/:id',
        element:<JobDetail></JobDetail>,
       
      },

      {
        path:'/Statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'AppliedJobs',
        element:<AppliedJobs></AppliedJobs>,
        loader:() => fetch('/fakedata1.json')
      },
      {
        path:'/Blog',
        element:<Blog></Blog>
      },
      
    ]
  },
  
 
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)

