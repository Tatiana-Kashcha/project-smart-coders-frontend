import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';

import { logout } from '../../redux/auth/authOperations';
import * as s from './LogoutBtn.styled';

const LogoutBtn = () => {
  const dispatch = useDispatch();
  const userLogout = useSelector(selectUser);
  const handleClick = () => {
    dispatch(logout(userLogout.id));
  };

  return (
    <>
      <s.LogoutButton type="button" aria-label="Log out" onClick={handleClick}>
        Log out
        <s.IconWrap>
          <s.IconLogout />
        </s.IconWrap>
      </s.LogoutButton>
    </>
  );
};

export default LogoutBtn;
