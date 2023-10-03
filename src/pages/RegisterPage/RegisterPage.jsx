import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { AuthNavigate } from 'components/AuthNavigate/AuthNavigate';
import { ReactComponent as RegisterGoose } from 'icons/signup-goose.svg';
import * as s from './RegisterPage.styled';

export default function RegisterPage() {
  const toLogin = '/login';

  return (
    <s.Section>
      {/* <s.ContainerModific> */}
      <s.AuthContainer>
        <RegisterForm />
        <AuthNavigate redirect={toLogin} titleLink="Log in" />
        <s.AuthImageContainer>
          <RegisterGoose
            style={{ position: 'absolute', bottom: '0px', left: '0px' }}
          />
        </s.AuthImageContainer>
      </s.AuthContainer>
      {/* </s.ContainerModific> */}
    </s.Section>
  );
}
