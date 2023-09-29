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
            <Link to="/login">
              <s.Button>Log in</s.Button>
            </Link>
            <br />
            <Link to="/register">
              <s.Span>Sign up</s.Span>
            </Link>
          </nav>
        </s.ContentWrapper>
      </Container>
    </s.Section>
  );
};
