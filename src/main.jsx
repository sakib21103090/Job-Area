import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import JobMain from './Components/JobMain/JobMain';
import Statistics from './Components/Statistics/Statistics';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';
import Blog from './Components/Blog/Blog';
import FeaturedJobs from './Components/FeaturedJobs/FeaturedJobs';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>,
    children:[
      {
        path:'/',
        element:<JobMain></JobMain>,
        loader:() => fetch('fakedata1.json')
      },
      // {
      //   path:'/',
      //   element:<FeaturedJobs></FeaturedJobs>,
      //   loader:() => fetch('fakedata1.json')
        
      // },
      
    ]
  },
  {
    path:'/Statistics',
    element:<Statistics></Statistics>
  },
  {
    path:'/AppliedJobs',
    element:<AppliedJobs></AppliedJobs>
  },
  {
    path:'/Blog',
    element:<Blog></Blog>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)

// {
//   categories.map(category=>
      
//       <div className='card'>
//               <img src={category.categoryLogo} alt="" />
//               <h3>{category.categoryName}</h3>
//               <p>{category.jobsAvailable}</p>

//           </div>
      
//       )
// }