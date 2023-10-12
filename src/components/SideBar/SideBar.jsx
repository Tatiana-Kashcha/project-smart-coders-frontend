import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import UserNav from 'components/UserNav/UserNav';
import LogoutBtn from 'components/LogoutBtn/LogoutBtn';

import { globalTheme } from 'theme';
import * as s from './SideBar.styled';

const SideBar = ({ togglshownBurger, onSideBar, onRedirect }) => {
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
    <>
      <s.SideBar>
        <s.LogoWrap>
          <s.IconWrap>
            <s.IconLogo />
          </s.IconWrap>
          {isSmallScreen && (
            <s.CloseBtn
              type="button"
              aria-label="Close"
              onClick={() => {
                onSideBar();
              }}
            >
              <s.IconWrap>
                <s.IconClose />
              </s.IconWrap>
            </s.CloseBtn>
          )}
        </s.LogoWrap>
        <s.SideBarLabel>User Panel</s.SideBarLabel>
        <UserNav onRedirect={onRedirect} />
        <LogoutBtn />
      </s.SideBar>
    </>
  );
};

SideBar.propTypes = {
  onSideBar: PropTypes.func.isRequired,
  onRedirect: PropTypes.func.isRequired,
};

export default SideBar;
