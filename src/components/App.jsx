import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import { Layout } from 'components/Layout/Layout';
import { PrivateRoute } from 'components/PrivateRoute';
import { RestrictedRoute } from 'components/RestrictedRoute';

const MainPage = lazy(() => import('pages/MainPage'));
const MainLayout = lazy(() => import('pages/MainLayout/MainLayout'));
const AccountPage = lazy(() => import('pages/AccountPage'));
const CalendarPage = lazy(() => import('pages/CalendarPage'));
const StatisticsPage = lazy(() => import('pages/StatisticsPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />

          <Route
            path="account"
            element={<PrivateRoute element={MainLayout} redirecrTo="/" />}
          >
            <Route index element={<AccountPage />} />
          </Route>
          <Route
            path="calendar"
            element={<PrivateRoute element={MainLayout} redirecrTo="/" />}
          >
            <Route path="month/:currrentDate" element={<CalendarPage />} />
            <Route path="day/:currrentDay" element={<CalendarPage />} />
          </Route>
          <Route
            path="statistics"
            element={<PrivateRoute element={MainLayout} redirecrTo="/" />}
          >
            <Route index element={<StatisticsPage />} />
          </Route>
          <Route
            path="register"
            element={
              <RestrictedRoute element={RegisterPage} redirecrTo="/account" />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute element={LoginPage} redirecrTo="/account" />
            }
          />
        </Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </>
  );
};
