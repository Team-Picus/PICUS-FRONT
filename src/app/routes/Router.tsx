import { createBrowserRouter } from 'react-router';
import RootLayout from '@app/layout/RootLayout';
import HomePage from '@home/ui/HomePage.tsx';
import ExplorePage from '@explore/ui/ExplorePage.tsx';
import ChatMainPage from '@chat/ui/main/ChatMainPage';
import MyPage from '@my/ui/MyPage.tsx';
import ChatDetailPage from '@pages/chat/ui/detail/ChatDetailPage';
import ChatReservationMainPage from '@pages/chat/ui/reservation/ChatReservationMainPage';

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
    ],
  },
]);
