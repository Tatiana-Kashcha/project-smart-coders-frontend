import { useState } from 'react';
import { ReactComponent as IconLogout } from '../../icons/log-out.svg';
// import { useDispatch } from 'react-redux';
import * as s from './LogoutBtn.styled';

export const LogoutBtn = () => {
  const [isLoading, setIsLoading] = useState(false);
  // const dispatch = useDispatch();

  const onClick = async (values, actions) => {
    setIsLoading(true);
    // await dispatch(); // тут буде редакс логаут
    setIsLoading(false);
  };

  return (
    <>
      <s.LogButton
        type="button"
        onClick={onClick}
        disabled={isLoading}
        aria-label="Log out"
      >
        Log out
        <s.LogButtonIcon>
          <IconLogout />
        </s.LogButtonIcon>
      </s.LogButton>
    </>
  );
};
