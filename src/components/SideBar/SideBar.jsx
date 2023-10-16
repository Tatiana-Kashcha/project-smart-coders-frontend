import PropTypes from 'prop-types';

import UserNav from 'components/UserNav/UserNav';
import LogoutBtn from 'components/LogoutBtn/LogoutBtn';

import * as s from './SideBar.styled';

const SideBar = ({ isSmallScreen, onSideBar, onRedirect }) => {
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
  isSmallScreen: PropTypes.bool.isRequired,
  onSideBar: PropTypes.func.isRequired,
  onRedirect: PropTypes.func.isRequired,
};

export default SideBar;
