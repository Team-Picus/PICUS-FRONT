import { RouterProvider } from 'react-router';
import { router } from '@app/routes/Router.tsx';

export const AppRouterProvider = () => {
  return <RouterProvider router={router} />;
};
