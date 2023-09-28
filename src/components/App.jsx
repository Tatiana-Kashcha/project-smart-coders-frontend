import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const MainPage = lazy(() => import('../pages/MainPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));

export const App = () => {
  return (
    <Routes>
      {/*  роути: старт main, регистер, логын, паспорт */}
      <Route path="/" element={<MainPage />}>
        <Route path="/login" element={<h1>Log in</h1>} />
        <Route path="/register" element={<h1>Sign up</h1>} />
      </Route>

      {/*  приват роути (аккаунт, текущий календар, день, месяц, год ) */}
      <Route path="*" element={<Navigate to="/" />}></Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
