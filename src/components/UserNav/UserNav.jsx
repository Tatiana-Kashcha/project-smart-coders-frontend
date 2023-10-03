import PropTypes from 'prop-types';

import * as s from './UserNav.styled';

const UserNav = ({ onRedirect }) => {
  return (
    <nav>
      <s.List>
        <li>
          <s.StyledNavLink to="/account" onClick={onRedirect}>
            <s.IconWrap>
              <s.IconUserCheck />
            </s.IconWrap>
            My account
          </s.StyledNavLink>
        </li>
        <li>
          <s.StyledNavLink to="/calendar" onClick={onRedirect}>
            <s.IconWrap>
              <s.IconCalendarCheck />
            </s.IconWrap>
            Calendar
          </s.StyledNavLink>
        </li>
        <li>
          <s.StyledNavLink to="/statistics" onClick={onRedirect}>
            <s.IconWrap>
              <s.IconStat />
            </s.IconWrap>
            Statistics
          </s.StyledNavLink>
        </li>
      </s.List>
    </nav>
  );
};

UserNav.propTypes = {
  onRedirect: PropTypes.func.isRequired,
};

export default UserNav;
