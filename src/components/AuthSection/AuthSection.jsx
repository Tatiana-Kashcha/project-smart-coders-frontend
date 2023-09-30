import { Link } from 'react-router-dom';

import { ReactComponent as StartGoose } from '../../icons/start-goose.svg';

import * as s from './AuthSection.styled';

export const AuthSection = () => {
  return (
    <s.Section>
      <s.ContainerModific>
        <s.ContentWrapper>
          <s.ImgWrapper>
            <StartGoose />
          </s.ImgWrapper>

          <h1>GooseTrack</h1>

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
      </s.ContainerModific>
    </s.Section>
  );
};
