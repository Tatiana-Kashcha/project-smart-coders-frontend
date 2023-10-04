// import { useState, useEffect } from 'react';

import * as s from './Header.styled';
import { ReactComponent as BurgerMenuIcon } from '../../icons/burger-menu.svg';

import AddFeedbackBtn from '../AddFeedbackBtn/AddFeedbackBtn';
import ThemeToggle from 'components/ThemeToggler/ThemeToggle';

import UserInfo from '../UserInfo/UserInfo';

const Header = ({ onSideBar }) => {
  // const [shownModal, setShowModal] = useState(false);

  // const onModal = () => {
  //   setShowModal(prevShownModal => !prevShownModal);
  // };

  // const location = useLocation();
  // console.log(location.pathname);

  // const strongLocation = location.pathname.slice(1);

  // const title = strongLocation[0].toUpperCase() + strongLocation.slice(1);
  // console.log(title);

  return (
    <>
      <s.Division>
        <s.Title>User Profile</s.Title>

        {/* {title === 'Account' ? (
        <s.Title>User Profile</s.Title>
      ) : (
        <s.Title>{title}</s.Title>
      )} */}

        {/* <s.BurgerBtn type="button" onClick={onModal}> */}

        <s.BurgerBtn type="button" onClick={onSideBar}>
          <BurgerMenuIcon />
        </s.BurgerBtn>
        {/* {shownModal && <AddFeedbackModal onClose={onModal} />} */}

        <s.SubDivision>
          <AddFeedbackBtn />
          <ThemeToggle />
          <UserInfo />
        </s.SubDivision>
      </s.Division>
    </>
  );
};

export default Header;
