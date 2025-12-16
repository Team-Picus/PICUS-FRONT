import { createBrowserRouter } from 'react-router';
import RootLayout from '@app/layout/RootLayout';
import HomePage from '@home/ui/HomePage.tsx';
import WeeklyMagazinePage from '@home/ui/WeeklyMagazinePage.tsx';
import ExplorePage from '@explore/ui/ExplorePage.tsx';
import ChatMainPage from '@chat/ui/main/ChatMainPage';
import MyPage from '@my/ui/main/MyPage.tsx';
import ChatDetailPage from '@pages/chat/ui/detail/ChatDetailPage';
import ChatReservationMainPage from '@pages/chat/ui/reservation/ChatReservationMainPage';
import LoginPage from '@pages/login/ui/LoginPage';
import NotificationPage from '@home/ui/NotificationPage.tsx';
import AccountSettings from '@my/ui/main/AccountSettings.tsx';
import ExpertApprovalPage from '@my/ui/approval/ExpertApprovalPage.tsx';
import ApprovalStepsPage from '@my/ui/approval/ApprovalStepsPage.tsx';
import ApprovalStatusPage from '@my/ui/approval/ApprovalStatusPage.tsx';

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
        path: 'weekly-magazine',
        element: <WeeklyMagazinePage />,
      },
      {
        path: 'notification',
        element: <NotificationPage />,
      },
    ],
  },
  {
    path: 'login',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <LoginPage />,
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
    path: 'chat/detail',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <ChatDetailPage />,
      },
    ],
  },
  {
    path: 'chat/reservation',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <ChatReservationMainPage />,
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
      {
        path: 'expert-approval',
        element: <RootLayout />,
        children: [
          {
            index: true,
            element: <ExpertApprovalPage />,
          },
          {
            path: 'steps',
            element: <ApprovalStepsPage />,
          },
          {
            path: 'status/:state',
            element: <ApprovalStatusPage />,
          },
        ],
      },
    ],
  },
]);
