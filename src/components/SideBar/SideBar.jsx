// import { NavLink } from 'react-router-dom'; //!
import UserNav from 'components/UserNav/UserNav';
import LogoutBtn from 'components/LogoutBtn/LogoutBtn';
import { useState, useEffect } from 'react';

import { globalTheme } from 'theme';
import * as s from './SideBar.styled';

const SideBar = () => {
  const mediaQuery = window.matchMedia(
    `(max-width: calc(${globalTheme.breakpoints.desktop} - 0.5px))`
  );

  const [isSmallScreen, setIsSmallScreen] = useState(mediaQuery.matches);

  useEffect(() => {
    const handleResize = evt => {
      setIsSmallScreen(evt.matches);
    };

    mediaQuery.addEventListener('change', handleResize);

    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, [mediaQuery]);

  return (
    <s.SideBar>
      <s.LogoWrap>
        <s.IconWrap>
          <s.IconLogo />
        </s.IconWrap>
        {isSmallScreen && (
          <s.IconWrap>
            <s.IconClose />
          </s.IconWrap>
        )}
      </s.LogoWrap>
      <s.SideBarLabel>User Panel</s.SideBarLabel>
      <UserNav />
      <LogoutBtn />
    </s.SideBar>
  );
};

export default SideBar;
