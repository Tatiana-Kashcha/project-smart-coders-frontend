import styled from 'styled-components';

import { ReactComponent as ChevronLeft } from '../../icons/chevron-left.svg';
import { ReactComponent as ChevronRight } from '../../icons/chevron-right.svg';

import { globalTheme } from '../../theme';

export const PaginatorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 0 18px 0;

  @media screen and (min-width: ${globalTheme.breakpoints.tablet}) {
    margin: 0;
  }
`;

export const DisplayData = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 6px 12px;

  font-size: 14px;
  font-weight: 700;
  line-height: 1.28;
  text-transform: uppercase;

  border-radius: 8px;

  color: ${globalTheme.colors.white};
  background-color: ${globalTheme.colors.primary};

  @media screen and (min-width: ${globalTheme.breakpoints.tablet}) {
    margin: 0 8px 0 0;

    font-size: 16px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonLeft = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 7px 10px;

  border-radius: 8px 0px 0px 8px;

  border: ${props => props.theme.colors.borderPeriodPaginator};

  color: ${props =>
    props.disabled
      ? props.theme.colors.calendarInnerBackground
      : props.theme.colors.secondText};
  background-color: ${props => props.theme.colors.secondBackground};

  @media screen and (min-width: ${globalTheme.breakpoints.tablet}) {
    padding: 8px 10px;
  }
`;

export const ButtonRight = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 7px 10px;

  border-radius: 0px 8px 8px 0px;

  border: ${props => props.theme.colors.borderPeriodPaginator};

  color: ${props => props.theme.colors.secondText};
  background-color: ${props => props.theme.colors.secondBackground};

  @media screen and (min-width: ${globalTheme.breakpoints.tablet}) {
    padding: 8px 10px;
  }
`;

export const ChevronLeftMod = styled(ChevronLeft)`
  width: 16px;
  height: 16px;

  @media screen and (min-width: ${globalTheme.breakpoints.tablet}) {
    width: 18px;
    height: 18px;
  }
`;

export const ChevronRightMod = styled(ChevronRight)`
  width: 16px;
  height: 16px;

  @media screen and (min-width: ${globalTheme.breakpoints.tablet}) {
    width: 18px;
    height: 18px;
  }
`;
