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

          <s.NavStyled>
            <s.LoginLink to="/login">
              <s.LogInText>Log in</s.LogInText>
              <s.LogInIconWrapper>
                <LogIn />
              </s.LogInIconWrapper>
            </s.LoginLink>

            <s.SignUpLink to="/register">
              <span>Sign up</span>
            </s.SignUpLink>
          </s.NavStyled>
        </s.ContentWrapper>
      </s.ContainerModific>
    </s.Section>
  );
};
