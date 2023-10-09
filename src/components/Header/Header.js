// import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import * as s from './Header.styled';
import { ReactComponent as BurgerMenuIcon } from '../../icons/burger-menu.svg';

import AddFeedbackBtn from '../AddFeedbackBtn/AddFeedbackBtn';
import ThemeToggle from 'components/ThemeToggler/ThemeToggle';

import UserInfo from '../UserInfo/UserInfo';

const Header = ({ shownBurger, togglshownBurger, onSideBar }) => {
  // const [shownBurger, setShowBurger] = useState(true);

  // const togglshownBurger = () => {
  //   setShowBurger(prevState => !prevState);
  // };

  const handleClick = () => {
    togglshownBurger();
    onSideBar();
  };

  const location = useLocation();

  const strongLocation = location.pathname.slice(1);

  const title =
    strongLocation[0].toUpperCase() + strongLocation.slice(1).split('/')[0];

  return (
    <>
      <s.Division>
        {/* <s.Title>User Profile</s.Title> */}

        {title === 'Account' ? (
          <s.Title>User Profile</s.Title>
        ) : (
          <s.Title>{title}</s.Title>
        )}

        {/* <s.BurgerBtn type="button" onClick={onModal}> */}
        {shownBurger && (
          <s.BurgerBtn type="button" onClick={handleClick}>
            <BurgerMenuIcon />
          </s.BurgerBtn>
        )}

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
