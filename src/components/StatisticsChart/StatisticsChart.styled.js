import styled from 'styled-components';
import { globalTheme } from 'theme';

export const StatWrapper = styled.div`
  padding: 28px 14px 135px;
  border-radius: 16px;

  background-color: ${props => props.theme.colors.secondBackground};

  @media screen and (min-width: ${globalTheme.breakpoints.tablet}) {
    position: relative;
    padding: 132px 32px 224px;
  }

  @media screen and (min-width: ${globalTheme.breakpoints.desktop}) {
    padding: 134px 114px 104px;
  }
`;

export const Legend = styled.div`
  display: flex;
  gap: 14px;
  margin-top: 20px;

  font-family: Inter;
  font-size: 14px;
  line-height: calc(18 / 14);

  color: ${props => props.theme.colors.secondText};

  @media screen and (min-width: ${globalTheme.breakpoints.tablet}) {
    position: absolute;
    right: 64px;
    top: 140px; //TODO: CHANGE!!!
    gap: 20px;
    font-size: 16px;
    line-height: calc(18 / 16);
  }

  @media screen and (min-width: ${globalTheme.breakpoints.desktop}) {
    right: 154px;
    top: 142px; //TODO: CHANGE!!!
  }
`;

export const DayLegend = styled.p`
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    width: 8px;
    height: 8px;
    border-radius: 100%;
    content: '';
    background-color: ${globalTheme.colors.lightRed};
  }
`;

export const MonthLegend = styled.p`
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    width: 8px;
    height: 8px;
    border-radius: 100%;
    content: '';
    background-color: ${globalTheme.colors.primary};
  }
`;

export const DiagramWrapper = styled.div`
  margin-top: 40px;
  /* height: 413px; //TODO: DELETE!!! */
  font-size: 300px; //TODO: DELETE!!!

  /* padding: 40px 14px; */
  border: 0.8px solid ${props => props.theme.colors.borderStat};
  border-radius: 20px;

  color: ${props => props.theme.colors.secondText};

  @media screen and (min-width: ${globalTheme.breakpoints.tablet}) {
    /* padding: 32px; */
    border-radius: 29px;
    /* height: 424px; //TODO: DELETE!!! */
  }

  @media screen and (min-width: ${globalTheme.breakpoints.desktop}) {
    padding: 40px;
    border-radius: 29px;
    height: 440px; //TODO: DELETE!!!
  }
`;
