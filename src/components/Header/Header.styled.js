import styled from 'styled-components';
import { globalTheme } from 'theme';

export const Division = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 0;
  color: ${props => props.theme.colors.primaryText};
  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 1;

  @media screen and (max-width: calc(${globalTheme.breakpoints
      .desktop} - 0.5px)) {
    display: none;
  }
`;

export const BurgerBtn = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;

  width: 24px;
  height: 24px;

  color: ${props => props.theme.colors.primaryText};

  cursor: pointer;

  @media screen and (min-width: ${globalTheme.breakpoints.tablet}) {
    width: 34px;
    height: 34px;
  }

  @media screen and (min-width: ${globalTheme.breakpoints.desktop}) {
    display: none;
  }
`;

export const SubDivision = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
