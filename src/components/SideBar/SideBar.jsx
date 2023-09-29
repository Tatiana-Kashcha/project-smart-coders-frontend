import { NavLink } from 'react-router-dom';
import LogoutBtn from 'components/LogoutBtn/LogoutBtn';

export function SideBar() {
  return (
    <section>
      <h2>User Panel</h2>
      <ul>
        <li>
          <NavLink to="/account">My account</NavLink>
        </li>
        <li>
          <NavLink to="/calendar">Calendar</NavLink>
        </li>
        <li>
          <NavLink to="/statistics">Statistics</NavLink>
        </li>
      </ul>
      <LogoutBtn />
    </section>
  );
}
