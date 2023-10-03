import { Suspense } from 'react';
import { useState, useEffect } from 'react'; //?
import { Outlet } from 'react-router-dom';

import SideBar from 'components/SideBar/SideBar';
import Header from 'components/Header/Header';

import { globalTheme } from 'theme'; //?
import { DivStyled } from 'pages/MainLayout/MainLayoutStyled.styled';

export function MainLayout() {
  const mediaQuery = window.matchMedia(
    `(min-width: ${globalTheme.breakpoints.desktop})`
  ); //?

  const [showSideBar, setShowSideBar] = useState(mediaQuery.matches); //?

  useEffect(() => {
    const handleResize = evt => {
      setShowSideBar(evt.matches);
    };

    mediaQuery.addEventListener('change', handleResize);

    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, [mediaQuery]); //?

  const onSideBar = () => {
    setShowSideBar(prevState => !prevState);
    console.log('onSideBar'); //!
  }; //?

  const onRedirect = () => {
    setShowSideBar(false);
    console.log('onRedirect'); //!
  }; //?

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DivStyled>
        {(mediaQuery.matches || showSideBar) && (
          <SideBar onSideBar={onSideBar} onRedirect={onRedirect} />
        )}

        <div>
          <Header onSideBar={onSideBar} />

          <Outlet />
        </div>
      </DivStyled>
    </Suspense>
  );
}

// (mediaQuery.matches || showSideBar) //!
