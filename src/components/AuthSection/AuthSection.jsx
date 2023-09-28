import { Link } from 'react-router-dom';
import * as s from './AuthSection.styled';

export const AuthSection = () => {
  return (
    <s.Section>
      {/* Logo */}
      <nav>
        <Link to="/login">Log in</Link>
        <Link to="/register">Sign up</Link>
      </nav>
    </s.Section>
  );
};
