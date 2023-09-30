import { Link } from 'react-router-dom';
import { theme } from 'theme';

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
            <picture>
              {/* For mobile devices */}
              <source
                media={`(max-width: calc(${theme.breakpoints.tablet} - 0.5px))`}
                srcSet={`${startGooseMobile1xWebp} 1x, ${startGooseMobile2xWebp} 2x`}
                type="image/webp"
              />
              <source
                media={`(max-width: calc(${theme.breakpoints.tablet} - 0.5px))`}
                srcSet={`${startGooseMobile1xPng} 1x, ${startGooseMobile2xPng} 2x`}
                type="image/png"
              />

              {/* For tablets */}
              <source
                media={`(min-width: ${theme.breakpoints.tablet}) and (max-width: calc(${theme.breakpoints.desktop} - 0.5px))`}
                srcSet={`${startGooseTablet1xWebp} 1x, ${startGooseTablet2xWebp} 2x`}
                type="image/webp"
              />
              <source
                media={`(min-width: ${theme.breakpoints.tablet}) and (max-width: calc(${theme.breakpoints.desktop} - 0.5px))`}
                srcSet={`${startGooseTablet1xPng} 1x, ${startGooseTablet2xPng} 2x`}
                type="image/png"
              />

              {/* For desktops */}
              <source
                media={`(min-width: ${theme.breakpoints.desktop})`}
                srcSet={`${startGooseDesktop1xWebp} 1x, ${startGooseDesktop2xWebp} 2x`}
                type="image/webp"
              />
              <source
                media={`(min-width: ${theme.breakpoints.desktop})`}
                srcSet={`${startGooseDesktop1xPng} 1x, ${startGooseDesktop2xPng} 2x`}
                type="image/png"
              />

              {/* Default */}
              <img src={startGooseMobile1xPng} alt="Goose logo" />
            </picture>
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
