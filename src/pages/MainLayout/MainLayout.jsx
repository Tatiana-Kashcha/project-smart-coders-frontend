import { useState, useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';

import { Container } from 'stylesheet/Container.styled';
import SideBar from 'components/SideBar/SideBar';
import Header from 'components/Header/Header';

import { globalTheme } from 'theme';

import * as s from './MainLayoutStyled.styled';

export default function MainLayout() {
  const mediaQueryRef = useRef(
    window.matchMedia(
      `(max-width: calc(${globalTheme.breakpoints.desktop} - 0.5px))`
    )
  );

  const mediaQuery = mediaQueryRef.current;

  const [isSmallScreen, setIsSmallScreen] = useState(mediaQuery.matches);
  const [showSideBar, setShowSideBar] = useState(!mediaQuery.matches);
  const [showBurger, setShowBurger] = useState(mediaQuery.matches);

  useEffect(() => {
    const handleResize = evt => {
      setIsSmallScreen(evt.matches);
      setShowSideBar(!evt.matches);
    };

    mediaQuery.addEventListener('change', handleResize);

    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, [mediaQuery]);

  useEffect(() => {
    setShowBurger(!showSideBar);
  }, [showSideBar]);

  const onSideBar = () => {
    setShowSideBar(prevState => !prevState);
  };

  const togglshowBurger = () => {};

  const onRedirect = () => {
    if (mediaQuery.matches) {
      setShowSideBar(false);
    }
  };

  return (
    <>
      {(!mediaQuery.matches || showSideBar) && (
        <SideBar
          isSmallScreen={isSmallScreen}
          togglshowBurger={togglshowBurger}
          onSideBar={onSideBar}
          onRedirect={onRedirect}
        />
      )}
      <s.SectionHeader>
        <Container>
          <s.DivStyled>
            <Header
              showBurger={showBurger}
              togglshowBurger={togglshowBurger}
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
