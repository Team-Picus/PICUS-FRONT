import { createBrowserRouter } from 'react-router';
import RootLayout from '@app/layout/RootLayout';
import HomePage from '@home/ui/HomePage.tsx';
import WeeklyMagazinePage from '@home/ui/WeeklyMagazinePage.tsx';
import ExplorePage from '@explore/ui/ExplorePage.tsx';
import ChatMainPage from '@pages/chat/ui/main/ChatMainPage';
import MyPage from '@my/ui/MyPage.tsx';
import NotificationPage from '@home/ui/NotificationPage.tsx';
import AccountSettings from '@my/ui/AccountSettings.tsx';

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
        element: <ChatMainPage />,
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
      {
        path: 'settings',
        element: <AccountSettings />,
      },
    ],
  },
]);
