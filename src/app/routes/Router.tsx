import { createBrowserRouter } from 'react-router';
import RootLayout from '@app/layout/RootLayout';
import HomePage from '@home/ui/HomePage.tsx';
import WeeklyMagazinePage from '@home/ui/WeeklyMagazinePage.tsx';
import ExplorePage from '@explore/ui/ExplorePage.tsx';
import ChatPage from '@chat/ui/ChatPage.tsx';
import MyPage from '@my/ui/MyPage.tsx';
import NotificationPage from '@home/ui/NotificationPage.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'weekly_magazine',
        element: <WeeklyMagazinePage />,
      },
      {
        path: 'notification',
        element: <NotificationPage />,
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
    path: 'my',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <MyPage />,
      },
    ],
  },
]);
