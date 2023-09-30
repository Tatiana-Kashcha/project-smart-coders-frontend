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
import { Layout } from 'Layout';
import ChoosedMonth from 'components/ChoosedMonth/ChoosedMonth';
import ChoosedDay from 'components/ChoosedDay/ChoosedDay';
import { RestrictedRoute } from 'components/RestrictedRoute';

const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />

          <Route
            path="account"
            element={<PrivateRoute element={Account} redirecrTo="/" />}
          />
          <Route
            path="calendar"
            element={<PrivateRoute element={Calendar} redirecrTo="/" />}
          >
            <Route path="month/:currrentDate" element={<ChoosedMonth />} />
            <Route path="day/:currrentDay" element={<ChoosedDay />} />
          </Route>
          <Route
            path="statistics"
            element={<PrivateRoute element={Statistics} redirecrTo="/" />}
          />
          <Route
            path="register"
            element={
              <RestrictedRoute element={Register} redirecrTo="/account" />
            }
          />
          <Route
            path="login"
            element={<RestrictedRoute element={Login} redirecrTo="/account" />}
          />
        </Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </>
  );
};
