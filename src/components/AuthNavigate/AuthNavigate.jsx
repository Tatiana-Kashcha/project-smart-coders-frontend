import { AuthRedirect } from './AuthNavigate.styled';

export const AuthNavigate = ({ redirect, titleLink }) => {
  return (
    <>
      <AuthRedirect to={redirect}>{titleLink}</AuthRedirect>
    </>
  );
};
