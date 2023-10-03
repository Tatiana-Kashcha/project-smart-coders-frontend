import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { AuthNavigate } from 'components/AuthNavigate/AuthNavigate';
import {
  Section,
  ContainerModific,
  AuthContainer,
  AuthImageContainer,
} from './RegisterPage.styled';
import { ReactComponent as RegisterGoose } from 'icons/signup-goose.svg';

export default function RegisterPage() {
  const toLogin = '/login';

  return (
    <Section>
      <ContainerModific>
        <AuthContainer>
          <RegisterForm />
          <AuthNavigate redirect={toLogin} titleLink="Log in" />
          <AuthImageContainer>
            <RegisterGoose
              style={{ position: 'absolute', bottom: '0px', left: '0px' }}
            />
          </AuthImageContainer>
        </AuthContainer>
      </ContainerModific>
    </Section>
  );
}
