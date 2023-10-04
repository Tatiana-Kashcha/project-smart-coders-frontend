import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import * as s from './Layout.styled';

export const Layout = () => {
  return (
    <s.Main>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </s.Main>
  );
};
