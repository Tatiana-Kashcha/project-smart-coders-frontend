import { LoginForm } from 'components/LoginForm/LoginForm';
import { AuthNavigate } from 'components/AuthNavigate/AuthNavigate';
import { AuthContainer, AuthImageContainer } from './LoginPage.styled';
import { ReactComponent as LoginGoose } from 'icons/login-goose.svg';

export default function LoginPage() {
  const toRegister = '/register';

  return (
    <AuthContainer>
      <LoginForm />
      <AuthNavigate redirect={toRegister} titleLink="Sign up" />
      <AuthImageContainer>
        <LoginGoose
          style={{ position: 'absolute', bottom: '0px', right: '0px' }}
        />
      </AuthImageContainer>
    </AuthContainer>
  );
}
