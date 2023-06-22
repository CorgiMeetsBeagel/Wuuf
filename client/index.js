import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';

// Import redux store
import store from './store.js';

// Import components
import App from './App.jsx';
import LoginPage from './pages/LoginPage.jsx';
import SignupPage from './pages/SignupPage.jsx';
import MatchPage from './pages/MatchPage.jsx';
import SwipePage from './pages/SwipePage.jsx';

// Import loaders
// import { swiperLoader } from './loaders.js';

// Import CSS
import '../styles.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
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
    // loader: swiperLoader,
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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
