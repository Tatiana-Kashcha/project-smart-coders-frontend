import * as s from './AuthSection.styled';

export const AuthSection = () => {
  return (
    <s.Section>
      <s.ContainerModific>
        <s.ContentWrapper>
          <s.StartGooseIcon />

          <s.TextH1>
            G<s.FirstLetterO>o</s.FirstLetterO>
            <s.SecondLetterO>o</s.SecondLetterO>seTrack
          </s.TextH1>

          <s.NavStyled>
            <s.LoginLink to="/login">
              <s.LogInText>Log in</s.LogInText>
              <s.LogInIcon />
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
