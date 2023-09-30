import { Link } from 'react-router-dom';

import { ReactComponent as StartGoose } from '../../icons/start-goose.svg';
import { ReactComponent as LogIn } from '../../icons/log-in.svg';

import * as s from './AuthSection.styled';

export const AuthSection = () => {
  return (
    <s.Section>
      <s.ContainerModific>
        <s.ContentWrapper>
          <s.ImgWrapper>
            <StartGoose />
          </s.ImgWrapper>

          <s.TextH1>GooseTrack</s.TextH1>

          <s.navStyled>
            <Link to="/login">
              <s.Button>
                <s.SpanLogIn>Log in</s.SpanLogIn>
                <s.LogInWrapper>
                  <LogIn />
                </s.LogInWrapper>
              </s.Button>
            </Link>

            <Link to="/register">
              <s.SpanSignUp>Sign up</s.SpanSignUp>
            </Link>
          </s.navStyled>
        </s.ContentWrapper>
      </s.ContainerModific>
    </s.Section>
  );
};
