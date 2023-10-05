import styled from 'styled-components';

import { globalTheme } from 'theme';

export const SectionStyled = styled.section`
  padding: 64px 0;
`;

export const List = styled.ul`
  li:not(:last-child) {
    margin: 0 0 64px 0;
  }

  li:nth-child(2n) {
    div {
      @media screen and (min-width: ${globalTheme.breakpoints.tablet}) {
        margin-left: auto;
      }

      @media screen and (min-width: ${globalTheme.breakpoints.desktop}) {
        margin-left: 0;
      }
    }

    @media screen and (min-width: ${globalTheme.breakpoints.desktop}) {
      flex-direction: row-reverse;

      padding: 0 205px 0 128px;
    }
  }
`;

export const Item = styled.li`
  @media screen and (min-width: ${globalTheme.breakpoints.desktop}) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 128px 0 205px;
  }
`;

export const ContentWrapper = styled.div`
  margin: 0 0 40px 0;

  @media screen and (min-width: ${globalTheme.breakpoints.tablet}) {
    margin: 0 0 48px 0;

    width: 275px;
  }

  @media screen and (min-width: ${globalTheme.breakpoints.desktop}) {
    margin: 0;
  }
`;

export const SpanNumber = styled.span`
  display: block;

  margin: 0 0 14px 0;

  font-size: 80px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -4px;

  color: ${globalTheme.colors.primary};
`;

export const FirstText = styled.h2`
  display: table;

  margin: 0 0 8px 0;

  padding: 4px 16px;

  font-size: 32px;
  font-weight: 700;
  line-height: 1.25;
  text-transform: uppercase;

  border-radius: 44px;

  color: ${globalTheme.colors.primary};
  background-color: ${globalTheme.colors.bgBlue};
`;

export const SecondText = styled.h2`
  margin: 0 0 14px 0;

  font-size: 32px;
  font-weight: 700;
  line-height: 1.25;
  text-transform: uppercase;

  color: ${globalTheme.colors.blackTitle};

  @media screen and (min-width: ${globalTheme.breakpoints.tablet}) {
    margin: 0 0 24px 0;
  }
`;

export const Description = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;

  color: rgba(17, 17, 17, 0.9);
`;
