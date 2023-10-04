import { Suspense } from 'react';
import { useState, useEffect } from 'react'; //?
import { Outlet } from 'react-router-dom';

import SideBar from 'components/SideBar/SideBar';
import Header from 'components/Header/Header';

import { globalTheme } from 'theme'; //?

import * as s from './MainLayoutStyled.styled';

export default function MainLayout() {
  const mediaQuery = window.matchMedia(
    `(min-width: ${globalTheme.breakpoints.desktop})`
  ); //?

  const [showSideBar, setShowSideBar] = useState(mediaQuery.matches); //?

  useEffect(() => {
    const handleResize = evt => {
      setShowSideBar(evt.matches);
    };

    mediaQuery.addEventListener('change', handleResize);
    console.log('useEffect', showSideBar); //!

    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, [mediaQuery]); //?

  const onSideBar = () => {
    setShowSideBar(prevState => !prevState);
    console.log('onSideBar'); //!
    console.log('onSideBar', showSideBar); //!
  }; //?

  const onRedirect = () => {
    setShowSideBar(false);
    console.log('onRedirect'); //!
    console.log(showSideBar); //!
  }; //?

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <s.ContainerMode>
        {(mediaQuery.matches || showSideBar) && (
          <SideBar onSideBar={onSideBar} onRedirect={onRedirect} />
        )}
        <s.DivStyled>
          <Header onSideBar={onSideBar} />
          <Outlet />
        </s.DivStyled>
      </s.ContainerMode>
    </Suspense>
  );
}

// (mediaQuery.matches || showSideBar) //!
