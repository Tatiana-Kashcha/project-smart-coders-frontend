import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import MainPage from 'pages/MainPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import Account from 'pages/AccountPage';
import Calendar from 'pages/CalendarPage';
import Statistics from 'pages/StatisticsPage';
import { PrivateRoute } from 'components/PrivateRoute';
import { Layout } from 'components/Layout/Layout';
// import ChoosedMonth from 'components/ChoosedMonth/ChoosedMonth';
// import ChoosedDay from 'components/ChoosedDay/ChoosedDay';
import { RestrictedRoute } from 'components/RestrictedRoute';

import { MainLayout } from 'pages/MainLayout/MainLayout';

const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />

          <Route
            path="account"
            element={<PrivateRoute element={MainLayout} redirecrtTo="/" />}
          >
            <Route index element={<Account />} />
          </Route>
          <Route
            path="calendar"
            element={<PrivateRoute element={MainLayout} redirecrtTo="/" />}
          >
            <Route path="month/:currrentDate" element={<Calendar />} />
            <Route path="day/:currrentDay" element={<Calendar />} />
          </Route>
          <Route
            path="statistics"
            element={<PrivateRoute element={Statistics} redirecrtTo="/" />}
          >
            <Route index element={<Statistics />} />
          </Route>
          <Route
            path="register"
            element={
              <RestrictedRoute element={RegisterPage} redirecrtTo="/account" />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute element={LoginPage} redirecrtTo="/account" />
            }
          />
        </Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </>
  );
};
