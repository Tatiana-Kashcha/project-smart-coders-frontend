import { Link } from 'react-router-dom';

export const AuthSection = () => {
  return (
    <nav>
      <Link to="/login">Log in</Link>
      <Link to="/register">Sign up</Link>
    </nav>
  );
};
