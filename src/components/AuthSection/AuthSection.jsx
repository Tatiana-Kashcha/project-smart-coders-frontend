import { Link } from 'react-router-dom';
import * as s from './AuthSection.styled';
import { Container } from 'stylesheet/Container.styled';

export const AuthSection = () => {
  return (
    <s.Section>
      <Container>
        <s.ContentWrapper>
          {/* Logo */}
          <nav>
            <Link to="/login">Log in</Link>
            <Link to="/register">Sign up</Link>
          </nav>
        </s.ContentWrapper>
      </Container>
    </s.Section>
  );
};
