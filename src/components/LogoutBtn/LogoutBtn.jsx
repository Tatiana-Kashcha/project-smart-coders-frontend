// import { useState } from 'react';
// import { ReactComponent as IconLogout } from '../../icons/log-out.svg'; //!
import { useDispatch, useSelector } from 'react-redux';

import { logout } from '../../redux/auth/authOperations';
import * as s from './LogoutBtn.styled';
import { selectUser } from 'redux/auth/selectors';

// import { defer } from 'react-router-dom'; //?

const LogoutBtn = () => {
  // const [isLoading, setIsLoading] = useState(false); //?!
  const dispatch = useDispatch();
  const userLogout = useSelector(selectUser);
  const handleSubmit = () => {
    dispatch(logout(userLogout.user.id));
  };
  // const onClick = async (values, actions) => {
  //   setIsLoading(true);
  //   // await dispatch(); // тут буде редакс логаут
  //   setIsLoading(false);
  // }; //?!

  return (
    <>
      <s.LogoutButton
        type="button"
        // onClick={onClick}
        // disabled={isLoading}
        aria-label="Log out"
        onClick={handleSubmit}
      >
        Log out
        <s.IconWrap>
          <s.IconLogout />
        </s.IconWrap>
      </s.LogoutButton>
    </>
  );
};

export default LogoutBtn;
