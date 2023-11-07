import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import './App.css';
import Root from './routes/root';
import LandingPage from './routes/landingPage.jsx';
import Schedule from './routes/scheduleIsSet.jsx';
import Start from './routes/start.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root 
      title="Welcome to Creative Prop Generator"
      subtitle="Get started by creating a schedule"
    />,
    children: [
      {
        path: '/start',
        element: <Start/>,
      },
      {
        path:"/scheduleIsSet",
        element: <Schedule       
        />
      },
      {
        path: '/landingPage',
        element: <LandingPage/>
      },
    ],
  },


]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    
    <RouterProvider router={router}/>,

  </React.StrictMode>

);



 

