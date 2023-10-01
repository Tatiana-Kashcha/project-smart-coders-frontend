import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
// import { Layout } from 'Layout';

import MainPage from 'pages/MainPage';
import Register from 'pages/RegisterPage';
import Login from 'pages/LoginPage';
import Account from 'pages/AccountPage';
import Calendar from 'pages/CalendarPage';
import Statistics from 'pages/StatisticsPage';
import { PrivateRoute } from 'components/PrivateRoute';
import { Layout } from 'components/Layout/Layout';
import ChoosedMonth from 'components/ChoosedMonth/ChoosedMonth';
import ChoosedDay from 'components/ChoosedDay/ChoosedDay';
import { RestrictedRoute } from 'components/RestrictedRoute';
// import UserForm from './UserForm/UserForm';
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />

          <Route
            path="account"
            element={<PrivateRoute element={Account} redirectTo="/" />}
          />
          <Route
            path="calendar"
            element={<PrivateRoute element={Calendar} redirectTo="/" />}
          >
            <Route path="month/:currrentDate" element={<ChoosedMonth />} />
            <Route path="day/:currrentDay" element={<ChoosedDay />} />
          </Route>
          <Route
            path="statistics"
            element={<PrivateRoute element={Statistics} redirectTo="/" />}
          />
          <Route
            path="register"
            element={
              <RestrictedRoute element={Register} redirectTo="/account" />
            }
          />
          <Route
            path="login"
            element={<RestrictedRoute element={Login} redirectTo="/account" />}
          />
        </Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </>
  );
};
