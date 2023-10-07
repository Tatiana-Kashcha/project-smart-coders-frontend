import * as s from './NotFoundPage.styled';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';

const NotFoundPage = () => {
  return (
    <s.Wrapper>
      <s.ContentWrap>
        <s.NumberWrap>
          <s.Number>4</s.Number>
          <s.RocketStyled />
          <s.Number>4</s.Number>
        </s.NumberWrap>
        <s.Text>
          We`re sorry, the page you requested could not be found. Please go back
          to the homepage.
        </s.Text>
        <s.StyledLink to={useSelector(selectIsLoggedIn) ? '/calendar' : '/'}>
          Back to home
        </s.StyledLink>
      </s.ContentWrap>
    </s.Wrapper>
  );
};

export default NotFoundPage;
