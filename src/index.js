import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import CardList from './pages/App';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
// ReactDOM.createRoot(document.getElementById(('root')!)

const router= createBrowserRouter([
  { path:'/',
    element:<CardList/>
  },
  {
    path:'/about',
    element:<About/>
  },
  {
    path:'/Dashboard',
    element:<Dashboard/>
  },
  {
    path:'/Profile',
    element:<Profile/>
  }

])
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
