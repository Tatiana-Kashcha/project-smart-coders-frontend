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

export const AuthSection = () => {
  return (
    <s.Section>
      <s.ContainerModific>
        <s.ContentWrapper>
          <s.ImgWrapper>
            <ReusePicture
              pictures={{
                startGooseMobile1xWebp,
                startGooseMobile2xWebp,
                startGooseMobile1xPng,
                startGooseMobile2xPng,
                startGooseTablet1xWebp,
                startGooseTablet2xWebp,
                startGooseTablet1xPng,
                startGooseTablet2xPng,
                startGooseDesktop1xWebp,
                startGooseDesktop2xWebp,
                startGooseDesktop1xPng,
                startGooseDesktop2xPng,
              }}
            />
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
