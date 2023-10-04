// import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ element: Element, redirecrtTo = '/' }) => {
  //   const isLoggedIn = useSelector(state => state.contacts.isLoggedIn);
  return !true ? <Navigate to={redirecrtTo} /> : <Element />;
};
