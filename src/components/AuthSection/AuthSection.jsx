import { Link } from 'react-router-dom';

import startGooseMobile1x from 'images/mobile/start-goose-mobile-1x.png';

import * as s from './AuthSection.styled';

export const AuthSection = () => {
  return (
    <s.Section>
      <s.ContainerModific>
        <s.ContentWrapper>
          <s.ImgWrapper>
            <img src={startGooseMobile1x} alt="goose logo" />
          </s.ImgWrapper>
          <nav>
            <Link to="/login">
              <s.Button>Log in</s.Button>
            </Link>
            <br />
            <Link to="/register">
              <s.Span>Sign up</s.Span>
            </Link>
          </nav>
        </s.ContentWrapper>
      </s.ContainerModific>
    </s.Section>
  );
};
