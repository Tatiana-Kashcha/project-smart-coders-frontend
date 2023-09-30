import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import { Header } from 'components/Header/Header';

// import { Navigation } from 'components/Navigation/Navigation';

export const Layout = () => {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};
