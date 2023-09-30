import { Link } from 'react-router-dom';

import { ReusePicture } from 'reuse';

import startGooseMobile1xWebp from 'images/mobile/start-goose-mobile-1x.webp';
import startGooseMobile2xWebp from 'images/mobile/start-goose-mobile-2x.webp';
import startGooseMobile1xPng from 'images/mobile/start-goose-mobile-1x.png';
import startGooseMobile2xPng from 'images/mobile/start-goose-mobile-2x.png';

import startGooseTablet1xWebp from 'images/tablet/start-goose-tablet-1x.webp';
import startGooseTablet2xWebp from 'images/tablet/start-goose-tablet-2x.webp';
import startGooseTablet1xPng from 'images/tablet/start-goose-tablet-1x.png';
import startGooseTablet2xPng from 'images/tablet/start-goose-tablet-2x.png';

import startGooseDesktop1xWebp from 'images/desktop/start-goose-desktop-1x.webp';
import startGooseDesktop2xWebp from 'images/desktop/start-goose-desktop-2x.webp';
import startGooseDesktop1xPng from 'images/desktop/start-goose-desktop-1x.png';
import startGooseDesktop2xPng from 'images/desktop/start-goose-desktop-2x.png';

import * as s from './AuthSection.styled';

const pictures = {
  mobile1xWebp: startGooseMobile1xWebp,
  mobile2xWebp: startGooseMobile2xWebp,
  mobile1xPng: startGooseMobile1xPng,
  mobile2xPng: startGooseMobile2xPng,
  tablet1xWebp: startGooseTablet1xWebp,
  tablet2xWebp: startGooseTablet2xWebp,
  tablet1xPng: startGooseTablet1xPng,
  tablet2xPng: startGooseTablet2xPng,
  desktop1xWebp: startGooseDesktop1xWebp,
  desktop2xWebp: startGooseDesktop2xWebp,
  desktop1xPng: startGooseDesktop1xPng,
  desktop2xPng: startGooseDesktop2xPng,
};

console.log(pictures);
export const AuthSection = () => {
  return (
    <s.Section>
      <s.ContainerModific>
        <s.ContentWrapper>
          <s.ImgWrapper>
            <ReusePicture pictures={pictures} imgAlt="Goose logo" />
          </s.ImgWrapper>

          <h1>GooseTrack</h1>

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
