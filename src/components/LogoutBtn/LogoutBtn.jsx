import { useState } from 'react';
// import { ReactComponent as IconLogout } from '../../icons/log-out.svg'; //!
// import { useDispatch } from 'react-redux';
import * as s from './LogoutBtn.styled';
// import { defer } from 'react-router-dom'; //?

const LogoutBtn = () => {
  const [isLoading, setIsLoading] = useState(false);
  // const dispatch = useDispatch();

  const onClick = async (values, actions) => {
    setIsLoading(true);
    // await dispatch(); // тут буде редакс логаут
    setIsLoading(false);
  };

  return (
    <>
      <s.LogoutButton
        type="button"
        onClick={onClick}
        disabled={isLoading}
        aria-label="Log out"
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
