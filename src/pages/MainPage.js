// export default function MainPage() {
//   return (
//     <>
//       <h1>
//         Please log in{' '}
//         <span role="img" aria-label="Greeting icon">
//           💁‍♀️
//         </span>
//       </h1>
//       <button>Login</button>
//       <button>logup</button>
//     </>
//   );
// }

import { NavLink } from 'react-router-dom';
import { LogoutBtn } from 'components/LogoutBtn/LogoutBtn';

export default function MainPage() {
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
