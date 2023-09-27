import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const MainPage = lazy(() => import('pages/MainPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<h1>Log in</h1>} />
      <Route path="/register" element={<h1>Sign up</h1>} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
