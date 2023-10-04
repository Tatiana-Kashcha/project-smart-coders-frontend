import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const PrivateRoute = ({ element: Element, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return !isLoggedIn ? <Navigate to={redirectTo} /> : <Element />;
};
