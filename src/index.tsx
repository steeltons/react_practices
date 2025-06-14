import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './main/Main';
import List from './list/List';
import Building from './building/Building';

const router = createBrowserRouter([
  {
    path: '',
    element: <Main />
  },
  {
    path: '/list',
    element: <List />
  },
  {
    path: '/buildings/:structureId',
    element: <Building />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>
);
