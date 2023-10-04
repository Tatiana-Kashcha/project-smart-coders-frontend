import { LoginForm } from 'components/LoginForm/LoginForm';
import { AuthNavigate } from 'components/AuthNavigate/AuthNavigate';
import { ReactComponent as LoginGoose } from 'icons/login-goose.svg';
import * as s from './LoginPage.styled';

export default function LoginPage() {
  const toRegister = '/register';

  return (
    <s.Section>
      <s.AuthContainer>
        <LoginForm />
        <AuthNavigate redirect={toRegister} titleLink="Sign up" />
        <s.AuthImageContainer>
          <LoginGoose
            style={{ position: 'absolute', bottom: '0px', right: '0px' }}
          />
        </s.AuthImageContainer>
      </s.AuthContainer>
    </s.Section>
  );
}
