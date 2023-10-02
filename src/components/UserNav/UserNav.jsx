// import { NavLink } from 'react-router-dom'; //!
import * as s from './UserNav.styled';

const UserNav = () => {
  return (
    <nav>
      <s.List>
        <li>
          <s.StyledNavLink to="/account">My account</s.StyledNavLink>
        </li>
        <li>
          <s.StyledNavLink to="/calendar">Calendar</s.StyledNavLink>
        </li>
        <li>
          <s.StyledNavLink to="/statistics">Statistics</s.StyledNavLink>
        </li>
      </s.List>
    </nav>
  );
};

export default UserNav;
