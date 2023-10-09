import { useLocation } from 'react-router-dom';

import * as s from './Header.styled';
import { ReactComponent as BurgerMenuIcon } from '../../icons/burger-menu.svg';

import AddFeedbackBtn from '../AddFeedbackBtn/AddFeedbackBtn';
import ThemeToggle from 'components/ThemeToggler/ThemeToggle';

import UserInfo from '../UserInfo/UserInfo';

const Header = ({ shownBurger, togglshownBurger, onSideBar }) => {
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
        {title === 'Account' ? (
          <s.Title>User Profile</s.Title>
        ) : (
          <s.Title>{title}</s.Title>
        )}

        {shownBurger && (
          <s.BurgerBtn type="button" onClick={handleClick}>
            <BurgerMenuIcon />
          </s.BurgerBtn>
        )}

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
