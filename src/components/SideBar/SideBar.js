import { NavLink } from 'react-router-dom';

export function SideBar() {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/account">account</NavLink>
        </li>
        <li>
          <NavLink to="/calendar/month/:currrentDate">calendar</NavLink>
        </li>
        <li>
          <NavLink to="/statistics">statistics</NavLink>
        </li>
      </ul>
    </>
  );
}
