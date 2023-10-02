import * as s from './UserNav.styled';

const UserNav = () => {
  return (
    <nav>
      <s.List>
        <li>
          <s.StyledNavLink to="/account">
            <s.IconWrap>
              <s.IconUserCheck />
            </s.IconWrap>
            My account
          </s.StyledNavLink>
        </li>
        <li>
          <s.StyledNavLink to="/calendar">
            <s.IconWrap>
              <s.IconCalendarCheck />
            </s.IconWrap>
            Calendar
          </s.StyledNavLink>
        </li>
        <li>
          <s.StyledNavLink to="/statistics">
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

export default UserNav;
