// import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ element: Element, redirectTo = '/' }) => {
  //   const isLoggedIn = useSelector(state => state.contacts.isLoggedIn);
  return !true ? <Navigate to={redirectTo} /> : <Element />;
};
