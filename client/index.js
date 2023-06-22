import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';

// Import components
import App from './App.jsx';
import LoginPage from './pages/LoginPage.jsx';
import SignupPage from './pages/SignupPage.jsx';
import MatchPage from './pages/MatchPage.jsx';
import SwipePage from './pages/SwipePage.jsx';

import { swiperLoader } from './loaders.js';

// Import CSS
import '../styles.css';

const router = createBrowserRouter([
  // {
  //   path: '/',
  //   element: <App />,
  // },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/signup',
    element: <SignupPage />,
  },
  {
    path: '/matches',
    element: <MatchPage />,
  },
  {
    path: '/swipe',
    loader: swiperLoader,
    element: <SwipePage />,
  },
  {
    path: '*',
    element: <Navigate to="/login" />,
  },
]);

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
