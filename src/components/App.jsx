import { Routes, Route } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Layout } from 'components/Layout/Layout';
import { PrivateRoute } from 'components/PrivateRoute';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { useDispatch } from 'react-redux';
import { refresh } from 'redux/auth/authOperations';
import { selectIsRefreshing } from 'redux/auth/selectors';
import Loader from 'components/Loader/Loader';

import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';

const MainPage = lazy(() => import('pages/MainPage'));
const MainLayout = lazy(() => import('pages/MainLayout/MainLayout'));
const AccountPage = lazy(() => import('pages/AccountPage'));
const CalendarPage = lazy(() => import('pages/CalendarPage'));
const StatisticsPage = lazy(() => import('pages/StatisticsPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
// const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);
  const isRefreshing = useSelector(selectIsRefreshing);
  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />

        <Route
          path="account"
          element={<PrivateRoute element={MainLayout} redirectTo="/" />}
        >
          <Route index element={<AccountPage />} />
        </Route>
        <Route
          path="calendar"
          element={<PrivateRoute element={MainLayout} redirectTo="/" />}
        >
          <Route index element={<CalendarPage />} />
          <Route path="month/:currentDate" element={<CalendarPage />} />
          <Route path="day/:currentDay" element={<CalendarPage />} />
        </Route>
        <Route
          path="statistics"
          element={<PrivateRoute element={MainLayout} redirectTo="/" />}
        >
          <Route index element={<StatisticsPage />} />
        </Route>
        <Route
          path="register"
          element={
            <RestrictedRoute element={RegisterPage} redirectTo="/account" />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute element={LoginPage} redirectTo="/account" />
          }
        />
      </Route>
      <Route path="*" element={<NotFoundPage />}></Route>
    </Routes>
  );
};
