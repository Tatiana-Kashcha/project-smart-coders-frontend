import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import SideBar from 'components/SideBar/SideBar';
import Header from 'components/Header/Header';

import { DivStyled } from 'pages/MainLayout/MainLayoutStyled.styled';

export function MainLayout() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DivStyled>
        <SideBar />

        <div>
          <Header />

          <Outlet />
        </div>
      </DivStyled>
    </Suspense>
  );
}
