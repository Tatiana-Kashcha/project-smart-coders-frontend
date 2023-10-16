import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from 'components/Loader/Loader';

import { MainMod } from './Layout.styled';

export const Layout = () => {
  return (
    <MainMod>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </MainMod>
  );
};
