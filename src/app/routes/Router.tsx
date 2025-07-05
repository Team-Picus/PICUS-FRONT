import { createBrowserRouter } from 'react-router';
import RootLayout from '@app/layout/RootLayout';
import HomePage from '@home/ui/HomePage.tsx';
import ExplorePage from '@explore/ui/ExplorePage.tsx';
import ChatPage from '@chat/ui/ChatPage.tsx';
import MyPage from '@my/ui/MyPage.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    path: 'explore',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <ExplorePage />,
      },
    ],
  },
  {
    path: 'chat',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <ChatPage />,
      },
    ],
  },
  {
    path: 'explore',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <MyPage />,
      },
    ],
  },
]);
