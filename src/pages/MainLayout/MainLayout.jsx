import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { Container } from 'stylesheet/Container.styled';
import SideBar from 'components/SideBar/SideBar';
import Header from 'components/Header/Header';

import { globalTheme } from 'theme';

import * as s from './MainLayoutStyled.styled';

export default function MainLayout() {
  const mediaQuery = window.matchMedia(
    `(min-width: ${globalTheme.breakpoints.desktop})`
  );

  const [showSideBar, setShowSideBar] = useState(mediaQuery.matches);
  const [shownBurger, setShowBurger] = useState(true);

  useEffect(() => {
    const handleResize = evt => {
      setShowSideBar(evt.matches);
      console.log('handleResize', evt.matches);
    };

    mediaQuery.addEventListener('change', handleResize);

    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, [mediaQuery, showSideBar]); //?

  const onSideBar = () => {
    setShowSideBar(prevState => !prevState);
  };

  const togglshownBurger = () => {
    setShowBurger(prevState => !prevState);
  };

  const onRedirect = () => {
    setShowSideBar(false);
  };

  return (
    <>
      {(mediaQuery.matches || showSideBar) && (
        <SideBar
          togglshownBurger={togglshownBurger}
          onSideBar={onSideBar}
          onRedirect={onRedirect}
        />
      )}
      <s.SectionHeader>
        <Container>
          <s.DivStyled>
            <Header
              shownBurger={shownBurger}
              togglshownBurger={togglshownBurger}
              onSideBar={onSideBar}
            />
          </s.DivStyled>
        </Container>
      </s.SectionHeader>
      <s.Section>
        <Container>
          <s.DivStyled>
            <Outlet />
          </s.DivStyled>
        </Container>
      </s.Section>
    </>
  );
}
