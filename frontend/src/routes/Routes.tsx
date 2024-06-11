import { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from '../pages/Home/Home.tsx';
import ComoAjudar from '@/pages/ComoAjudar/index.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },

  {
    path: '/como-ajudar',
    element: <ComoAjudar />,
  },
]);

const Routes: FC = () => <RouterProvider router={router} />;

export default Routes;
